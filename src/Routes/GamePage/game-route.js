import React from 'react';
import Dashboard from '../../Components/dashboard';
import ResponseSection from '../../Components/response-section-judge';
import ResponseSectionPlayer from '../../Components/response-section-player';
import { GameContext } from '../../game-context';
import GameApiService from '../../services/game_api_service';

export default class GamePage extends React.Component {
    _isMounted = true;
    state = {
        activeView: 'Player',
        update: 0,
    };

    componentDidMount() {
        this._isMounted = true;
        const checkForUpdate = () => {
            setInterval(() => this.forceRender(), 3000);
        };
        checkForUpdate();
    }

    forceRender() {
        if (this._isMounted === true) {
            this.setState({
                update: this.state.update + 1,
            });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
        clearInterval(this.forceRender);
    }

    render() {
        return (
            <GameContext.Consumer>
                {(context) => {
                    const displayView = () => {
                        if (
                            localStorage.getItem('player_status') === 'Player'
                        ) {
                            return <ResponseSectionPlayer context={context} />;
                        } else {
                            return <ResponseSection />;
                        }
                    };

                    const displayPlayers = (players) => {
                        const playersList = players.map((player, i) => {
                            return (
                                <div key={i} className="player-container">
                                    <p className="player-name">
                                        {player.player_name}
                                    </p>
                                </div>
                            );
                        });
                        return <div>{playersList}</div>;
                    };

                    const startGame = () => {
                        let game_id = context.game_id;

                        GameApiService.updateGameStatus(game_id, 'Active');
                    };

                    return (
                        <div className="page-container">
                            {context.gameActive === 'Active' ? (
                                <div className="game-page-container">
                                    <div className="main-container">
                                        <h2 className="session-id-header">
                                            Invite your friends!
                                        </h2>
                                        <p className="session-id">
                                            Your session ID is:{' '}
                                            {
                                                window.location.pathname.split(
                                                    '/'
                                                )[2]
                                            }
                                        </p>
                                        <Dashboard state={context} />
                                        {displayView()}
                                    </div>
                                    <div className="player-responses"></div>
                                </div>
                            ) : localStorage.getItem('player_status') ===
                              'Judge' ? (
                                <section className="waiting-section">
                                    <h2 className="waiting-header">
                                        Players in the Waiting Room
                                    </h2>
                                    <h3 className="session-id">
                                        Your session ID is: {context.game_id}
                                    </h3>
                                    {displayPlayers(context.players)}
                                    <button
                                        className="start-game"
                                        onClick={startGame}
                                    >
                                        Start Game
                                    </button>
                                </section>
                            ) : (
                                <section className="waiting-section">
                                    <h2 className="waiting-header">
                                        Waiting on host to start game
                                    </h2>
                                    <h3 className="players-header">
                                        Players in waiting room
                                    </h3>
                                    {displayPlayers(context.players)}
                                </section>
                            )}
                        </div>
                    );
                }}
            </GameContext.Consumer>
        );
    }
}
