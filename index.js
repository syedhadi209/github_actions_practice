import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "hello" });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
