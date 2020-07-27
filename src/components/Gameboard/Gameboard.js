import React from 'react';
import Square from './Square/Square';
import classes from './Gameboard.module.css'

const gameboard = (props) => (
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
)

export default gameboard;