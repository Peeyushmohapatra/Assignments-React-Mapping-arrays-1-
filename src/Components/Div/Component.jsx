import React from "react";
import "./component.css";

const Component = () => {
  function isPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }
  return (
    <div className="container">
      <h1>30 Days Of React</h1>
      <h3>Number Generator</h3>

      <div className="calender">
        {Array(32)
          .fill("")
          .map((ele, idx) => {
            let colors = "";

            if (idx % 2 === 0) {
              colors = "rgb(33,191,115)";
            } else if (idx % 2 !== 0) {
              colors = "rgb(253,219,58)";
            }


            if (idx > 1) {
              if (idx === 2) {
                colors = "rgb(253,94,83)";
              }
              if (isPrime(idx)) {
                colors = "rgb(253,94,83)";
              }
            }


            return (
              <div style={{ backgroundColor: colors }} className="box">
                {idx}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Component;
