import React from "react";
import Scoreboard from "../Components/scoreboard";
import ClaimButton from "../Components/claim-button";
import CardWindow from "../Components/card-window";
import Wildcard from "../Components/wildcard";
import ScoreboardMobile from "../Components/scoreboard-mobile";
import { GameContext } from "../game-context";

class Dashboard extends React.Component {
    state = {
        scoreboardVisible: false,
        wildCardActive: false,
    };

    getWildCard() {
        fetch(
            `http://localhost:8000/active-wild-card/${localStorage.getItem(
                "game_id"
            )}`
        )
            .then((wildCardData) => wildCardData.json())
            .then((wildCard) => {
                if (wildCard[0].active_wild_card !== null) {
                    this.setState({
                        wildCardActive: true,
                    });
                } else {
                    this.setState({
                        wildCardActive: false,
                    });
                }
            });
    }

    componentDidMount() {
        const checkForUpdate = () => {
            setInterval(() => this.getWildCard(), 3000);
        };

        checkForUpdate();
    }

    componentWillUnmount() {
        clearInterval(this.getWildCard);
    }

    displayWildCard() {
        if (this.state.wildCardActive === true) {
            return <Wildcard />;
        }
    }

    render() {
        return (
            <GameContext.Consumer>
                {(context) => {
                    const toggleScoreboard = () => {
                        if (this.state.scoreboardVisible === false) {
                            this.setState({
                                scoreboardVisible: true,
                            });
                        } else {
                            this.setState({
                                scoreboardVisible: false,
                            });
                        }
                    };
                    return (
                        <div className="dashboard">
                            <Scoreboard context={context} />
                            <ScoreboardMobile
                                scoreboardVisible={this.state.scoreboardVisible}
                            />
                            <button
                                className="scoreboard-button"
                                onClick={toggleScoreboard}
                            >
                                {this.state.scoreboardVisible
                                    ? "Hide Scoreboard"
                                    : "Show Scoreboard"}
                            </button>
                            <ClaimButton />
                            <CardWindow context={context} />
                            {this.displayWildCard()}
                        </div>
                    );
                }}
            </GameContext.Consumer>
        );
    }
}

export default Dashboard;
