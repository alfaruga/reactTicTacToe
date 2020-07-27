import React, { Component } from 'react';
import classes from './main.module.css';
import Menu from '../../components/Menu/Menu';
import Aux from '../../hoc/Aux';
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
        }
    }
    checkForWinner = () => {
        //I'll hardcore code this function but i made an easy version in pure JS
        let winner = this.state.winner;
        let playersCopy = { ...this.state.Players };
        let finishCheck = () => {
            this.setState({
                winner: winner,
                Players: playersCopy,
                gameNotOver: false
            })
        }

        for (let i = 0; i <= 8; i += 3) {
            if (this.state.board[i] + this.state.board[i + 1] + this.state.board[i + 2] === 3 ||
                (this.state.board[i] + this.state.board[i + 1] + this.state.board[i + 2]) === -3
            ) {
                this.setState({ gameNotOver: false })
                winner = this.state.currentPlay === 1 ? `${this.state.Players.Player2}` : `${this.state.Players.Player1}`;
                finishCheck();
                break;
            }
        }
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
        }

        if (winner === '') {
            if (this.state.board[0] + this.state.board[4] + this.state.board[8] === 3 ||
                (this.state.board[0] + this.state.board[4] + this.state.board[8]) === -3
            ) {
                winner = this.state.currentPlay === 1 ? `${this.state.Players.Player2}` : `${this.state.Players.Player1}`;
                finishCheck();


            }
            if (this.state.board[2] + this.state.board[4] + this.state.board[6] === 3 ||
                (this.state.board[2] + this.state.board[4] + this.state.board[6]) === -3
            ) {
                winner = this.state.currentPlay === 1 ? `${this.state.Players.Player2}` : `${this.state.Players.Player1}`;
                finishCheck();


            }
        }
        if (winner === this.state.Players.Player1) {
            playersCopy.p1Wins += 1;
        } else if (winner === this.state.Players.Player2) {
            playersCopy.p2Wins += 1;
        } else if (winner === '' && this.state.turn === 9) {
            winner = 'Tie';
            playersCopy.draws += 1;
            this.setState({ gameNotOver: false, winner: winner, Players: playersCopy });

        }



    }

    multiplayerHandler = (event) => {
        let players = this.state.Players;
        players.Player2 = !this.state.pcEnabled ? 'PC' : 'Player 2';

        this.setState({
            pcEnabled: !this.state.pcEnabled,
            Players: players
        });
    }
    startHandler = () => {
        this.setState({

            board: [
                '', '', '',
                '', '', '',
                '', '', ''
            ],

            currentPlay: this.state.currentPlay === '' ? 1 : (this.state.currentPlay),
            gameNotOver: true,
            turn: 0,
            winner: '',


        })
    }
    nameChangeHandler = (event) => {
        let players = this.state.Players;
        let id = event.target.id.split(' ').join('');
        players[id] = event.target.value;
        this.setState({
            Players: players
        }
        )
    }
    playsHandler = (event) => {
        let board = [...this.state.board];
        let currentPlayCopy = this.state.currentPlay;

        board[event.target.id] = currentPlayCopy;

        if (this.state.currentPlay === 1) {
            currentPlayCopy = -1;
        } else if (this.state.currentPlay === -1) {
            currentPlayCopy = 1;

        }
        this.setState((prevState, props) => {
            return { currentPlay: currentPlayCopy, board: board, turn: prevState.turn + 1 }
        },
            () => {
                if (this.state.turn >= 5) {
                    this.checkForWinner()
                }
            });


    }


    render() {
        let showPlayer = null;
        let showMenu = null;
        let showGameboard = 'Hidden';
        let showRematchWindow = 'Hide';
        let gameType = 'Single Player';
        if (this.state.currentPlay !== '') {
            showMenu = 'MenuHidden';
            showGameboard = '';
        }
        if (!this.state.gameNotOver) {
            showMenu = 'MenuHidden';
            showGameboard = 'Hidden';
            showRematchWindow = ''

        }
        if (this.state.pcEnabled === true) {
            showPlayer = 'HideName';
            gameType = 'Multiplayer'
        }
        return (
            <Aux >
                <div className={classes.Container}>
                    <Menu
                        change={this.nameChangeHandler}
                        show={showMenu}
                        gameMode={gameType}
                        multiplayer={showPlayer}
                        clickMultiplayer={this.multiplayerHandler}
                        clickStart={this.startHandler}></Menu>
                    <Gameboard
                        makePlay={this.playsHandler}
                        marker={this.state.currentPlay}
                        show={showGameboard}
                        board={this.state.board}
                        score={this.state.Players} />
                    <Rematch
                        showRematch={showRematchWindow}
                        continue={this.state.rematch}
                        rematch={this.startHandler}
                    />
                </div>
            </Aux>
        )
    }
}

export default Main;
