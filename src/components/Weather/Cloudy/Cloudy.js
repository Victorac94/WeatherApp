import React from 'react';

import classes from './Cloudy.module.css';
import img1 from '../../../styles/icons/Cloudy/FrontCloud.svg';
import img2 from '../../../styles/icons/Cloudy/BackCloud.svg';

const cloudy = () => {
  return (
    <>
      <img className={classes.cloudy} src={img1} alt="cloud1"/>
      <img className={classes.cloudy1} src={img2} alt="cloud2"/>
    </>
  );
};

export default cloudy;
