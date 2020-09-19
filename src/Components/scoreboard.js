import React from 'react';
import { GameContext } from '../game-context';

export default class Scoreboard extends React.Component {
    displayPlayers(players) {
        const playersList = players.map((player, i) => {
            return (
                <div key={i} className="player-container">
                    <p className="player-name">{player.player_name}</p>
                    <p className="playerscore">{player.points}</p>
                </div>
            );
        });
        return <div>{playersList}</div>;
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
                                    {this.displayPlayers(context.players)}
                                </div>
                            </div>
                        </div>
                    );
                }}
            </GameContext.Consumer>
        );
    }
}
