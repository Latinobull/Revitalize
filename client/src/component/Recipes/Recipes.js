import React, {useState} from "react";
import Searchbar from "./Searchbar";
import API from "../../api/recipes";


function Recipes() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);

  
    const handleSubmit = () => {
    API.getRecipeInfo(query).then((results) => {
        setRecipes(results.data.hits);
      });
    };

    const handleTyping =  function handleTyping(e) {
      setQuery(e.target.value);
    };

    // const handleSave = (recipeInfo) => {
    //   API.saveRecipe(recipeInfo);
    // };

    return (
      <div>
        <Searchbar handleSubmit={handleSubmit} handleTyping= {handleTyping}/>
        {recipes.map((recipe) =>{
          console.log(recipe)
        const randomNumber = Math.floor(Math.random() * 100) + 1
        return(
          <li key={randomNumber + Math.floor(recipe.calories)} >{recipe.recipe.label}</li>
              );
            })}
          </div>
        );
      }
  export default Recipes;
  