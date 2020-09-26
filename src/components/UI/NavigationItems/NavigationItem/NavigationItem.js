import React from 'react';
import classes from './NavigationItem.module.css'

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>{props.page}</li>
);

export default navigationItem;
