import React from 'react';

import classes from './CardForecast.module.css';
import '../Cards.css';

const cardForecast = (props) => {
  let oldDate = null;
  let date = [];
  //The 'date_epoch' we get from the API is in seconds so we need to
  //multiply it by 1000 to use it with new Date()
  oldDate = new Date(props.myForecast.date_epoch * 1000).toDateString();
  oldDate = oldDate.split(" "); //Get the string date and transform it into an array
  date.push(oldDate.slice(0, 1)); //Get the day of the week
  date.push(oldDate.slice(2, 3)); //Get the day of the month
  date = date.join(" ");

  return (
    <section className={classes.card + " card"}>
      <div className={classes.card__location}>
        <p>{props.myLocation.name}</p>
        <p>{props.myLocation.country}</p>
      </div>
      <div className={classes.card__currentWeather}>
        <p className={classes.card__currentWeather__avgTemp}>
          {props.isCelsiusActive ? props.myForecast.day.avgtemp_c.toFixed(0) : props.myForecast.day.avgtemp_f.toFixed(0)}
          <span>º</span>
        </p>
        <i className="icon-right-thin"></i>
        <div className={classes.card__currentWeather__maxMin}>
          <div className={classes.card__currentWeather__maxMin__max}>
            <span>
              {props.isCelsiusActive ? props.myForecast.day.maxtemp_c.toFixed(0) : props.myForecast.day.maxtemp_f.toFixed(0)}
              º
            </span>
            <span>MAX</span>
          </div>
          <div className={classes.card__currentWeather__maxMin__min}>
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
