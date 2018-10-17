import React from 'react';

import classes from './Clear.module.css';
import img from '../../../styles/icons/Clear/Clear.svg';

const clear = () => {
  return (
    <img className={classes.clear} src={img} alt="sunny" />
  );
};

export default clear;
