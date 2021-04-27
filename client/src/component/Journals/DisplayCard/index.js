import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import Wave from "../../../assets/images/wave.jpg";
import Bird from "../../../assets/images/bird.jpg";
import Treetwo from "../../../assets/images/treetwo.png";
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Wave}
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>Feelings:</h1>
                <p>
                  {data.map((data) => (
              <h6>{data.feelings}</h6>
          ))}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Bird}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h1>Gratitude:</h1>
                <p>{data.map((data) => (
              <h6>{data.gratitude}</h6>
          ))}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Treetwo}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h1>Thoughts:</h1>
                <p>
                {data.map((data) => (
              <h6>{data.thoughts}</h6>
          ))}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
