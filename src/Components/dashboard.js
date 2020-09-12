import React from 'react';
import Scoreboard from '../Components/scoreboard';
import ClaimButton from '../Components/claim-button';
import CardWindow from '../Components/card-window';
import ScoreboardMobile from '../Components/scoreboard-mobile';
import { GameContext } from '../game-context';

class Dashboard extends React.Component {
    state = {
        scoreboardVisible: false,
    };

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
                                context={context}
                                scoreboardVisible={this.state.scoreboardVisible}
                            />
                            <button
                                className="scoreboard-button"
                                onClick={toggleScoreboard}
                            >
                                {this.state.scoreboardVisible
                                    ? 'Hide Scoreboard'
                                    : 'Show Scoreboard'}
                            </button>
                            <ClaimButton />
                            <CardWindow context={context} />
                        </div>
                    );
                }}
            </GameContext.Consumer>
        );
    }
}

export default Dashboard;
