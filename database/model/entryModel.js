const db = require("../journalConfig");

module.exports = {
  insertEntry,
  getEntries,
  getEntryById,
  modifyEntry,
  removeEntry,
  favorite,
  truncate
};

//* Entry
function insertEntry(entry) {
  return db("Entry")
    .insert(entry)
    .returning("id");
}

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

//todo toggle favorite field
function favorite(id) {
  return db("Entry")
    .update({ favorite: true })
    .where({ id });
}

//* Testing
function truncate() {
  return db("Entry").truncate();
}
