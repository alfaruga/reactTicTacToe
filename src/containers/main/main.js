import React, { Component } from 'react';
import classes from './main.module.css';
import Menu from '../../components/Menu/Menu';
import Gameboard from '../../components/Gameboard/Gameboard';
import Rematch from '../../components/RematchWindow/RematchWindow'

class Main extends Component {
    state = {
        board: [
            '', '', '',
            '', '', '',
            '', '', ''
        ],
        currentPlay: '',
        pcEnabled: true,
        gameNotOver: true,
        turn: 0,
        winner: '',
        rematch: false,
        Players: {
            Player1: 'Player 1',
            Player2: 'PC',
            p1Wins: 0,
            p2Wins: 0,
            draws: 0,
        },
        globalStatistics: {
            matches: 0,
            pCWins: 0,
            totalMoves: 0,
        }
    };

    checkForWinner = () => {
        //I'll hardcore code this function but i've made an easy version in pure JS
        if (this.state.winner === '') {
            let winner = this.state.winner;
            let playersCopy = { ...this.state.Players };
            let finishCheck = () => {
                this.setState((prevState, props) => {
                    return {
                        winner: winner,
                        Players: playersCopy,
                        gameNotOver: false,
                        rematch: true,
                    }
                });
            };
            for (let i = 0; i <= 8; i += 3) {
                if (this.state.board[i] + this.state.board[i + 1] + this.state.board[i + 2] === 3 ||
                    (this.state.board[i] + this.state.board[i + 1] + this.state.board[i + 2]) === -3
                ) {
                    this.setState({ gameNotOver: false })
                    winner = this.state.currentPlay === 1 ? `${this.state.Players.Player2}` : `${this.state.Players.Player1}`;
                    finishCheck();
                    break;
                };
            };
            if (winner === '') {
                for (let i = 0; i <= 2; i++) {
                    if (this.state.board[i] + this.state.board[i + 3] + this.state.board[i + 6] === 3 ||
                        (this.state.board[i] + this.state.board[i + 3] + this.state.board[i + 6]) === -3
                    ) {
                        this.setState({ gameNotOver: false });
                        winner = this.state.currentPlay === 1 ? `${this.state.Players.Player2}` : `${this.state.Players.Player1}`;
                        finishCheck();
                        break;
                    };
                };
            };
            if (winner === '') {
                if (this.state.board[0] + this.state.board[4] + this.state.board[8] === 3 ||
                    (this.state.board[0] + this.state.board[4] + this.state.board[8]) === -3
                ) {
                    winner = this.state.currentPlay === 1 ? `${this.state.Players.Player2}` : `${this.state.Players.Player1}`;
                    finishCheck();
                };
                if (this.state.board[2] + this.state.board[4] + this.state.board[6] === 3 ||
                    (this.state.board[2] + this.state.board[4] + this.state.board[6]) === -3
                ) {
                    winner = this.state.currentPlay === 1 ? `${this.state.Players.Player2}` : `${this.state.Players.Player1}`;
                    finishCheck();
                };
            };
            if (winner === this.state.Players.Player1) {
                playersCopy.p1Wins += 1;
            } else if (winner === this.state.Players.Player2) {
                playersCopy.p2Wins += 1;
            } else if (winner === '' && this.state.turn === 9) {
                winner = 'Tie';
                playersCopy.draws += 1;
                finishCheck();
            };
        }
    };

    multiplayerHandler = (event) => {
        let players = this.state.Players;
        players.Player2 = !this.state.pcEnabled ? 'PC' : 'Player 2';
        this.setState({
            pcEnabled: !this.state.pcEnabled,
            Players: players
        });
    };

    startHandler = () => {
        this.setState({
            board: [
                '', '', '',
                '', '', '',
                '', '', ''
            ],
            currentPlay: this.state.currentPlay === '' ? 1 : this.state.currentPlay,
            gameNotOver: true,
            turn: 0,
            winner: '',
        })
    };

    rematchHandler = () => {
        this.startHandler();
        this.setState({ rematch: false })
    };

    nameChangeHandler = (event) => {
        let players = this.state.Players;
        let id = event.target.id.split(' ').join('');
        players[id] = event.target.value;
        this.setState({
            Players: players
        });
    };
    pcPlay = (state) => {
        let boardCopy = [...state.board];
        let emptyBoardSquares = boardCopy.map((element, index) => {
            if (element === '') { return index }
            else { return null }
        }).filter(element => {
            return element !== null
        });
        let randomArrayPosition = Math.round(Math.random() * (emptyBoardSquares.length - 1));
        let position = emptyBoardSquares[randomArrayPosition];

        return position;

    }

    playsHandler = (event, pcTurn) => {
        let board = [...this.state.board];
        let currentPlayCopy = this.state.currentPlay;
        let boardCode = pcTurn ? this.pcPlay(this.state) : event.target.id;



        board[boardCode] = currentPlayCopy;
        if (currentPlayCopy === 1) {
            currentPlayCopy = -1;
        } else if (currentPlayCopy === -1) {
            currentPlayCopy = 1;
        };
        this.setState((prevState, props) => {
            return { currentPlay: currentPlayCopy, board: board, turn: prevState.turn + 1 }
        }, () => {
            if (this.state.turn >= 5) {
                this.checkForWinner()
            };

            if (this.state.pcEnabled
                && !pcTurn
            ) {
                this.playsHandler(null, true)
                    ;

            };

        })
    }

    endgameHandler = () =>
        this.setState({ gameNotOver: true })

    newGameHandler = () => {

        this.setState({
            board: [
                '', '', '',
                '', '', '',
                '', '', ''
            ],
            currentPlay: '',
            gameNotOver: false,
            turn: 0,
            winner: '',
            rematch: false,
            Players: {
                Player1: 'Player 1',
                Player2: 'PC',
                p1Wins: 0,
                p2Wins: 0,
                draws: 0,
            }
        })
    };

    render() {
        return (
            <div className={classes.Container}>
                <Menu
                    change={this.nameChangeHandler}
                    showMenu={this.state.currentPlay}
                    gameMode={this.state.pcEnabled}
                    clickMultiplayer={this.multiplayerHandler}
                    clickStart={this.startHandler}></Menu>
                <Gameboard
                    makePlay={this.playsHandler}
                    marker={this.state.currentPlay}
                    showGameboard={this.state.gameNotOver}
                    board={this.state.board}
                    score={this.state.Players} />
                <Rematch
                    showRematch={this.state.rematch}
                    gameOver={this.state.gameNotOver}
                    rematch={this.rematchHandler}
                    endgame={this.endgameHandler}
                    newGame={this.newGameHandler}
                    winner={this.state.winner}
                />
            </div>
        )
    }
}
export default Main;