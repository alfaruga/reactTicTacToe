import React from 'react';
import classes from './ScoreHeader.module.css'
const scoreHeader = (props) => (
    <th className={classes.ScoreHeader}>{props.header}</th>
)

export default scoreHeader