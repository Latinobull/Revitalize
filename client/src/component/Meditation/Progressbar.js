import React, {useState} from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./style.css";

function ProgressBar (props){

   console.log(props)

return (
  

    <div className="sessionopt" style={{ width: 400, height: 400}}>      
    <CircularProgressbar onClick={props.value} maxValue={props.seconds} text={`${props.minsValue} : ${props.secondsValue < 10 ? props.secondsValue : props.secondsValue} `} 
   
   styles={buildStyles({
        rotation: 0.25, 

        strokeLinecap: "butt", 

        textSize: "14px", 
        pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    pathTransition: "none",
    xtransition: 'stroke-dashoffset 0.5s ease 0s',
    position: "absolute",
    transform: 'rotate(-90deg)',

    // Colors
    pathColor: `rgba(62, 152, 199, ${props.value} / ${props.seconds})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}/>
    </div>
)

}

export default ProgressBar;