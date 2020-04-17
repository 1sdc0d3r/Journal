module.exports = {
  validateEntry,
};

function validateEntry(req, res, next) {
  const entry = req.body;
  console.log({ entry });
  !entry.description
    ? res.status(400).json({ errorMessage: "Please provide description" })
    : next();
}
