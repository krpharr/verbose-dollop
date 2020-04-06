const router = require("express").Router();
const request = require('request');
const Books = require("../models/Books.js");

// Pagination
// You can paginate the volumes list by specifying two values in the parameters for the request:
// startIndex - The position in the collection at which to start. The index of the first item is 0.
// maxResults - The maximum number of results to return. The default is 10, and the maximum allowable value is 40.

router.get("/api/googlebooks/:search/:start/:max", (req, res) => {
  const { searchTerm, start, max } = req.params
  console.log(searchTerm);
  const query = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${start}&maxResults=${max}&key=${process.env.API_KEY}`;
  request(query, function(error, response, body) {
    console.error('error:', error);
    // console.log('statusCode:', response && response.statusCode); 
    // console.log('body:', body); 
    const jbody = JSON.parse(body);
    res.json(jbody);
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