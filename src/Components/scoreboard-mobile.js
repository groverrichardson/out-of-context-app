import React from "react";
import EditButton from "./edit-button";
import { GameContext } from "../game-context";

export default class Scoreboard extends React.Component {
    render() {
        return (
            <GameContext.Consumer>
                {(context) => {
                    const showScoreboard = () => {
                        if (this.props.scoreboardVisible === false) {
                            return "hide";
                        } else {
                            return "";
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
                                    <div className="player-container">
                                        <p className="player-name">Tressa</p>
                                        <p className="playerscore">3</p>
                                    </div>
                                    <div className="player-container">
                                        <p className="player-name">Tressa</p>
                                        <p className="playerscore">3</p>
                                    </div>
                                    <div className="player-container">
                                        <p className="player-name">Tressa</p>
                                        <p className="playerscore">3</p>
                                    </div>
                                    <div className="player-container">
                                        <p className="player-name">Tressa</p>
                                        <p className="playerscore">3</p>
                                    </div>
                                    <div className="player-container">
                                        <p className="player-name">Tressa</p>
                                        <p className="playerscore">3</p>
                                    </div>
                                    <div className="player-container">
                                        <p className="player-name">Tressa</p>
                                        <p className="playerscore">3</p>
                                    </div>
                                    <div className="player-container">
                                        <p className="player-name">Tressa</p>
                                        <p className="playerscore">3</p>
                                    </div>
                                    <div className="player-container">
                                        <p className="player-name">Tressa</p>
                                        <p className="playerscore">3</p>
                                    </div>
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
