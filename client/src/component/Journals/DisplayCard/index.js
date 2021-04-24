import React from 'react';
import axios from "axios";


export default function displayJournal() {

    axios.get("api/journals").then(data=>console.log(data))

    return (
      <div>
         <h6>Feelings:</h6>
         <h6>Gratitude:</h6>
         <h6>Thoughts:</h6>
         
         {/* <h6>Feelings: {data.feelings}</h6>
         <h6>Gratitude: {data.gratitude}</h6>
         <h6>Thoughts: {data.thoughts}</h6> */}
      </div>
    );
  }