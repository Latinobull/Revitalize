import React from 'react';
import axios from "axios";


export default function displayJournal() {

    axios.get("api/journals").then(data=>console.log(data))

    return (
      <div>
         <h1>test</h1>
      </div>
    );
  }