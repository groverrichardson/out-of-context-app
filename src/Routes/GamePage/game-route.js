import React from "react";
import Dashboard from "../../Components/dashboard";
import ResponseSection from "../../Components/response-section-judge";
import ResponseSectionPlayer from "../../Components/response-section-player";
import { GameContext } from "../../game-context";
// import { Link } from "react-router-dom";

export default class GamePage extends React.Component {
    state = {
        activeView: "Player",
    };
    render() {
        return (
            <GameContext.Consumer>
                {(context) => {
                    const toggleScoreboard = () => {
                        const prevState = context;
                        context.updateScoreboardVisible(prevState);
                    };
                    const handleClick = (e) => {
                        if (e.target.className === "player-view-button") {
                            this.setState({
                                activeView: "Player",
                            });
                            const update = { activeView: "Player" };
                            context.updateContext(update);
                        } else {
                            this.setState({
                                activeView: "Judge",
                            });
                            const update = { activeView: "Judge" };
                            context.updateContext(update);
                        }
                    };
                    const displayView = () => {
                        if (this.state.activeView === "Player") {
                            return <ResponseSectionPlayer />;
                        } else {
                            return <ResponseSection />;
                        }
                    };
                    return (
                        <div className="game-page-container">
                            <div className="main-container">
                                <div className="view-buttons">
                                    <button
                                        className="player-view-button"
                                        onClick={(e) => handleClick(e)}
                                    >
                                        Player View
                                    </button>
                                    <button
                                        className="judge-view-button"
                                        onClick={(e) => handleClick(e)}
                                    >
                                        Judge View
                                    </button>
                                </div>
                                <Dashboard
                                    state={context}
                                    toggleScoreboard={toggleScoreboard}
                                />
                                {displayView()}
                            </div>
                            <div className="player-responses"></div>
                        </div>
                    );
                }}
            </GameContext.Consumer>
        );
    }
}
