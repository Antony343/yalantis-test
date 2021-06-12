import React, { useState } from 'react';
import classes from './Layout.module.css'
import { Route } from 'react-router-dom';

const Layout = (props) => {
  return (
    <div className={classes.layoutContainer}>
      <Route path='/employee' render={() => ('Hello')} />
    </div>
  )
}


const ClassComponent = props => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((count) => ++count)}></button>
    </div>
  )
}

export default ClassComponent;