// import {useState, useEffect} from  "react";
import "./index.css";
import { CiLocationOn } from "react-icons/ci";

const Weather = (props) => {
  const { data } = props;
  const {
    humidity,
    temperature,
    windSpeed,
    //fellsLike,
    location,
    imageUrl,
  } = data;
  return (
    <div className="weather-container">
      <div className="temp-loc-container">
        <img className="weather-img" src={imageUrl} alt="weatherImage" />
        <h2 className="temperature">
          {temperature}
          <sup>o</sup>c
        </h2>
        <div className="loc-div">
          <CiLocationOn className={`icon`} />
          <span className="location">{location}</span>
        </div>
      </div>
      <div className="other-details-container">
        <div className="humidity-div">
          <img
            className="img-icons"
            alt=""
            src="https://res.cloudinary.com/dgj39147s/image/upload/v1718441760/weather-157114_1280_rqufcz.png"
          />
          <span className="value">
            {humidity} % <span className="sub-name">Humidity</span>
          </span>
        </div>
        <div className="humidity-div">
          <img
            className="img-icons"
            alt=""
            src="https://res.cloudinary.com/dnwwyvtjx/image/upload/v1718434839/ldcyr8r8mhnyh68fs95b.png"
          />
          <span className="value">
            {windSpeed} % <span className="sub-name">Wind Speed</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
