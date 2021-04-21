import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Session (props){
    const percentage = 100;
return (
    <CircularProgressbar value={percentage} text={`${percentage}%`} />
)

}