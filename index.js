require("dotenv").config();
const server = require("./server/server");
const { PORT } = process.env || 5001;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
