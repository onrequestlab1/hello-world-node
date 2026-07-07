const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const revision = 6;
// Reply with "hello worlds" for any request
app.use((req, res) => {
  res.json({ message: "hello worlds", revision: revision , cicdWorking: true});
});

app.listen(PORT, () => {
  console.log(`Server is running ${revision} on port ${PORT}`);
});