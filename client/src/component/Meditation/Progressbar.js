import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./style.css";


function ProgressBar (props){
    const value = 60;
return (
    <div className="progressBar" style={{ width: 400, height: 400}}>
    <CircularProgressbar onClick={props.value} maxValue={60} text={`${value} mins`} 
    styles={buildStyles({
        rotation: 0.25, 

        strokeLinecap: "butt", 

        textSize: "14px", 
        pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    pathTransition: "none",

    // Colors
    pathColor: `rgba(62, 152, 199, ${value / 100})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}/>
    </div>
)

}

export default ProgressBar;