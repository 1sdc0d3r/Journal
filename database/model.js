const db = require("./journalConfig");

module.exports = {
  insertEntry,
  getUsers,
  getUserById,
  getUserByUsername,
  getUserByEmail,
  insertUser,
  modifyUser,
  removeUser,
  getEntries,
  getEntryById,
  modifyEntry,
  removeEntry,
  getJournalByUserId,
  truncate
};

//* User
function insertUser(user) {
  return db("User").insert(user);
}
function getUsers() {
  return db("User");
}
function getUserById(id) {
  return db("User")
    .where({ id })
    .first();
}

function getUserByUsername(username) {
  return db("User")
    .where({ username })
    .first();
}

function getUserByEmail(email) {
  return db("User")
    .where({ email })
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
  // db()
}

//todo ORDERBY NOT SORTING CORRECTLY
function getEntries(limit, offset) {
  return db("Entry")
    .orderBy("id")
    .limit(limit)
    .offset(offset);
}

function getEntryById(id) {
  return db("Entry")
    .where({ id })
    .first();
}

function modifyEntry(id, entry) {
  return db("Entry")
    .update(entry)
    .where({ id })
    .then(id => {
      return getEntryById(id);
    });
}

function removeEntry(id) {
  return db("Entry")
    .where({ id })
    .del();
}

//* Journal
function getJournalByUserId(id) {
  return db("Journal as j")
    .join("User as u", "j.user_id", "u.id")
    .join("Entry as e", "j.entry_id", "e.id")
    .select("e.*")
    .where("u.id", id);
}

//* Testing
function truncate() {
  return db("User").truncate();
}
