import axios from "axios";

export default {
  search: function(term, start, max) {
    return axios.get(`api/googlebooks/${term}/${start}/${max}`);
  },
  getBooks: function() {
    return axios.get("api/books");
  },
  saveBook: function(bookObj) {
    return axios.post("api/books", bookObj);
  },
  deleteBook: function(id) {
    return axios.delete(`api/books/${id}`);
  }
};