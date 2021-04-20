import React, { useState } from "react";
import Searchbar from "./Searchbar";
import { v4 as uuidv4 } from "uuid";
import RecipeReviewCard from "./RecipeCard.js";
import axios from "axios";
import { Grid } from "@material-ui/core";


function Recipes() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
 

  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_RECIPE_ID}&app_key=${process.env.REACT_APP_RECIPE_KEY}`;

  const handleSubmit = () => {
    axios.get(url).then((results) => {
      setRecipes(results.data.hits);
    });
  };

  const handleSave = (recipeInfo) => {
    axios.post("api/recipes", recipeInfo) 
    };

  const handleTyping = function handleTyping(e) {
    setQuery(e.target.value);
  };

  return (
    <div>
      <Searchbar handleSubmit={handleSubmit} handleTyping={handleTyping} />
      <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
      {recipes.map((recipe) => {
        console.log(recipe);
        return <RecipeReviewCard onClick={handleSave} recipe={recipe} key={uuidv4()} />;
      })}
      </Grid>
    </div>
  );
}
export default Recipes;
