import React from 'react';
import Dashboard from '../../Components/dashboard';
import ResponseSection from '../../Components/response-section-judge';
import ResponseSectionPlayer from '../../Components/response-section-player';
import { GameContext } from '../../game-context';
import GameApiService from '../../services/game_api_service';
import LinesTopLeft from '../../assets/lines-top-left.svg';
import LinesBottomRight from '../../assets/lines-bottom-right.svg';
import LinesTopRight from '../../assets/lines-top-right.svg';
import LinesBottomLeft from '../../assets/lines-bottom-left.svg';

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
                    console.log(context.scoreboardVisible);
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
                                <p key={i} className="player-name">
                                    {player.player_name}
                                </p>
                            );
                        });
                        return (
                            <div className="player-container">
                                {playersList}
                            </div>
                        );
                    };

                    const startGame = (e) => {
                        e.preventDefault();
                        let game_id = context.game_id;

                        GameApiService.updateGameStatus(game_id, 'Active');
                    };

                    return (
                        <div
                            className={
                                context.scoreboardVisible === 'true'
                                    ? 'page-container hide-overflow'
                                    : 'page-container'
                            }
                        >
                            {context.gameActive === 'Active' ? (
                                <div className="game-page-container">
                                    <div className="main-container">
                                        <Dashboard state={context} />
                                        {displayView()}
                                    </div>
                                    <div className="player-responses"></div>
                                </div>
                            ) : localStorage.getItem('player_status') ===
                              'Judge' ? (
                                <section className="waiting-section">
                                    <img
                                        src={LinesTopLeft}
                                        alt="Line decoration"
                                        className="lines-top-left-instructions lines-instructions"
                                    />
                                    <img
                                        src={LinesTopRight}
                                        alt="Line decoration"
                                        className="lines-top-right-instructions lines-instructions"
                                    />
                                    <img
                                        src={LinesBottomLeft}
                                        alt="Line decoration"
                                        className="lines-bottom-left-instructions lines-instructions"
                                    />
                                    <img
                                        src={LinesBottomRight}
                                        alt="Line decoration"
                                        className="lines-bottom-right-instructions lines-instructions"
                                    />
                                    <h1 className="how-to-play-header">
                                        How to Play
                                    </h1>
                                    <ol className="instructions">
                                        <li className="instruction-item">
                                            Each round, each player besides the
                                            judge, will find the text message
                                            that corresponds with the message
                                            and thread number provided.
                                        </li>
                                        <li className="instruction-item">
                                            Once all players have submitted
                                            their response, the judge will pick
                                            their favorite response.
                                        </li>
                                        <li className="instruction-item">
                                            The player who submitted the
                                            response chosen earns a point.
                                        </li>
                                        <li className="instruction-item">
                                            Play until you get bored or want to
                                            do something else.
                                        </li>
                                    </ol>
                                    <h2 className="session-id-header">
                                        Your Session ID is
                                    </h2>
                                    <p className="session-number">
                                        {context.game_id}
                                    </p>
                                    <h3 className="players-in-room">
                                        These players are waiting for you to
                                        start the game
                                    </h3>
                                    {displayPlayers(context.players)}
                                    <form onSubmit={(e) => startGame(e)}>
                                        <button
                                            type="submit"
                                            className="start-game"
                                        >
                                            Start Game
                                        </button>
                                    </form>
                                </section>
                            ) : (
                                <section className="waiting-section">
                                    <h1 className="how-to-play-header">
                                        How to Play
                                    </h1>
                                    <ol className="instructions">
                                        <li className="instruction-item">
                                            Each round, each player besides the
                                            judge, will find the text message
                                            that corresponds with the message
                                            and thread number provided.
                                        </li>
                                        <li className="instruction-item">
                                            Once all players have submitted
                                            their response, the judge will pick
                                            their favorite response.
                                        </li>
                                        <li className="instruction-item">
                                            The player who submitted the
                                            response chosen earns a point.
                                        </li>
                                        <li className="instruction-item">
                                            Play until you get bored or want to
                                            do something else.
                                        </li>
                                    </ol>
                                    <h2 className="waiting-header">
                                        Waiting on host to start game{' '}
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
