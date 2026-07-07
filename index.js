const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const revision = 5;
// Reply with "hello worlds" for any request
app.use((req, res) => {
  res.json({ message: "hello worlds", revision: revision });
});

app.listen(PORT, () => {
  console.log(`Server is running ${revision} on port ${PORT}`);
});