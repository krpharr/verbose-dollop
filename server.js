const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const routes = require("./routes/api");

const result = dotenv.config();
if (result.error) {
  throw result.error;
}
console.log(result.parsed);
console.log(process.env.API_KEY);

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app

app.use(routes)
  // Define any API routes before this runs
  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "./client/build/index.html"));
  // });

mongoose.connect(process.env.MONGODB_URI || "mongodb://varsphilos:vars-2020@ds263808.mlab.com:63808/heroku_nt0dl4xc", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});