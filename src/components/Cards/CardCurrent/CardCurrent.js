import React from 'react';

import classes from './CardCurrent.module.css';
import '../Cards.css';

const cardCurrent = (props) => {
  return (
    <section className={classes.card + " card"}>
      <div className={classes.card__location}>
        <p>{props.myLocation.name}</p>
        <p>{props.myLocation.country}</p>
      </div>
      <div className={classes.card__currentWeather}>
        <p>
          {props.isCelsiusActive ? props.myCurrent.temp_c.toFixed(0) : props.myCurrent.temp_f.toFixed(0)}
          <span>º</span>
          {props.isCelsiusActive ? 'C' : 'F'}
        </p>
        <i className="icon-right-thin"></i>
        <span>{props.myCurrent.condition.text}</span>
      </div>
      <div className={classes.card__weatherIcon}>
        <img src={props.myCurrent.condition.icon} alt={props.myCurrent.condition.text}/>
      </div>
      <div className={classes.card__day}>
        <p>NOW</p>
      </div>
    </section>
  );
}

export default cardCurrent;
