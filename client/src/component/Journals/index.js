import React from 'react';
import JournalMenu from "./JournalMenu";
import JournalCard from "./Card/index";
import SubmitButton from './SubmitButton';
import Banner from "./Banner/index";


function Journals() {
  return (
    <>
   <Banner/>
   
   <JournalMenu/>

   <JournalCard/>

  </>
  );
}

export default Journals;