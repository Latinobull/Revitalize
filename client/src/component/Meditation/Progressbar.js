import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./style.css";

function ProgressBar (props){

   console.log(props)

return (
  

    <div className="sessionopt" style={{ width: 200, height: 200}}>      
    <CircularProgressbar initialAnimation={true} onClick={props.value} maxValue={props.seconds} text={`${props.minsValue} : ${props.secondsValue}`} 
   
   styles={buildStyles({
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',
    trailStroke: '#d6d6d6',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    pathTransition: 'stroke-dashoffset 0.5s ease 0s',

    // Colors
    pathColor: `rgba(62, 152, 199, ${props.minsValue} : ${props.secondsValue} / ${props.seconds})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}/>
    </div>
)

}

export default ProgressBar;