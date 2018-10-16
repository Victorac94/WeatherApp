import React from 'react';

import classes from './Card.css';

const card = (props) => {
  return (
    <section className={classes.card}>
      <div className={classes.card__location}>
        <h3>Alcalá de Henares</h3>
        <h4>SPAIN</h4>
      </div>
      <div className={classes.card__currentWeather}>
        <h1>
          21<span>º</span>
        </h1>
        <i> -> </i>
        <i>nube</i>
      </div>
      <div className={classes.card__animatedIcon}>
        <i>nube grande</i>
      </div>
      <div className={classes.card__day}>
        <h3>TODAY</h3>
      </div>
    </section>
  );
}

export default card;
