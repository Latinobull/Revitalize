import axios from "axios";

export default {
  getQuote: function() {
    return axios.get("https://zenquotes.io/api/quotes");
  }
};