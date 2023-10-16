import React from "react";
import CountUp from 'react-countup';

function CounterOne() {


  return (
    <div className="counter-up-area style-2">
      <div className="container">
        <div className="counter-card-wrapper">
          <div className="counter-item">
            <div className="counter-title">
              <h2 className="number">
                <CountUp end={150} duration={2} className="counter">150</CountUp>
                <span>+</span>
              </h2>
              <p className="title">Happy Clients in 2023</p>
            </div>
          </div>
          <div className="counter-item">
            <div className="counter-title">
              <h2 className="number">
              <CountUp end={89} duration={2} className="counter">89</CountUp>
                <span>%</span>
              </h2>
              <p className="title">Optimization Strategy</p>
            </div>
          </div>
          <div className="counter-item">
            <div className="counter-title">
              <h2 className="number">
              <CountUp end={190} duration={2} className="counter">190</CountUp>
                <span>%</span>
              </h2>
              <p className="title">Increased Traffic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterOne;
