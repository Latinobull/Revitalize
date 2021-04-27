import React, { useState, useEffect } from "react";
import axios from "axios";
import Wave from "../../../assets/images/wave.jpg";
import Bird from "../../../assets/images/bird.jpg";
import Treetwo from "../../../assets/images/treetwo.png";
import "./style.css";

export default function displayJournal() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("api/journals").then((data) => {
      console.log(data);
      setData(data.data);
    });
  }, []);

  return (
    <>
      {data ? (
        <>
          <div class="contain">
            <h1>Feelings:</h1>
            <p>
              {data.map((data) => (
                <h6>-{data.feelings}</h6>
              ))}
            </p>
          </div>

          <div class="contain">
            <h1>Gratitude:</h1>
            <p>
              {data.map((data) => (
                <h6>-{data.gratitude}</h6>
              ))}
            </p>
          </div>

          <div class="contain">
            <h1>Thoughts:</h1>
            <p>
              {data.map((data) => (
                <h6>-{data.thoughts}</h6>
              ))}
            </p>
          </div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
