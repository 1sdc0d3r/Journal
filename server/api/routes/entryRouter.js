const router = require("express").Router();
const db = require("../../../database/model");
const { validateEntry } = require("../middleware/entryMiddleware");

router.get("/", (req, res) => {
  const { limit, offset } = req.query;
  db.getEntries(limit, offset)
    .then(entries => res.status(200).json(entries))
    .catch(({ name, message, stack, code }) =>
      res.status(500).json({
        errorMessage: "unable to retrieve entries",
        error: { name, message, stack, code }
      })
    );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.getEntryById(id)
    .then(entry => res.status(200).json(entry))
    .catch(({ name, message, stack, code }) =>
      res.status(500).json({
        errorMessage: "unable to retrieve entry",
        error: { name, message, stack, code }
      })
    );
});

router.post("/", validateEntry, (req, res) => {
  const entry = req.body;
  const userId = req.decodedToken.subject; //id
  db.insertEntry(entry)
    .then(([id]) => {
      //todo if registered can't post due to key constrains until logged out
      //todo return id
      db.updateJournal(userId, id).then(() => res.status(201).end());
    })
    .catch(({ name, message, stack, code }) =>
      res
        .status(500)
        .json({
          errorMessage: "unable to add entry",
          error: { name, message, stack, code }
        })
    );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const newEntry = req.body;

  db.modifyEntry(id, newEntry)
    .then(entry =>
      res.status(201).json({ message: "successfully updated entry", entry })
    )
    .catch(({ name, message, stack, code }) =>
      res
        .status(500)
        .json({
          errorMessage: "unable to update entry",
          error: { name, message, stack, code }
        })
    );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.removeEntry(id)
    .then(count => res.status(200).json(count))
    .catch(({ name, message, stack, code }) =>
      res
        .status(500)
        .json({
          errorMessage: "unable to delete entry",
          error: { name, message, stack, code }
        })
    );
});

module.exports = router;
//  "knex seed:run --env testing && cross-env NODE_ENV=testing && jest --watchAll --verbose"
