import React, { Component } from 'react';
import classes from './main.module.css'
import Menu from '../../components/Menu/Menu'
import Aux from '../../hoc/Aux'

class Main extends Component {


    state = {
        board: [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ],
        currentPlay: '',
        pcEnabled: true,
        gameNotOver: true,
        turn: 0,
        count: 0,
        rematch: false,
        Players: {
            Player1: 'Player 1',
            Player2: 'PC',
        }

    }

    multiplayerHandler = () => {
        let players = this.state.Players;
        console.log(players)
        players.Player2 = !this.state.pcEnabled ? 'PC' : 'Player 2';

        this.setState({
            pcEnabled: !this.state.pcEnabled,
            Players: players
        });

    }
    startHandler = () => {
        this.setState({
            currentPlay: 1,

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

    render() {
        let showMenu = null;
        if (this.state.currentPlay !== '') {
            showMenu = 'MenuHidden'
            console.log(showMenu)

        }
        let showPlayer = null;
        if (this.state.pcEnabled === true) {
            showPlayer = 'HideName'
        }
        return (
            <Aux>
                <Menu
                    change={this.nameChangeHandler}
                    show={showMenu}
                    multiplayer={showPlayer}
                    clickMultiplayer={this.multiplayerHandler}
                    clickStart={this.startHandler}></Menu>
                <p>Aqui irá el gameboard, pero debe ser un componente aparte</p>
            </Aux>

        )
    }
}

export default Main;
