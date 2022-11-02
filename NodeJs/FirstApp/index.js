const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("We have a new request...");
//   res.send("<h1>This is a h1</h1>");
// });

// GET

// app.get("*", (req, res) => {
//   res.send("I have no idea what this request is🤔");
// });

app.get("/", (req, res) => {
  res.send("WELCOME TO THE HOME PAGE 🥰");
});
app.get("/cats", (req, res) => {
  res.send("MEOW");
});
app.get("/dogs", (req, res) => {
  res.send("MEOW");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post Id ${postId} on ${subreddit}</h1>`);
});

app.get("/search", (req, res) => {
  const { q, color } = req.query;
  console.log(q, color);
  res.send(`<h1>Search results for: ${q}, ${color} </h1>`);
});

// POST

app.post("/cats", (req, res) => {
  res.send("This is the post version 🐈");
});
app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
