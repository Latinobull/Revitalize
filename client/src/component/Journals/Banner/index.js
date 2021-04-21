import React, { useState, useEffect } from "react";
import API from "../../../api/zenQuotes";
import "./style.css";

function Quote() {
  const [data, setData] = useState();

  useEffect(() => {
    API.getQuote()
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    data ?
    <div>
      <h3 class="cursive">"{data[0].q}"</h3>
      <p>-{data[0].a}</p>
    </div>:null
  );
}
export default Quote;


