import React, { useState } from "react";
import Searchbar from "./Searchbar";
// import API from "../../api/recipes";
import { v4 as uuidv4 } from "uuid";
import RecipeReviewCard from "./RecipeCard.js";
import axios from "axios";

function Recipes() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_RECIPE_ID}&app_key=${process.env.REACT_APP_RECIPE_KEY}`;

  const handleSubmit = () => {
    axios.get(url).then((results) => {
      setRecipes(results.data.hits);
    });
  };

  const handleTyping = function handleTyping(e) {
    setQuery(e.target.value);
  };

  return (
    <div>
      <Searchbar handleSubmit={handleSubmit} handleTyping={handleTyping} />

      {recipes.map((recipe) => {
        console.log(recipe);
        // const randomNumber = Math.floor(Math.random() * 100) + 1{randomNumber + Math.floor(recipe.calories)}
        return <RecipeReviewCard recipe={recipe} key={uuidv4()} />;
      })}
    </div>
  );
}
export default Recipes;
