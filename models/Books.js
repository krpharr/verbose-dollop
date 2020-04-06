const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Enter a title for book"
  },
  authors: {
    type: Array,
    required: "Book requires at least one author"
  },
  description: {
    type: String,
    trim: true,
    required: "Enter a description for book"
  },
  image: {
    type: String,
    trim: true,
  },
  link: {
    type: String,
    trim: true,
  }
});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;