const router = require("express").Router();
const db = require("../../../database/model");

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

module.exports = router;
