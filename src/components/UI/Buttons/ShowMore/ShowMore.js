import React from 'react';

import classes from './ShowMore.module.css';

const showMore = (props) => {
  return (
    <button onClick={props.showMore} className={classes.showMore}><span>+</span></button>
  )
}

export default showMore;
