import React from "react";
import Scoreboard from "../Components/scoreboard";
import ClaimButton from "../Components/claim-button";
import CardWindow from "../Components/card-window";
import Wildcard from "../Components/wildcard";

const Dashboard = (props) => {
    const toggleScoreboard = () => {
        const prevState = this.state;
        this.setState({
            scoreboardVisible: !prevState.scoreboardVisible ? true : false,
        });
    };
    return (
        <div className="dashboard">
            <Scoreboard state={{ ...props.state }} />
            <button className="scoreboard-button" onClick={toggleScoreboard}>
                {props.state.scoreboardVisible
                    ? "Hide Scoreboard"
                    : "Show Scoreboard"}
            </button>
            <ClaimButton />
            <CardWindow />
            <Wildcard />
        </div>
    );
};

export default Dashboard;
