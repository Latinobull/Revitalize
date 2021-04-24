import React from "react";
import RecipeReviewCard from "./RecipeCard";
import "./style.css"

function SaveForm({ books, handleSave }) {
    

    return (
        <div className="bookscontainer">
            <h1>Favorites</h1>
            <RecipeReviewCard books={books} handleSave={handleSave} />
        </div>
    );
}

export default SaveForm;