import React from 'react';
import classes from "./Menu.module.css";
import Button from '../Button/Button';
import NameHolder from '../NameHolder/NameHolder'

const menu = (props) => (
    <div className={[classes.Menu, classes[props.show]].join(' ')}>
        <Button action={props.clickMultiplayer}>Players</Button>
        <NameHolder change={props.change}>Player 1 </NameHolder>
        <NameHolder
            change={props.change}
            multiplayer={props.multiplayer}>Player 2 </NameHolder>
        <Button action={props.clickStart}>Start</Button>
    </div>
)

export default menu;