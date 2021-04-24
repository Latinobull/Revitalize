import React from 'react';
import JournalMenu from "./JournalMenu";
import JournalCard from "./Card/index";
import Banner from "./Banner/index";
import InspireButton from "./Banner/Button";


function Journals() {
  return (
    <>
   <Banner/>
   <InspireButton/>
   
   <JournalMenu/>

   <JournalCard/>

  </>
  );
}

export default Journals;