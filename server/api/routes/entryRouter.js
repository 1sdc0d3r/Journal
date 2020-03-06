const router = require("express").Router();
const db = require("../../../database/model");
const { validateEntry } = require("../middleware/entryMiddleware");

router.get("/", (req, res) => {
  const { limit, offset } = req.query;
  db.getEntries(limit, offset)
    .then(entries => res.status(200).json(entries))
    .catch(err =>
      res
        .status(500)
        .json({ errorMessage: "unable to retrieve entries", error: err })
    );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.getEntryById(id)
    .then(entry => res.status(200).json(entry))
    .catch(err =>
      res
        .status(500)
        .json({ errorMessage: "unable to retrieve entry", error: err })
    );
});

router.post("/", validateEntry, (req, res) => {
  const entry = req.body;
  db.insertEntry(entry)
    .then(entry => res.status(200).json(entry))
    .catch(err =>
      res.status(500).json({ errorMessage: "unable to add entry", error: err })
    );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const newEntry = req.body;

  db.modifyEntry(id, newEntry)
    .then(entry =>
      res.status(201).json({ message: "successfully updated entry", entry })
    )
    .catch(err =>
      res
        .status(500)
        .json({ errorMessage: "unable to update entry", error: err })
    );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.removeEntry(id)
    .then(count => res.status(200).json(count))
    .catch(err =>
      res
        .status(500)
        .json({ errorMessage: "unable to delete entry", error: err })
    );
});

module.exports = router;
//  "knex seed:run --env testing && cross-env NODE_ENV=testing && jest --watchAll --verbose"
