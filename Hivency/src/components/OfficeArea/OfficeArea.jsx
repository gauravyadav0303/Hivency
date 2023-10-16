import React, {useEffect} from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Tilt } from 'react-tilt'


function OfficeArea() {
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            15,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

    return ( 
        <div className="location-area style-1">
  <div className="container">
    <div className="row justify-content-between align-items-center">
      <div className="md:w-[41.67%]">
        <div className="content-wrapper">
            <div className="section-title">
              <div className="short-title">
                  <span>Our office</span>
              </div>
              <h2 className="title">Our office location</h2>
            </div>
            <Accordion className="accordion accordion-flush" id="accordionFlushExampleTWO"
            allowZeroExpanded>
              
              <AccordionItem className="accordion-item style-2">
                <AccordionItemHeading className="accordion-header" id="flush-headingOne">
                  <AccordionItemButton className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false">
                    San fransisco       
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel  className="accordion-collapse" >
                  <div className="accordion-body">
                    <p>853 Snowbird Lane Omaha Newyourk</p>
                    <p>edgy@gmail.com</p>
                    <p>2563-2563-5483</p>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="accordion-item style-2">
                <AccordionItemHeading className="accordion-header" id="flush-headingTwo">
                  <AccordionItemButton className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" >
                    London, UK       
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordion-collapse">
                  <div className="accordion-body">
                    <p>853 Snowbird Lane Omaha Newyourk</p>
                    <p>edgy@gmail.com</p>
                    <p>2563-2563-5483</p>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
        </div>
      </div>
      <div className="md:w-[41.67%]">
        <div className="image">
          <Tilt options={defaultOptions}>
          <img className="tilt-animate" src="images/common/loaction-area.jpg" alt="loaction"/>
          </Tilt>
        </div>
      </div>
    </div>
  </div>
</div>
     );
}

export default OfficeArea;