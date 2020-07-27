import React from 'react';
import classes from './Button.module.css'

const button = (props) => (
    <button className={[classes.Button, classes[props.design]].join(' ')}
        onClick={props.action}
    >{props.children}</button>
)

export default button;