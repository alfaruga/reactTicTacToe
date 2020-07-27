import React, { Component } from 'react';
import Square from './Square/Square';
import classes from './Gameboard.module.css';
import Aux from '../../hoc/Aux';
import ScoreBoard from '../Scoreboard/Scoreboard'


class Gameboard extends Component {
    render() {
        let content = null;

        if (this.props.showGameboard) {
            content = (<Aux >
                <ScoreBoard scores={this.props.score} currentPlay={this.props.marker} gameState={this.props.showGameboard} />
                <div className={classes.Gameboard}
                    style={
                        {
                            display: this.props.marker === '' ? 'none' : null
                        }
                    }>{
                        this.props.board.map((element, id) => {
                            return <Square
                                play={this.props.makePlay}
                                markerText={this.props.marker}
                                key={id}
                                id={id}
                                symbol={this.props.board[id]}
                            ></Square>
                        })}
                </div>
            </Aux>
            )
        }

        return (content)

    }
}

export default Gameboard;