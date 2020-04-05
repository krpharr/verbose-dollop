// title - Title of the book from the Google Books API
// authors - The books's author(s) as returned from the Google Books API
// description - The book's description as returned from the Google Books API
// image - The Book's thumbnail image as returned from the Google Books API
// link - The Book's information link as returned from the Google Books API

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

const Transaction = mongoose.model("Books", booksSchema);

module.exports = Books;