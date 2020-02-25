const server = require("./server/server");
const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log(`http://localhost:5000`);
});
