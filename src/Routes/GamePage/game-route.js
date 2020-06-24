import React from "react";
import Dashboard from "../../Components/dashboard";
import ResponseSection from "../../Components/response-section-judge";
import ResponseSectionPlayer from "../../Components/response-section-player";
// import { Link } from "react-router-dom";

export default class GamePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scoreboardVisible: false,
            buttonText: true,
            activeView: "Player",
        };
    }
    render() {
        const toggleScoreboard = () => {
            const prevState = this.state;
            this.setState({
                scoreboardVisible: !prevState.scoreboardVisible ? true : false,
            });
        };
        const displayView = () => {
            if (this.state.activeView === "Player") {
                return <ResponseSectionPlayer />;
            } else if (this.state.activeView === "Judge") {
                return <ResponseSection />;
            }
        };
        const handleClick = (e) => {
            if (e.target.className === "player-view-button") {
                this.setState({
                    activeView: "Player",
                });
            } else {
                this.setState({
                    activeView: "Judge",
                });
            }
        };
        return (
            <div className="game-page-container">
                <div className="main-container">
                    <div className="view-buttons">
                        <button
                            className="player-view-button"
                            onClick={handleClick}
                        >
                            Player View
                        </button>
                        <button
                            className="judge-view-button"
                            onClick={handleClick}
                        >
                            Judge View
                        </button>
                    </div>
                    <Dashboard
                        state={this.state}
                        toggleScoreboard={toggleScoreboard}
                    />
                    {displayView()}
                </div>
                <div className="player-responses"></div>
            </div>
        );
    }
}
