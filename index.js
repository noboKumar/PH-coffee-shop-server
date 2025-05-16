const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Coffee Server is ready");
});
app.listen(port, () => {
  console.log(`server port is running on ${port}`);
});
