import React from 'react';
import { GameContext } from '../../game-context';
import GameApiService from '../../services/game_api_service';

export default class QuestionsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            game_id: '',
        };
    }
    render() {
        return (
            <GameContext.Consumer>
                {(context) => {
                    const route = this.props.history;
                    const mainPlayerName = context.mainPlayerName;
                    const gameInputs = { mainPlayerName };
                    const game_id = this.state.game_id;
                    const returnInputs = { mainPlayerName, game_id };

                    function startGame(e) {
                        e.preventDefault();

                        for (const [key, value] of Object.entries(gameInputs)) {
                            if (value === null || value === '') {
                                context.updateQuestionErrors(
                                    `${key} is missing and is required.`
                                );
                            }
                        }
                        if (mainPlayerName !== '') {
                            GameApiService.createGame(
                                route,
                                'Not Active',
                                mainPlayerName
                            )
                                .then((res) => {
                                    const {
                                        player_name,
                                        points,
                                        player_status,
                                        game_id,
                                        player_id,
                                    } = res;

                                    const playerUpdate = {
                                        players: {
                                            player_name: player_name,
                                            points: points,
                                            player_status: player_status,
                                            player_id: player_id,
                                        },
                                    };

                                    context.updatePlayersContext(playerUpdate);

                                    localStorage.setItem(
                                        'player_id',
                                        player_id
                                    );
                                    localStorage.setItem(
                                        'player_status',
                                        player_status
                                    );
                                    localStorage.setItem('round', 1);
                                    localStorage.setItem(
                                        'response_chosen',
                                        false
                                    );
                                    return game_id;
                                })
                                .then((game_id) => {
                                    context.updateContext({ game_id: game_id });
                                    route.push('/game/' + game_id);
                                });
                        }
                    }

                    function goToGame(e) {
                        const updateGameId = {
                            game_id: game_id,
                        };

                        context.updateContext(updateGameId);

                        for (const [key, value] of Object.entries(
                            returnInputs
                        )) {
                            if (value === null || value === '') {
                                context.updateQuestionErrors(
                                    `${key} is missing and is required.`
                                );
                            }
                        }

                        const gameUpdate = {};

                        if (mainPlayerName !== '' && game_id !== '') {
                            GameApiService.getGame(game_id)
                                .then((res) => {
                                    const { id, round } = res[0];

                                    GameApiService.getPlayers(id)
                                        .then((res) => {
                                            const playersFound = res.filter(
                                                (player) =>
                                                    player.player_name ===
                                                    mainPlayerName
                                            );

                                            if (playersFound.length === 0) {
                                                GameApiService.addPlayer(
                                                    mainPlayerName,
                                                    game_id
                                                ).then((response) => {
                                                    const newPlayerId =
                                                        response[0];

                                                    const player_status =
                                                        'Player';

                                                    localStorage.setItem(
                                                        'player_id',
                                                        newPlayerId
                                                    );
                                                    localStorage.setItem(
                                                        'player_status',
                                                        player_status
                                                    );
                                                    localStorage.setItem(
                                                        'round',
                                                        round
                                                    );
                                                    localStorage.setItem(
                                                        'response_chosen',
                                                        false
                                                    );
                                                });
                                            } else {
                                                GameApiService.getPlayers(
                                                    game_id
                                                )
                                                    .then((res) =>
                                                        res.filter(
                                                            (player) =>
                                                                player.player_name ===
                                                                mainPlayerName
                                                        )
                                                    )
                                                    .then((res) => {
                                                        localStorage.setItem(
                                                            'player_id',
                                                            res[0].id
                                                        );
                                                        localStorage.setItem(
                                                            'player_status',
                                                            res[0].player_status
                                                        );
                                                        localStorage.setItem(
                                                            'round',
                                                            round
                                                        );
                                                        localStorage.setItem(
                                                            'response_chosen',
                                                            false
                                                        );
                                                    })
                                                    .then(() => {
                                                        const judge = res.filter(
                                                            (player) =>
                                                                player.player_status ===
                                                                'Judge'
                                                        );
                                                        gameUpdate.current_judge =
                                                            judge[0].id;
                                                    })
                                                    .then(() => {
                                                        context.updateContext({
                                                            current_judge:
                                                                gameUpdate.current_judge,
                                                        });
                                                        context.updateContext({
                                                            game_id: game_id,
                                                        });
                                                    });
                                            }
                                        })
                                        .then((player) => {
                                            return player;
                                        })
                                        .catch((error) => console.log(error));

                                    return game_id;
                                })
                                .then((game_id) =>
                                    route.push('/game/' + game_id)
                                );
                        }
                    }

                    const updateGameId = (e) => {
                        this.setState({
                            game_id: e.target.value,
                        });
                    };

                    return (
                        <form className="questions-container">
                            <div className="name-question form-question">
                                <p className="question">What's your name?</p>
                                <input
                                    type="text"
                                    id="name-input"
                                    className="question-input"
                                    onChange={(e) => {
                                        context.updatePlayerName(e);
                                    }}
                                />
                            </div>
                            {context.newGame !== false ? (
                                <div className="session-question form-question"></div>
                            ) : (
                                <div className="session-question form-question">
                                    <p className="question">Session ID</p>
                                    <input
                                        type="text"
                                        id="session-input"
                                        className="question-input"
                                        onChange={(e) => {
                                            updateGameId(e);
                                        }}
                                    />
                                </div>
                            )}

                            <div className="error-message">
                                {context.errorMessage.map((message, i) => {
                                    return <p key={i}>{message}</p>;
                                })}
                            </div>
                            <button
                                type="submit"
                                className="submit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    context.newGame === false
                                        ? goToGame(this.state.game_id)
                                        : startGame(e);
                                }}
                            >
                                Submit
                            </button>
                        </form>
                    );
                }}
            </GameContext.Consumer>
        );
    }
}
