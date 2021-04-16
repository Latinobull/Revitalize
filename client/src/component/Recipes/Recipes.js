import React, {useState} from "react";
import Searchbar from "./Searchbar";
import API from "../../api/recipes";

function Recipes(props) {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
  
    const handleSubmit = () => {
    API.recipeInfo(query).then((result) => {
        console.log(result);
      });
    };

    const handleTyping = (e) => {
      setQuery(e.target.value);
    };

    const handleSave = (recipeInfo) => {
      API.saveRecipe(recipeInfo);
    };

    return (
      <div>
        <Searchbar handleSubmit={handleSubmit} handleTyping={handleTyping} />
        {recipes.map((recipe) =>{
        return(
          <div className=""> </div>
        )  
        })}
      </div>
    );
  }
  
  export default Recipes;
  