import React from "react";
import Scoreboard from "../Components/scoreboard";
import ClaimButton from "../Components/claim-button";
import CardWindow from "../Components/card-window";
import Wildcard from "../Components/wildcard";
import ScoreboardMobile from "../Components/scoreboard-mobile";

const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <Scoreboard state={props.state} />
            <ScoreboardMobile state={props.state} />
            <button
                className="scoreboard-button"
                onClick={props.toggleScoreboard}
            >
                {props.state.scoreboardVisible
                    ? "Hide Scoreboard"
                    : "Show Scoreboard"}
            </button>
            <ClaimButton />
            <CardWindow state={props.state} />
            <Wildcard />
        </div>
    );
};

export default Dashboard;
