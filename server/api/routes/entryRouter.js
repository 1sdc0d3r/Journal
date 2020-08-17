const router = require("express").Router();
const entryDb = require("../../../database/model/entryModel");
const journalDb = require("../../../database/model/journalModel");
const { validateEntry } = require("../middleware/entryMiddleware");

router.get("/", (req, res) => {
  const { limit, offset } = req.query;
  entryDb
    .getEntries(limit, offset)
    .then((entries) => res.status(200).json(entries))
    .catch(({ name, message, stack, code }) =>
      res.status(500).json({
        errorMessage: "unable to retrieve entries",
        error: { name, message, stack, code },
      })
    );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  entryDb
    .getEntryById(id)
    .then((entry) => res.status(200).json(entry))
    .catch(({ name, message, stack, code }) =>
      res.status(500).json({
        errorMessage: "unable to retrieve entry",
        error: { name, message, stack, code },
      })
    );
});

router.post("/", validateEntry, (req, res) => {
  const entry = req.body;
  const userId = req.decodedToken.subject; //id
  // console.log({ entry }, { userId });
  entryDb
    .insertEntry(entry)
    .then(([id]) =>
      journalDb.updateJournal(userId, id).then(() => res.status(201).end())
    )
    .catch(({ name, message, stack, code }) =>
      res.status(500).json({
        errorMessage: "unable to add entry",
        error: { name, message, stack, code },
      })
    );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const newEntry = req.body;
  // newEntry.modified_at = Date.now();
  entryDb
    .modifyEntry(id, newEntry)
    .then((entry) =>
      res.status(201).json({ message: "successfully updated entry", entry })
    )
    .catch(({ name, message, stack, code }) =>
      res.status(500).json({
        errorMessage: "unable to update entry",
        error: { name, message, stack, code },
      })
    );
});
// tbl.increments("id").primary();
// tbl.dateTime("created_at").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
// tbl.dateTime("updated_at");
// tbl.string("description").notNullable();

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  entryDb
    .removeEntry(id)
    .then((count) => res.status(200).json(count))
    .catch(({ name, message, stack, code }) => {
      console.log(message, stack);
      res.status(500).json({
        errorMessage: "unable to delete entry",
        error: { name, message, stack, code },
      });
    });

  // it is finding the proper ID, its about the table constraints with foreign keys
  //You are right your model is fine
  // :thumbsup:
});

router.get("/favorite/:id", (req, res) => {
  const { id } = req.params;
  entryDb
    .getEntryById(id)
    .then((entry) => {
      entry.favorite = !entry.favorite;
      entryDb
        .favorite(id, entry)
        .then((newEntry) => {
          res.status(200).json(newEntry);
        })
        .catch(({ name, message, stack, code }) =>
          res.status(500).json({
            errorMessage: "unable to favorite entry",
            error: { name, message, stack, code },
          })
        );
    })
    .catch(({ name, message, stack, code }) => {
      res.status(500).json({
        errorMessage: "unable to find entry",
        error: { name, message, stack, code },
      });
    });
});

// * newField-feature
// router.post("/field", (req, res) => {
//   const { field } = req.body;
//   res.json({ message: "test NEW FIELD" });
// });

module.exports = router;
//  "knex seed:run --env testing && cross-env NODE_ENV=testing && jest --watchAll --verbose"
