import React from 'react';
import EditButton from '../Components/edit-button';
import { GameContext } from '../game-context';

export default class Scoreboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            game_id: window.location.pathname.split('/')[3],
        };
    }

    getPlayers() {
        fetch(`http://localhost:8000/players?game_id=${this.state.game_id}`)
            .then((results) => results.json())
            .then((data) =>
                this.setState({
                    players: data,
                })
            );
    }

    componentDidMount() {
        const checkForUpdate = () => {
            setInterval(() => this.getPlayers(), 3000);
        };

        checkForUpdate();
    }

    componentWillUnmount() {
        clearInterval(this.getPlayers);
    }

    displayPlayers() {
        const playersList = this.state.players.map((player, i) => {
            return (
                <div key={i} className="player-container">
                    <p className="player-name">{player.player_name}</p>
                    <p className="playerscore">{player.points}</p>
                </div>
            );
        });
        return <div>{playersList}</div>;
    }

    clearStorage() {
        window.onunload = () => {
            window.MyStorage.clear();
        };
    }

    render() {
        return (
            <GameContext.Consumer>
                {(context) => {
                    return (
                        <div className={`scoreboard-container `}>
                            <div className="scoreboard">
                                <h1 className="scoreboard-header">
                                    Scoreboard
                                </h1>
                                <div className="players">
                                    {this.displayPlayers()}
                                </div>
                            </div>
                            <EditButton />
                        </div>
                    );
                }}
            </GameContext.Consumer>
        );
    }
}
