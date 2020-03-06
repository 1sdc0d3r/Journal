const router = require("express").Router();
const db = require("../../../database/model");

router.get("/", (req, res) => {
  const { limit, offset } = req.query;
  const id = req.decodedToken.subject;
  db.getJournalByUserId(id, limit, offset)
    .then(entries => res.status(200).json(entries))
    .catch(({ name, message, stack, code }) =>
      res.status(500).json({ name, message, stack, code })
    );
  //   db.getEntries(limit, offset)
  //     .then(entries => res.status(200).json(entries))
  //     .catch(err =>
  //       res
  //         .status(500)
  //         .json({ errorMessage: "unable to retrieve entries", error: err })
  //     );
});

module.exports = router;
