const router = require("express").Router();
const journalDb = require("../../../database/model/journalModel");

router.get("/", (req, res) => {
  const id = req.decodedToken.subject;
  journalDb
    .getJournalByUserId(id)
    .then((entries) => {
      res.status(200).json(entries);
    })
    .catch(({ name, message, stack, code }) =>
      res.status(500).json({ name, message, stack, code })
    );
  //   db.getEntries(limit, offset)
  //     .then(entries => res.status(200).json(entries))
  //     .catch(({ name, message, stack, code }) =>
  //       res
  //         .status(500)
  //         .json({ errorMessage: "unable to retrieve entries", error: { name, message, stack, code } })
  //     );
});

module.exports = router;
