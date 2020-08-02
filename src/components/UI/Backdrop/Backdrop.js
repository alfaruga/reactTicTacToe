import React from 'react';
import classes from './Backdrop.module.css'

const backdrop = (props) => (
    props.showBack ? <div className={classes.Backdrop} onClick={props.backdropToggle}

    >{props.children}</div > : null
)

export default backdrop