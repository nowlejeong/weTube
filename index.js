const express = require("express");
const app = express();

const POST = 4000;

function handleListening() {
  console.log(`Listening on : https://localhost:${POST}`);
}

const handleHome = (req, res) => {
  res.send("Hi, from home!!");
};
const handleProfile = (req, res) => {
  res.send("You are on my Profile!");
};

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(POST, handleListening);
