import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Session(){
    const percentage = 100;
return (
    <CircularProgressbar value={percentage} text={`${percentage}%`} />
)

}

export default Session;