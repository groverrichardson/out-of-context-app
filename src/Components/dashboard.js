import React from 'react';
import Scoreboard from '../Components/scoreboard';
import CardWindow from '../Components/card-window';
import ScoreboardMobile from '../Components/scoreboard-mobile';
import { GameContext } from '../game-context';
import ArrowDown from '../assets/keyboard_arrow_down-24px.svg';

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
                            context.updateContext({ scoreboardVisible: true });
                        } else {
                            this.setState({
                                scoreboardVisible: false,
                            });
                            context.updateContext({ scoreboardVisible: false });
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
                                    : 'View Scoreboard'}{' '}
                                <img
                                    src={ArrowDown}
                                    alt="Down arrow"
                                    className="arrow-down"
                                />
                            </button>
                            <CardWindow context={context} />
                        </div>
                    );
                }}
            </GameContext.Consumer>
        );
    }
}

export default Dashboard;
