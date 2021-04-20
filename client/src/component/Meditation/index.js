import React from "react";
import "./style.css";
import { Grid } from "@material-ui/core";
import anxiety from "../../assets/images/stress.jpeg"

function MeditationFacts() {

    return(
        <div>
            <h1 className="benefits">Benefits of Meditation</h1>
        
            <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
{/* <div className="post-wrap"> 
       <div className="post"> 
           <div className="post-front">
               <div className="post-img" id="post-img1"></div>
               <div className="post-info">
                   <span>June 25, 2020</span>
                   <h2>black black black </h2>
               </div>
           </div>
           <div className="post-back">
               <div className="post-except">
                   <h2>Testing </h2>
                   <img src= {anxiety}/>
                   By learning to calm your body and mind, your physical and emotional stress can melt away. This leaves you feeling better, refreshed, and ready to face the challenges of your day with a healthy attitude.
                   
               </div>
               <a href="https://www.healthline.com/nutrition/12-benefits-of-meditation#2.-Controls-anxiety">Read More</a>
           </div>
       </div>
   </div>
   <div className="post-wrap"> 
       <div className="post"> 
           <div className="post-front">
               <div className="post-img" id="post-img2"></div>
               <div className="post-info">
                   <span>June 25, 2020</span>
                   <h2>black black black </h2>
               </div>
           </div>
           <div className="post-back">
               <div className="post-except">
                   <h2>Promotes Emotional Health</h2>
                   <p>
                   Some forms of meditation can improve depression and reduce negative thoughts. It may also decrease levels of inflammatory cytokines, which could contribute to depression.
                   </p>
               </div>
               <a href="https://www.healthline.com/nutrition/12-benefits-of-meditation#3.-Promotes-emotional-health">Read More</a>
           </div>
       </div>
   </div>
   <div className="post-wrap"> 
       <div className="post"> 
           <div className="post-front">
               <div className="post-img" id="post-img3"></div>
               <div className="post-info">
                   <span>June 25, 2020</span>
                   <h2>black black black </h2>
               </div>
           </div>
           <div className="post-back">
               <div className="post-except">
                   <h2>Reduce Stress</h2>
                   <p>
                   By learning to calm your body and mind, your physical and emotional stress can melt away. This leaves you feeling better, refreshed, and ready to face the challenges of your day with a healthy attitude.
                   </p>
               </div>
               <a href="https://www.healthline.com/nutrition/12-benefits-of-meditation#1.-Reduces-stress">Read More</a>
           </div>
       </div>
   </div>
   <div className="post-wrap"> 
       <div className="post"> 
           <div className="post-front">
               <div className="post-img" id="post-img1"></div>
               <div className="post-info">
                   <span>June 25, 2020</span>
                   <h2>black black black </h2>
               </div>
           </div>
           <div className="post-back">
               <div className="post-except">
                   <h2>Reduce Stress</h2>
                   <p>
                   By learning to calm your body and mind, your physical and emotional stress can melt away. This leaves you feeling better, refreshed, and ready to face the challenges of your day with a healthy attitude.
                   </p>
               </div>
               <a href="https://www.healthline.com/nutrition/12-benefits-of-meditation#1.-Reduces-stress">Read More</a>
           </div>
       </div>
   </div>

   <div className="post-wrap"> 
       <div className="post"> 
           <div className="post-front">
               <div className="post-img" id="post-img1"></div>
               <div className="post-info">
                   <span>June 25, 2020</span>
                   <h2>black black black </h2>
               </div>
           </div>
           <div className="post-back">
               <div className="post-except">
                   <h2>Reduce Stress</h2>
                   <p>
                   By learning to calm your body and mind, your physical and emotional stress can melt away. This leaves you feeling better, refreshed, and ready to face the challenges of your day with a healthy attitude.
                   </p>
               </div>
               <a href="https://www.healthline.com/nutrition/12-benefits-of-meditation#1.-Reduces-stress">Read More</a>
           </div>
       </div>
   </div> */}

     </Grid>
<wrapper className="practice-wrapper">
    <img src={anxiety} className="practice"/>
    </wrapper>
     </div>
    )
}

export default MeditationFacts;