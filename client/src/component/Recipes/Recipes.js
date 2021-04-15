import React, {useState} from "react";
import Searchbar from "./Searchbar";
import API from "../../api/recipes";

function Recipes(props) {
    const [search, setSearch] = useState("");
    const [books, setRecipes] = useState([]);
  
    const handleSubmit = () => {
    API.recipeInfo(search).then((result) => {
        console.log(result);
      });
    };
    const handleTyping = (e) => {
      console.log(e.target.value);
    };
    return (
      <div>
        <Searchbar handleSubmit={handleSubmit} handleTyping={handleTyping} />
      </div>
    );
  }
  
  export default Recipes;
  