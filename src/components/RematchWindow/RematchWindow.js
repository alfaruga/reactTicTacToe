import React from "react";
import Button from '../Button/Button';
import classes from './RematchWindow.module.css';

const rematch = (props) => (
    <div className={[classes.Window, classes[props.showRematch]].join(' ')}>
        <h3>Rematch?</h3>

        <Button action={props.rematch}
            design={'Rematch'}>Yes</Button>
        <Button action={null}
            design={'Endgame'}>NO</Button>
    </div >

)

export default rematch;