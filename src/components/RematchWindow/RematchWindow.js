import React, { Component } from "react";
import Button from '../Button/Button';
import Backdrop from '../UI/Backdrop/Backdrop'
import classes from "./RematchWindow.module.css";
import Aux from '../../hoc/Aux'

class Rematch extends Component {

    render() {
        let winner = this.props.winner !== 'Tie' ? <h2>{this.props.winner} Wins!</h2> : <h2>It's a draw!</h2>
        let rematch =
            <Aux>
                {winner}
                <h3>Rematch?</h3>
                <div>
                    <Button action={this.props.rematch}
                        design={'Rematch'}>Yes</Button>
                    <Button action={null}
                        design={'Endgame'} action={this.props.endgame}>NO</Button>
                </div>
            </Aux>
        rematch = !this.props.gameOver ? rematch
            : <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'

            }}>
                <h3>Game Over</h3>
                <Button design={'Rematch'} action={this.props.newGame}>New game</Button>
            </div>


        return (<Backdrop showBack={this.props.showRematch}
        >
            <div className={classes.Window}>
                {rematch}
            </div>
        </Backdrop>
        )
    }




}



export default Rematch;