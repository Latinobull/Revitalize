import React, {useState} from "react"
// import GetPoses from "./Dropdown"
import {Poses} from "../../api/Poses"


function YogaPoses (){

    const [poseType, setPoseType] = useState(Poses.map((item) => item.english_name));
     
    const handleChange = (e) => setPoseType((poseType[e.target.value]))
    
    return (
        <div>
            Select Pose from List Below: <br></br>
        <select
        onChange={e => handleChange(e)}>
            <option></option>
        {Poses.map((item)=>{
             return(
           
                     <option 
                     
                     value={item.id} key={item.id}>{item.english_name} </option>
                    
             )
        })}
         </select>
         </div>
    )
        
    }


export default YogaPoses;