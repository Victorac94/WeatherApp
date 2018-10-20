import React from 'react';

import classes from './CardForecast.module.css';
import '../Cards.css';

const cardForecast = (props) => {
  return (
    <section className={classes.card + " card"}>
      <div className={classes.card__location}>
        <p>{props.myLocation.name}</p>
        <p>{props.myLocation.country}</p>
      </div>
      <div className={classes.card__currentWeather}>
        <p>
          {props.myForecast.day.avgtemp_c.toFixed(0)}<span>º</span>
        </p>
        <i className="icon-right-thin"></i>
        <span>{props.myForecast.day.condition.text}</span>
      </div>
      <div className={classes.card__animatedIcon}>
        <img src={props.myForecast.day.condition.icon} alt={props.myForecast.day.condition.text}/>
      </div>
      <div className={classes.card__day}>
        <p>{props.myForecast.date}</p>
      </div>
    </section>
  );
}

export default cardForecast;
