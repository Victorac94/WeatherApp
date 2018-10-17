import React from 'react';

import classes from './Card.module.css';
import './Card.css';
import Cloudy from '../Weather/Cloudy/Cloudy';
import Clear from '../Weather/Clear/Clear';


const card = (props) => {
  let animatedIcon = null;
  let smallIcon = null;

  if (props.weather.main === "Clouds") {
    animatedIcon = <Cloudy />;
    smallIcon = <i className="icon-cloud"></i>;
  } else if (props.weather.main === "Clear") {
    animatedIcon = <Clear />;
    smallIcon = <i className="icon-cloud"></i>;
  }

  return (
    <section className={classes.card}>
      <div className={classes.card__location}>
        <p>{props.weather.city}</p>
        <p>{props.weather.country}</p>
      </div>
      <div className={classes.card__currentWeather}>
        <p>
          {props.weather.temperature}<span>º</span>
        </p>
        <i className="icon-right-thin"></i>
        {smallIcon}
      </div>
      <div className={classes.card__animatedIcon}>
        {animatedIcon}
      </div>
      <div className={classes.card__day}>
        <p>NOW</p>
      </div>
    </section>
  );
}

export default card;
