import React from "react";


function Searchbar(props) {
  return (
    <div className="search container text-center">
            <h3>Search for a Recipe</h3>
            <div id="searchForm"><form >
                <input onChange={props.handleTyping} placeholder="Search by Ingredient">
                </input>
            </form>
            <button type="button" className="btn btn-primary searchBtn" id="searchBtn" onClick={props.handleSubmit}>Search!</button>
            </div>
            <br />
        </div>
  );
}

export default Searchbar;
