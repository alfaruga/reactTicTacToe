import React from 'react';
import Square from './Square/Square';
import classes from './Gameboard.module.css';
import Aux from '../../hoc/Aux';
import ScoreBoard from '../Scoreboard/Scoreboard'

const gameboard = (props) => (
    <Aux>
        <ScoreBoard scores={props.score} design={props.show} />
        <div className={[classes.Gameboard, classes[props.show]].join(' ')}>{
            props.board.map((element, id) => {
                return <Square
                    play={props.makePlay}
                    markerText={props.marker}
                    key={id}
                    id={id}
                    symbol={props.board[id]}
                ></Square>
            })}
        </div>
    </Aux>

)

export default gameboard;