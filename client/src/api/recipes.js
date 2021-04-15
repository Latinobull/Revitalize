import axios from "axios";

const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_RECIPE_ID}&app_key=${process.env.REACT_APP_RECIPE_KEY}`;

export default {
  getRecipeInfo: function(){
    return axios.get(url)
  }
}