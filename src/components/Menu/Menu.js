import React from 'react';
import classes from "./Menu.module.css";
import Button from '../Button/Button';
import NameHolder from '../NameHolder/NameHolder'

const menu = (props) => (
    <div className={classes.Menu}
        style={
            {
                display: props.showMenu !== '' ? 'none' : null,
            }
        }>
        <h1>TIC TAC TOE</h1>
        <Button action={props.clickMultiplayer} >{props.gameMode === true ? 'Multiplayer' : 'Single Player'}</Button>
        <NameHolder change={props.change}>Player 1 </NameHolder>
        <NameHolder
            change={props.change}
            gameType={props.gameMode}>Player 2 </NameHolder>
        <Button action={props.clickStart} >Start</Button>
    </div>
)

export default menu;