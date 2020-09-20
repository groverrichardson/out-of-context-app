import React, { Component, createContext } from 'react';
import { Redirect } from 'react-router-dom';
import GameApiService from './services/game_api_service';

export const GameContext = createContext();

class GameContextProvider extends Component {
    _isMounted = true;
    constructor() {
        super();
        this.state = {
            mainPlayerName: '',
            players: [],
            active_card: '',
            active_card_id: '',
            round: '',
            responses: [],
            sessionName: '',
            questionError: false,
            errorMessage: [],
            scoreboardVisible: false,
            buttonText: true,
            activeView: 'Player',
            game_id: parseInt(window.location.pathname.split('/')[2]),
            newGame: true,
            current_judge: '',
            cards_played: '',
            number_of_players: '',
            gameActive: '',
            roundCheck: '',
            answerSubmitted: 'false',
        };
    }

    componentDidMount() {
        this._isMounted = true;
        const checkForUpdate = () => {
            setInterval(() => this.getDashboard(this._isMounted), 3000);
        };
        checkForUpdate();
    }

    comparePlayersID(a, b) {
        let playerA = parseInt(a.id);
        let playerB = parseInt(b.id);

        let comparison = 0;
        if (playerA > playerB) {
            comparison = 1;
        } else if (playerA < playerB) {
            comparison = -1;
        }
        return comparison;
    }

    getDashboard(isMounted) {
        if (this.state.game_id) {
            GameApiService.getDashboard(this.state.game_id).then(
                (dashboard) => {
                    const { active_card, round, game_status } = dashboard;

                    GameApiService.getPlayers(this.state.game_id).then(
                        (players) => {
                            let currentJudge = players.filter(
                                (player) => player.player_status === 'Judge'
                            );
                            let playerId = parseInt(
                                localStorage.getItem('player_id')
                            );
                            let currentPlayer = players.filter(
                                (player) => player.id === playerId
                            );

                            if (isMounted && this.state.game_id) {
                                this.setState({
                                    active_card_id: active_card,
                                    players: players.sort(
                                        this.comparePlayersID
                                    ),
                                    round: round,
                                    current_judge: currentJudge,
                                    gameActive: game_status,
                                    answerSubmitted:
                                        currentPlayer[0].answer_submitted,
                                });
                                localStorage.setItem('round', this.state.round);
                            }
                        }
                    );

                    GameApiService.getCardInfo(this.state.active_card_id).then(
                        (cardInfo) => {
                            if (
                                isMounted &&
                                this.state.game_id &&
                                cardInfo.length === 1
                            ) {
                                this.setState({
                                    active_card: cardInfo[0],
                                });
                            }
                        }
                    );

                    GameApiService.getResponses(
                        this.state.round,
                        this.state.game_id
                    ).then((responses) => {
                        if (
                            isMounted &&
                            this.state.game_id &&
                            responses !== undefined
                        ) {
                            this.setState({
                                responses: responses,
                            });
                        }
                    });
                }
            );
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
        clearInterval(this.getDashboard);
    }

    updateContext = (newUpdate) => {
        const key = Object.keys(newUpdate);
        const value = Object.values(newUpdate);

        this.setState({
            [key[0]]: value[0],
        });
    };

    updatePlayersContext = (newUpdate) => {
        const key = Object.keys(newUpdate);
        const value = Object.values(newUpdate);

        this.setState({
            [key[0]]: [...this.state.players, value[0]],
        });
    };

    updatePlayerName = (e) => {
        this.setState({
            mainPlayerName: e.target.value,
        });
    };

    updateSessionName = (e) => {
        this.setState({
            sessionName: e.target.value,
        });
    };

    updateGameId = (e) => {
        this.setState({
            game_id: e.target.value,
        });
    };

    displayErrors = () => {
        if (
            this.state.errorMessage !== null ||
            this.state.errorMessage !== ['']
        ) {
            return this.state.errorMessage.map((message) => {
                return <p>{message}</p>;
            });
        }
    };

    updateQuestionErrors = (message) => {
        this.setState(
            {
                errorMessage: [],
            },
            () => {
                const updatedErrorMessage = () => {
                    this.state.errorMessage.push(message);
                    return this.state.errorMessage;
                };
                this.setState({
                    errorMessage: updatedErrorMessage(),
                });
            }
        );
    };

    clearQuestionErrors = () => {
        this.setState({
            errorMessage: [],
        });
    };

    createGameSession = (route, player, session) => {
        GameApiService.createGame(route, player, session);
    };

    redirectToGamePage = () => {
        return <Redirect to="/game" />;
    };

    render() {
        return (
            <GameContext.Provider
                value={{
                    ...this.state,
                    updatePlayerName: this.updatePlayerName,
                    updateSessionName: this.updateSessionName,
                    redirectToGamePage: this.redirectToGamePage,
                    createGameSession: this.createGameSession,
                    updateQuestionErrors: this.updateQuestionErrors,
                    clearQuestionErrors: this.clearQuestionErrors,
                    updateContext: this.updateContext,
                    updatePlayersContext: this.updatePlayersContext,
                    updateGameId: this.updateGameId,
                }}
            >
                {this.props.children}
            </GameContext.Provider>
        );
    }
}

export default GameContextProvider;
