const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
  {
    username: "Todd",
    comment: "lol thats me",
  },
  {
    username: "Andy",
    comment: "What on earth",
  },
  {
    username: "Helen",
    comment: "I am mother",
  },
  {
    username: "Jack",
    comment: "I like dogs",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new", { comments });
});

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`Here are your ${qty} ${meat} tacos`);
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.send(`It Worked!`);
});

app.listen(3000, () => {
  console.log("Port 3000");
});
