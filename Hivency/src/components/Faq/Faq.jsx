import React, { useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

function Faq() {
  return (
    <div className="faq-area style-1">
      <div className="container">
        <div className="row justify-center">
          <div className="sm:w-[66.67%] md:w-[58.9%] lg:w-[50%]">
            <div className="section-title text-center">
              <div className="short-title">
                <span>Our FAQ</span>
              </div>
              <h2 className="title">
                Frequently asked{" "}
                <span className="underline1">
                  <img src="images/shape/underline.png" alt="underline" />{" "}
                  question{" "}
                </span>{" "}
              </h2>
              <p className="desc">
                Nemo enim ipsam voluptatem quia voluptas sit asper natur aut
                oditut fugit Nemo enim ipsam voluptatem .
              </p>
            </div>
          </div>
        </div>
        <Accordion allowZeroExpanded className="accordion accordion-flush" id="accordionFlushExample">
          <div className="row gy-4 gy-lg-0">
            <div className="col-lg-6">
              <div className="d-flex flex-column">
                <AccordionItem className="accordion-item">
                  <AccordionItemHeading className="accordion-header">
                    <AccordionItemButton className="accordion-button" type="button">
                      1. Accusantium Doloremque Laudantium Totam Rem?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel id="flush-collapseOne">
                    <div className="accordion-body">
                      Ut enim ad minima veniam, quis nostrum exercitation em
                      ullam corporis suscipit laboriosam, nisi ut al
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
                      Ut enim ad minima veniam, quis nostrum exercitation em
                      ullam corporis suscipit laboriosam, nisi ut al
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
                      Ut enim ad minima veniam, quis nostrum exercitation em
                      ullam corporis suscipit laboriosam, nisi ut al
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex flex-column">
                <AccordionItem className="accordion-item">
                  <AccordionItemHeading className="accordion-header">
                    <AccordionItemButton className="accordion-button" type="button">
                      4. Accusantium Doloremque Laudantium Totam Rem?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel id="flush-collapseOne">
                    <div className="accordion-body">
                      Ut enim ad minima veniam, quis nostrum exercitation em
                      ullam corporis suscipit laboriosam, nisi ut al
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
                      Ut enim ad minima veniam, quis nostrum exercitation em
                      ullam corporis suscipit laboriosam, nisi ut al
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-item">
                  <AccordionItemHeading className="accordion-header">
                    <AccordionItemButton className="accordion-button" type="button">
                      6. Accusantium Doloremque Laudantium Totam Rem?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel id="flush-collapseOne">
                    <div className="accordion-body">
                      Ut enim ad minima veniam, quis nostrum exercitation em
                      ullam corporis suscipit laboriosam, nisi ut al
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
