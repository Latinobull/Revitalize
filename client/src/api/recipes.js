import axios from "axios";

const APP_ID = `fff68517`;
const APP_KEY = "7f55af49684ad7830f7be236dd395a50";

const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

export default {
  getRecipeInfo: function(){
    return axios.get(url)
  }
}