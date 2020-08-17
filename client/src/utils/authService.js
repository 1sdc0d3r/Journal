module.exports = {
  setToken,
  getToken,
  removeToken,
  setUser,
  getUser,
  removeUser,
};

function setToken(token) {
  return localStorage.setItem("journalToken", token);
}
function setUser(user) {
  return localStorage.setItem("journalUser", user);
}

function getToken() {
  return localStorage.getItem("journalToken");
}
function getUser() {
  return localStorage.getItem("journalUser");
}

function removeToken() {
  return localStorage.removeItem("journalToken");
}
function removeUser() {
  return localStorage.removeItem("journalUser");
}
