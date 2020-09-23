import React from 'react';
import { GameContext } from '../game-context';

export default class Scoreboard extends React.Component {
    displayPlayers(players) {
        const playersList = players.map((player, i) => {
            return (
                <div key={i} className="player-container">
                    <p className="player-name-game">{player.player_name}</p>
                    <p className="player-score">{player.points}</p>
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
                                <h2 className="scoreboard-header">
                                    Scoreboard
                                </h2>
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
