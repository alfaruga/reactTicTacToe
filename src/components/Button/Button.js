import React from 'react';
import classes from './Button.module.css'

const button = (props) => (
    <button className={[classes.Button, props.pc].join('')}
        onClick={props.action}
    >{props.children}</button>
)

export default button;