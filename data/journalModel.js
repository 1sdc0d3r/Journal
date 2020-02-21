const db = require("./journalConfig");

module.exports = {
  insertEntry,
  getUserById,
  getUserByUsername,
  insertUser,
  modifyUser,
  removeUser,
  getEntry,
  modifyEntry,
  removeEntry,
  getJournalByUserId
};

//* User
function insertUser(user) {
  console.log(user);
  return db("User").insert(user);
}

function getUserById(id) {
  return db("User").where({ id });
}

function getUserByUsername(username) {
  return db("User")
    .where({ username })
    .first();
}

function modifyUser(id, user) {
  return db("User")
    .update(user)
    .where({ id });
}

function removeUser(id) {
  return db("User").delete({ id });
}

//* Entry
function insertEntry(entry) {
  return db("Entry").insert(entry);
}

function getEntry(id) {
  return db("Entry").where({ id });
}

function modifyEntry(id, entry) {
  return db("Entry")
    .update(entry)
    .where({ id });
}

function removeEntry(id) {
  return db("Entry").where({ id });
}

//* Journal
function getJournalByUserId(id) {
  return db("Journal as j")
    .join("User as u", "j.user_id", "u.id")
    .join("Entry as e", "j.entry_id", "e.id")
    .select("e.*")
    .where("u.id", id);
}
