import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

function FaqTwo() {
  return (
    <div
      className="faq-area style-2"
      // style="background-image: url('images/shape/faq-bg.png');"
    >
      <div className="container">
        <div className="row justify-between">
          <div className="md:w-[50%] lg:w-[41.66%]">
            <div className="content-wrapper">
              <div className="sketch">
                <img src="images/shape/curly-arrow.png" alt="sketch" />
              </div>
              <div className="section-title ">
                <div className="short-title">
                  <span>Our FAQ</span>
                </div>
                <h2 className="title">
                  You ask your thought we just{" "}
                  <span className="underline1">
                    {" "}
                    <img src="images/shape/underline.png" alt="underline" />
                    answer
                  </span>
                </h2>
                <p className="desc">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  labo ris nisi ut aliquip ex ea commodo con veniam, quis
                  nostrud exerci tation ullamco laboris nisi
                </p>
              </div>
              <div className="btn-wrapper">
                <a href="#" className="theme-btn">
                  <div className="swip">
                    <div className="title-wrapper">
                      <span className="title-1">Contact us</span>
                      <span className="title-2">Contact us</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-[50%]">
            <Accordion
              className="accordion accordion-flush"
              id="accordionFlushExampleTWO"
              allowZeroExpanded
            >
              <AccordionItem className="accordion-item">
                <AccordionItemHeading className="accordion-header">
                  <AccordionItemButton className="accordion-button" type="button">
                    1. Accusantium Doloremque Laudantium Totam Rem?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel id="flush-collapseOne">
                  <div className="accordion-body">
                    Ut enim ad minima veniam, quis nostrum exercitation em ullam
                    corporis suscipit laboriosam, nisi ut al
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="accordion-item">
                <AccordionItemHeading className="accordion-header">
                  <AccordionItemButton className="accordion-button" type="button">
                    2. Accusantium Doloremque Laudantium Totam Rem?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel id="flush-collapseOne">
                  <div className="accordion-body">
                    Ut enim ad minima veniam, quis nostrum exercitation em ullam
                    corporis suscipit laboriosam, nisi ut al
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="accordion-item">
                <AccordionItemHeading className="accordion-header">
                  <AccordionItemButton className="accordion-button" type="button">
                    3. Accusantium Doloremque Laudantium Totam Rem?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel id="flush-collapseOne">
                  <div className="accordion-body">
                    Ut enim ad minima veniam, quis nostrum exercitation em ullam
                    corporis suscipit laboriosam, nisi ut al
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="accordion-item">
                <AccordionItemHeading className="accordion-header">
                  <AccordionItemButton className="accordion-button" type="button">
                    4. Accusantium Doloremque Laudantium Totam Rem?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel id="flush-collapseOne">
                  <div className="accordion-body">
                    Ut enim ad minima veniam, quis nostrum exercitation em ullam
                    corporis suscipit laboriosam, nisi ut al
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="accordion-item">
                <AccordionItemHeading className="accordion-header">
                  <AccordionItemButton className="accordion-button" type="button">
                    5. Accusantium Doloremque Laudantium Totam Rem?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel id="flush-collapseOne">
                  <div className="accordion-body">
                    Ut enim ad minima veniam, quis nostrum exercitation em ullam
                    corporis suscipit laboriosam, nisi ut al
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqTwo;
