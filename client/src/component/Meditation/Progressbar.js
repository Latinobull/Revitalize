import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./style.css";
import Background from "../../assets/images/breathe.PNG";



function ProgressBar (props){


return (
    <div className="sessionopt" style={{ width: 200, height: 200}}>     
    <CircularProgressbar className="progressBar" counterClockwise={true} onClick={props.value} value= {props.seconds} maxValue={props.maxValue} text={`${props.minsValue} : ${props.secondsValue}`} 
    //looks like i need to be able to pass in multiple max values in order for the progress bar to actually move, but how?
   
   styles={buildStyles({
    rotation: 1,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',
    trailStroke: '#81b29a',
    background: "true",

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    pathTransition: 'stroke-dashoffset 0.5s ease 0s',

    // Colors
    pathColor: "#fcbf49",
    textColor: 'navy',
    trailColor: '#d6d6d6',
  })}/>
    </div>
)

}

export default ProgressBar;