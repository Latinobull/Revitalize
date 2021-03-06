import React from "react";
import "./style.css";
import {useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import stressimg from "../../assets/images/stressimg.jpeg";
import canxiety from "../../assets/images/canxiety.jpeg";
import emotional from "../../assets/images/emotional.jpeg";
import selfimage from "../../assets/images/selfimage.jpeg";
import attention from "../../assets/images/attention.webp";
import sleep from "../../assets/images/sleep.jpeg";
import bloodpressure from "../../assets/images/bloodpressure.jpeg";
import pain from "../../assets/images/pain.jpeg";
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"



const useStyles = makeStyles({
    root: {
      marginLeft: 20,
      marginRight: 20,
    },
    header: {
      paddingBottom: '60px',
    },
    button: {
      background: 'linear-gradient(45deg, #FAE5DF 30%, #ed7966 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: '#141850',
      height: 48,
      padding: '0 30px',
      justifyContent: 'center',
    },
  });

function MeditationFacts() {
    const history = useHistory();

    function handleClick() {
      history.push("/session");
    }
    const classes = useStyles();

    return(
        <div>
        <Jumbotron fluid>
  <Container id="cool">
    <h1 className="benefits">Benefits of Meditation</h1>
    <h3 className="jumbowords">
    It is believed that mind and body are intricately connected and your mind has a direct impact on the physical health of your body. It has been observed that nowadays more and more professionals are relying on meditation to become clear on how to manage complex situations. Professionals usually have to do intensive and multi-faceted thinking to take strategic business decisions, and meditation helps them to open their mind to new possibilities and also improves the ability to see the ???big-picture.??? See below for more of the benefits of practicing meditation. 
    </h3>
  </Container>
</Jumbotron>
<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
<div className="post-wrap"> 
       <div className="post"> 
           <div className="post-front">
           <img src= {stressimg} alt="woman biting pencil" className="practice"/>
           <h3>Reduce Stress</h3>
           </div>
           <div className="post-back">
               <div className="post-except">
                   <p>By learning to calm your body and mind, your physical and emotional stress can melt away. This leaves you feeling better, refreshed, and ready to face the challenges of your day with a healthy attitude. </p><br></br>
                   <a href="https://www.healthline.com/nutrition/12-benefits-of-meditation#1.-Reduces-stress">Read More</a>
               </div>
           </div>
       </div>
   </div>
   <div className="post-wrap"> 
       <div className="post"> 
           <div className="post-front">
           <img src= {canxiety} alt="man resting head in hands" className="practice"/>
           <h3>Controls Anxiety</h3>
           </div>
           <div className="post-back">
               <div className="post-except">
                   <p>Anxiety is a cognitive state connected to an inability to regulate emotions. But research shows that a consistent meditation practice reprograms neural pathways in the brain and, therefore, improves our ability to regulate emotions.</p><br></br>
                   <a href="https://www.healthline.com/nutrition/12-benefits-of-meditation#2.-Controls-anxiety">Read More</a>
               </div>
           </div>
       </div>
   </div>
   <div className="post-wrap"> 
       <div className="post"> 
           <div className="post-front">
           <img src= {emotional} alt="woman smiling" className="practice"/>
           <h3>Promotes Emotional Health</h3>
           </div>
           <div className="post-back">
               <div className="post-except">
                  <p>Some forms of meditation can improve depression and reduce negative thoughts. It may also decrease levels of inflammatory cytokines, which could contribute to depression.</p> <br></br>
                  <a href="https://www.healthline.com/nutrition/12-benefits-of-meditation#3.-Promotes-emotional-health">Read More</a>
               </div>
           </div>
       </div>
   </div>
   <div className="post-wrap"> 
       <div className="post"> 
           <div className="post-front">
           <img src= {attention} alt="man laying with head down" className="practice"/>
           <h3>Lengthens Attention Span</h3>
           </div>
           <div className="post-back">
               <div className="post-except">
                 <p>Several types of meditation may build your ability to redirect and maintain attention. Meditating for just 10 minutes every day can help prevent your mind from wandering and reduce repetitive, anxious thoughts.</p> <br></br>
                 <a href="https://www.healthline.com/nutrition/12-benefits-of-meditation#5.-Lengthens-attention-span">Read More</a>
               </div>
           </div>
       </div>
   </div>

   <div className="post-wrap"> 
       <div className="post"> 
           <div className="post-front">
           <img src= {selfimage} alt="woman looking in mirror" className="practice"/>
           <h3>Enhances Self-Awareness</h3>
           </div>
           <div className="post-back">
               <div className="post-except">
                   <p>Self-inquiry and related styles of meditation can help you ???know yourself.??? This can be a starting point for making other positive changes. In order to become more self-aware, you need to stop thinking and stop doing. Meditation is the perfect solution for this.</p><br></br>
                   <a href="https://www.healthline.com/nutrition/12-benefits-of-meditation#4.-Enhances-self-awareness">Read More</a>
               </div>
           </div>
       </div>
   </div>

   <div className="post-wrap"> 
       <div className="post"> 
           <div className="post-front">
           <img src= {sleep} alt="woman sleeping" className="practice"/>
           <h3>Improves Sleep</h3>
           </div>
           <div className="post-back">
               <div className="post-except">
                   <p>A variety of meditation techniques can help you relax and control runaway thoughts that can interfere with sleep. This can shorten the time it takes to fall asleep and increase sleep quality.</p><br></br>
                   <a href="https://www.healthline.com/nutrition/12-benefits-of-meditation#9.-Improves-sleep">Read More</a>
               </div>
           </div>
       </div>
   </div>
   <div className="post-wrap"> 
       <div className="post"> 
           <div className="post-front">
           <img src= {bloodpressure} alt="blood pressure machine" className="practice"/>
           <h3>Decrease Blood Pressure</h3>
           </div>
           <div className="post-back">
               <div className="post-except">
                   <p>Blood pressure decreases not only during meditation but also over time in individuals who meditate regularly. This can reduce strain on the heart and arteries, helping prevent heart disease.</p><br></br>
                   <a href="https://www.healthline.com/nutrition/12-benefits-of-meditation#11.-Can-decrease-blood-pressure">Read More</a>
               </div>
           </div>
       </div>
   </div>
   <div className="post-wrap"> 
       <div className="post"> 
           <div className="post-front">
           <img src= {pain} alt="wonan grabbing neck and back" className="practice"/>
           <h3>Helps Control Pain</h3>
           </div>
           <div className="post-back">
               <div className="post-except">
                   <p>Meditation can diminish the perception of pain in the brain. When you meditate, you release endorphins which are natural pain relievers. This may help treat chronic pain when used to supplement medical care or physical therapy. In addition, muscles and tissues around your joints are more relaxed, and your brain can be in a calmer state so you'll feel less pain.</p><br></br>
                   <a href="https://www.healthline.com/nutrition/12-benefits-of-meditation#10.-Helps-control-pain">Read More</a>
               </div>
           </div>
       </div>
   </div>
     </Grid>
     <br></br>
     <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
     <Button
        variant="contained"
        color="inherit"
        className={classes.button}
        onClick={handleClick}
      >
       Begin Meditation
      </Button>
      </Grid>
     </div>
    )
}

export default MeditationFacts;