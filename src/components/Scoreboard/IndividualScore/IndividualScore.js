import React from 'react';
import classes from './IndividualScore.module.css'

const individualScore = (props) => (
    <td className={classes.IndividualScore}>{props.score}</td>
)

export default individualScore;