const router = require("express").Router();
const request = require('request');
const Books = require("../models/Books.js");

router.get("/api/googlebooks/:search", (req, res) => {
  const searchTerm = req.params.search;
  console.log(searchTerm);
  const query = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${process.env.API_KEY}`;
  request(query, function(error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    console.log("typeof body: ", typeof body);
    const jbody = JSON.parse(body);
    console.log("typeof jbody: ", typeof jbody);
    console.log(typeof jbody.items)
    res.json(jbody.items);
  });
});

//get all books from database
router.get("/api/books", (req, res) => {
  Books.find({})
    .sort({ date: -1 })
    .then(dbBooks => {
      res.json(dbBooks);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//save boook to database
router.post("/api/books", ({ body }, res) => {
  Books.create(body)
    .then(dbBooks => {
      res.json(dbBooks);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//delete book from database
router.delete("/api/books/:id", (req, res) => {
  Books.remove({
      _id: req.params.id
    })
    .then(dbBooks => {
      res.json(dbBooks);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


module.exports = router;