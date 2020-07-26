import React from 'react';
import classes from './NameHolder.module.css'

const nameHolder = (props) => (
    <div
        className={
            [classes[props.multiplayer], classes.nameHolder]
                .join(' ')
        } >
        {props.children}
        < input id={props.children} placeholder={props.children}
            onChange={props.change} ></input >
    </div >
)

export default nameHolder;