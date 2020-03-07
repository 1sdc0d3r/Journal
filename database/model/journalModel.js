const db = require("../journalConfig");

module.exports = {
  getJournalByUserId,
  updateJournal,
  truncate
};

//* Journal
function getJournalByUserId(id, limit, offset) {
  return db("Journal as j")
    .join("User as u", "j.user_id", "u.id")
    .join("Entry as e", "j.entry_id", "e.id")
    .select("e.*")
    .where("u.id", id)
    .limit(limit)
    .offset(offset);
}

function updateJournal(userId, entryId) {
  return db("Journal").insert({ user_id: userId, entry_id: entryId });
}

//* Testing
function truncate() {
  return db("Journal").truncate();
}
