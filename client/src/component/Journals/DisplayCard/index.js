import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

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
          {data.map((data) => (
            <div>
              <h6>Feelings: {data.feelings}</h6>
              <h6>Gratitude: {data.gratitude}</h6>
              <h6>Thoughts: {data.thoughts}</h6>
            </div>
          ))}
        </>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
