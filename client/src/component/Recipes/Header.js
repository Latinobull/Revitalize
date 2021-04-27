import React from "react";
import "./style.css"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from 'react-bootstrap/Container'
import Background from "../../assets/images/recipes.PNG";

function Header(){

    return(

        <Jumbotron fluid>
            <div className="bg" style={{backgroundImage: `url(${Background})`}}></div>
        <Container classname="foodie">
          <h1>Healthy and Nutritious Food Recipes</h1>
          <p className="heading">
          When you eat healthy you are guaranteed to feel a lot better about yourself. Although eating healthy is not always on everyone’s mind eating healthy foods should always be a must in everyone’s diet. Use the search bar below to search for fun and easy recipes guranteed to make you feel good about yourself!
          </p>
        </Container>
      </Jumbotron>
    )
}

export default Header