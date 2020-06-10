import React from "react";
import EditButton from "../Components/edit-button";

export default class Scoreboard extends React.Component {
    render() {
        return (
            <div
                className={`scoreboard-container ${
                    this.props.state.scoreboardVisible ? "" : "hide"
                }`}
            >
                <div className="scoreboard">
                    <h1 className="scoreboard-header">Scoreboard</h1>
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
    }
}
