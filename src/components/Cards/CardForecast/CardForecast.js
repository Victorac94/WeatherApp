import React from 'react';

import classes from './CardForecast.module.css';
import '../Cards.css';

const cardForecast = (props) => {
  let rawDate = null;
  let todayDate = null;
  let date = null;

  // HERE WE GET THE CARD DATE TO SHOW
  //The 'date_epoch' we get from the API is in seconds so we need to
  //multiply it by 1000 to use it with new Date()
  rawDate = new Date(props.myForecast.date_epoch * 1000).getDay();
  todayDate = new Date().getDay();

  switch (rawDate) {
    case 0:
      date = 'Sunday';
      break;
    case 1:
      date = 'Monday';
      break;
    case 2:
      date = 'Tuesday';
      break;
    case 3:
      date = 'Wednesday'
      break;
    case 4:
      date = 'Thursday';
      break;
    case 5:
      date = 'Friday'
      break;
    case 6:
      date = 'Saturday';
      break;
    default:
      date = 'Date';
  }

  //Set the card date to 'Tomorrow' if it's the card for tomorrow
  if (rawDate - todayDate === 1) {
    date = 'Tomorrow';
  }

  return (
    <section className={classes.card + " card"}>
      <div className={classes.card__location}>
        <p>{props.myLocation.name}</p>
        <p>{props.myLocation.country}</p>
      </div>
      <div className={classes.card__forecastWeather}>
        <p className={classes.card__forecastWeather__avgTemp}>
          {props.isCelsiusActive ? props.myForecast.day.avgtemp_c.toFixed(0) : props.myForecast.day.avgtemp_f.toFixed(0)}
          <span>º</span>
        </p>
        <i className="icon-right-thin"></i>
        <div className={classes.card__forecastWeather__maxMin}>
          <div className={classes.card__forecastWeather__maxMin__max}>
            <span>
              {props.isCelsiusActive ? props.myForecast.day.maxtemp_c.toFixed(0) : props.myForecast.day.maxtemp_f.toFixed(0)}
              º
            </span>
            <span>MAX</span>
          </div>
          <div className={classes.card__forecastWeather__maxMin__min}>
            <span>
              {props.isCelsiusActive ? props.myForecast.day.mintemp_c.toFixed(0) : props.myForecast.day.mintemp_f.toFixed(0)}
              º
            </span>
            <span>MIN</span>
          </div>
        </div>
      </div>
      <div className={classes.card__weatherIcon}>
        <img src={props.myForecast.day.condition.icon} alt={props.myForecast.day.condition.text}/>
      </div>
      <div className={classes.card__day}>
        <p>{date}</p>
      </div>
    </section>
  );
}

export default cardForecast;
