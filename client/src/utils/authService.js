module.exports = {
  setToken,
  getToken,
  removeToken
};

function setToken(token) {
  return localStorage.setItem("journalToken", token);
}

function getToken() {
  return localStorage.getItem("journalToken");
}

function removeToken() {
  return localStorage.removeItem("journalToken");
}
