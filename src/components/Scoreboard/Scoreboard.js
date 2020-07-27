import React from 'react';
import IndividualScore from './IndividualScore/IndividualScore'
import ScoreHeader from './ScoreHeader/ScoreHeader'
import classes from './Scoreboard.module.css'


const scoreboard = (props) => (
    <div className={[classes.Scoreboard, classes[props.design]].join(' ')}>
        <h1>Current score</h1>
        <table>
            <tr>
                <ScoreHeader header={props.scores.Player1} />
                <ScoreHeader header={props.scores.Player2} />
                <ScoreHeader header={'Ties'} />

            </tr>
            <tr>
                <IndividualScore score={props.scores.p1Wins} />
                <IndividualScore score={props.scores.p2Wins} />
                <IndividualScore score={props.scores.draws} />
            </tr>
        </table>
    </div>
)


export default scoreboard;