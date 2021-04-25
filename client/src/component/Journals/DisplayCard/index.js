import React, { useState, useEffect } from "react";
import axios from "axios";


export default function displayJournal() {

  const [data, setData] = useState();
  
  useEffect(() => {
    axios.get("api/journals").then(data=>setData(data))
  }, []);

    return (
      <div>
         <h6>Feelings: {data.feelings}</h6>
         <h6>Gratitude: {data.gratitude}</h6>
         <h6>Thoughts: {data.thoughts}</h6>
      </div>
    );
  }