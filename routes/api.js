const router = require("express").Router();
const Books = require("../models/Books.js");

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

router.post("/api/books", ({ body }, res) => {
  Books.create(body)
    .then(dbBooks => {
      res.json(dbBooks);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

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