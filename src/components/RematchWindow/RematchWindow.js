import React from "react";
import Button from '../Button/Button';
import Backdrop from '../UI/Backdrop/Backdrop'
import classes from "./RematchWindow.module.css";

const rematch = (props) => (
    <Backdrop showBack={props.showRematch}
    >
        <div className={classes.Window}>
            <h3>Rematch?</h3>
            <div>
                <Button action={props.rematch}
                    design={'Rematch'}>Yes</Button>
                <Button action={null}
                    design={'Endgame'}>NO</Button>
            </div>
        </div>
    </Backdrop>

)

export default rematch;