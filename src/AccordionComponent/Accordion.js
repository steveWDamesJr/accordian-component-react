import { React, useRef, useState } from 'react';
import data from './AccordionData';
import { RiArrowDropDownLine } from 'react-icons/ri';

// accordionItem component

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef()
  return(
    <div className="wrapper" >
    <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
     <p className='question-content'>{question}</p>
     <RiArrowDropDownLine className= {`arrow ${isOpen ? 'active' : ''}`} />
    </button>

    <div ref={contentHeight} className="answer-container" style={
      isOpen
      ? { height:  contentHeight.current.scrollHeight }
      : { height: "0px" }
     }>
     <p className="answer-content">{answer}</p>
   </div>
  </div>
 )
}

// main Accordion component

const Accordion = () => {
  return(
    <div>
      <AccordionItem />
    </div>
  )
}

export default Accordion;