import React from "react";
import Header from "./Header"
import "./style.css"


function Searchbar(props) {
  return (
    <div>
        <Header/>
    <div className="wrap">
   <div className="search">
      <input type="text" className="searchTerm" onChange={props.handleTyping} placeholder="Search by Ingredient"></input>
      <button type="submit" className="searchButton" onClick={props.handleSubmit}>
        <i className="fa fa-search"></i>
     </button>
</div>
</div>
</div>
  );
}



export default Searchbar;
