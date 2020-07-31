import React from "react";
import "weather-icons/css/weather-icons.css";

const home = (props) => {
  return (
    <div className="container text-light">
      <div className="cards pt-4">
        <h1>{props.city}</h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`}></i>
        </h5>
        {props.finalTemp ? (
          <h1 className="py-2">{props.finalTemp}&deg;</h1>
        ) : null}
        {minmaxTemp(props.minTemp, props.maxTemp)}
        <h4 className="py-3">{props.description}</h4>
      </div>
    </div>
  );
};

function minmaxTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4"> {min}&deg;</span>
        <span className="px-4"> {max}&deg;</span>
      </h3>
    );
  } else return null;
}

export default home;
