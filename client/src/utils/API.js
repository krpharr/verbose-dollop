import axios from "axios";

export default {
  search: function(term) {
    return axios.get(`api/googlebooks/${term}`);
  },
  getBooks: function() {
    return axios.get("api/books");
  }
};