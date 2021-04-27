import React, { useState } from "react";
import JournalMenu from "./JournalMenu";
import JournalCard from "./Card/index";
import Banner from "./Banner/index";
import InspireButton from "./Banner/Button";


const [i, setI] = useState(0);

function handleIterate() {
  setI(i + 1)
}

function Journals() {
  return (
    <>
   <Banner count={i}/>
   <InspireButton handleIterate={handleIterate}/>
   
   <JournalMenu/>

   <JournalCard/>

  </>
  );
}

export default Journals;