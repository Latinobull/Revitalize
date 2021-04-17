import React from "react";
import Header from "./Header"
import "./style.css"


function Searchbar(props) {
  return (
    <div>
            <Header/>
            <form className="form">
                <input className="searchForm" onChange={props.handleTyping} placeholder="Search by Ingredient">
                </input>
            </form>
            <button type="button" className="btn btn-primary searchBtn" id="searchBtn" onClick={props.handleSubmit}>Search</button>
            </div>
  );
}

export default Searchbar;
