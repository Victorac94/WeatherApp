import React from 'react';

import classes from './Card.module.css';
import './Card.css';
// import Cloudy from '../Weather/Cloudy/Cloudy';
// import Clear from '../Weather/Clear/Clear';


const card = (props) => {
  return (
    <section className={classes.card}>
      <div className={classes.card__location}>
        <p>{props.myState.city}</p>
        <p>{props.myState.country}</p>
      </div>
      <div className={classes.card__currentWeather}>
        <p>
          {props.myState.temperature}<span>º</span>
        </p>
        <i className="icon-right-thin"></i>
        <span>{props.myState.text}</span>
      </div>
      <div className={classes.card__animatedIcon}>
        <img src={props.myState.icon} alt={props.myState.text}/>
      </div>
      <div className={classes.card__day}>
        <p>NOW</p>
      </div>
    </section>
  );
}

export default card;
