import React from 'react';
import Dashboard from '../../Components/dashboard';
import ResponseSection from '../../Components/response-section-judge';
import ResponseSectionPlayer from '../../Components/response-section-player';
import { GameContext } from '../../game-context';
// import { Link } from "react-router-dom";

export default class GamePage extends React.Component {
    state = {
        activeView: 'Player',
    };

    render() {
        return (
            <GameContext.Consumer>
                {(context) => {
                    const toggleScoreboard = () => {
                        const prevState = context;
                        context.updateScoreboardVisible(prevState);
                    };
                    const displayView = () => {
                        if (
                            localStorage.getItem('player_status') === 'Player'
                        ) {
                            return <ResponseSectionPlayer />;
                        } else {
                            return <ResponseSection />;
                        }
                    };
                    return (
                        <div className="game-page-container">
                            <div className="main-container">
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
