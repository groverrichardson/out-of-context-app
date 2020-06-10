import React from "react";
import Dashboard from "../../Components/dashboard";
import ResponseSection from "../../Components/response-section";

export default class GamePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scoreboardVisible: true,
            buttonText: true,
        };
    }
    render() {
        const toggleScoreboard = () => {
            const prevState = this.state;
            this.setState({
                scoreboardVisible: !prevState.scoreboardVisible ? true : false,
            });
        };
        return (
            <div className="game-page-container">
                <div className="main-container">
                    <Dashboard
                        state={this.state}
                        toggleScoreboard={toggleScoreboard}
                    />
                    <ResponseSection />
                </div>
                <div className="player-responses"></div>
            </div>
        );
    }
}
