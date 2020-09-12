import React from 'react';
import EditButton from '../Components/edit-button';
import { GameContext } from '../game-context';
import GameApiService from '../services/game_api_service';

export default class Scoreboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            game_id: window.location.pathname.split('/')[3],
        };
    }

    getPlayers() {
        fetch(
            `https://quiet-journey-02794.herokuapp.com/players?game_id=${this.state.game_id}`
        )
            .then((results) => results.json())
            .then((data) => {
                this.setState({
                    players: data,
                });
                this.props.context.updateContext({ players: data });
            });
    }

    getGameDetails() {
        GameApiService.getGame(this.state.game_id).then((results) =>
            localStorage.setItem('round', results[0].round)
        );
    }

    componentDidMount() {
        const checkForUpdate = () => {
            setInterval(() => {
                this.getGameDetails();
                this.getPlayers();
            }, 3000);
        };

        checkForUpdate();
    }

    componentWillUnmount() {
        clearInterval(this.getPlayers);
        clearInterval(this.getGameDetails);
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
                    const showScoreboard = () => {
                        if (this.props.scoreboardVisible === false) {
                            return 'hide';
                        } else {
                            return '';
                        }
                    };
                    return (
                        <div
                            className={`scoreboard-container-mobile ${showScoreboard()}`}
                        >
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
