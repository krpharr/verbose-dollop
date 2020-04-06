import axios from "axios";

export default {
  search: function(term, start, max) {
    return axios.get(`api/googlebooks/${term}/${start}/${max}`);
  },
  getBooks: function() {
    return axios.get("api/books");
  }
};