const db = require("../journalConfig");

module.exports = {
  getUsers,
  getUserById,
  getUserByUsername,
  getUserByEmail,
  insertUser,
  modifyUser,
  removeUser,
  truncate,
};

//* User
function insertUser(user) {
  return db("User").insert(user).returning("*");
}
function getUsers() {
  return db("User");
}
function getUserById(id) {
  return db("User").where({ id }).first();
}

function getUserByUsername(username) {
  return db("User").where({ username }).first();
}

function getUserByEmail(email) {
  return db("User").where({ email }).first();
}

function modifyUser(id, user) {
  return db("User").update(user).where({ id });
}

function removeUser(id) {
  return db("User").delete({ id });
}

//* Testing
function truncate() {
  return db("User").truncate();
}
