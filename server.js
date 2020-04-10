const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const router = require("express").Router();
const routes = require("./routes/api");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  // router.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "./client/build/index.html"));
  // });

  // router.get("/*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "./client/build/index.html"));
  // });
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});