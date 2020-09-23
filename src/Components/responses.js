import React from 'react';
import GameApiService from '../services/game_api_service';

export default class Responses extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);

        this.state = {
            hover: '',
            response_chosen: false,
            update: 0,
        };
    }

    displayResponses() {
        let responses = this.props.context.responses;
        let players = this.props.context.players;

        if (responses && responses.length === players.length - 1) {
            const filteredList = responses.filter(
                (response) => response.answer
            );

            const responseList = filteredList.map((response, i) => {
                return (
                    <div
                        key={i}
                        id={i}
                        onMouseEnter={(e) =>
                            this.setState({ hover: e.target.id })
                        }
                        className={
                            this.state.hover === i
                                ? 'response hover'
                                : 'response'
                        }
                        onClick={(e) => {
                            this.getPoints(response.player_id);
                            localStorage.setItem('response_chosen', true);
                            this.setState({ response_chosen: true });
                            this.nextRound();
                        }}
                    >
                        {response.answer}
                    </div>
                );
            });

            return <div className="responses">{responseList}</div>;
        }
    }

    getPoints(player_id) {
        const player = this.props.context.players.filter(
            (player) => player.id === player_id
        );

        const points = (parseInt(player[0].points) + 1).toString();

        GameApiService.updatePoints(player_id, points);
    }

    nextRound() {
        const nextRound = (
            parseInt(localStorage.getItem('round')) + 1
        ).toString();

        this.pickNewCard();

        let players = this.props.context.players;
        let currentJudge = players.filter(
            (player) => player.player_status === 'Judge'
        );
        let currentJudgeIndex = players.indexOf(currentJudge[0]);
        let playerOneId = players[0].id;
        let newJudgeIndex = currentJudgeIndex + 1;

        if (currentJudgeIndex === players.length - 1) {
            players.forEach((player) => {
                if (player.id === playerOneId) {
                    GameApiService.updatePlayerStatus(
                        player.id,
                        'Judge',
                        'false'
                    );
                } else {
                    GameApiService.updatePlayerStatus(
                        player.id,
                        'Player',
                        'false'
                    );
                }
            });
        } else {
            players.forEach((player, index) => {
                if (index === newJudgeIndex) {
                    GameApiService.updatePlayerStatus(
                        player.id,
                        'Judge',
                        'false'
                    );
                } else {
                    GameApiService.updatePlayerStatus(
                        player.id,
                        'Player',
                        'false'
                    );
                }
            });
        }

        GameApiService.updateGame(this.props.context.game_id, nextRound);
        localStorage.setItem('round', nextRound);
    }

    pickNewCard() {
        GameApiService.getAllCards().then((cards) => {
            let cardsLength = cards.length;
            let randomNumber = Math.floor(
                Math.random() * Math.floor(cardsLength) + 1
            );
            let cardPicked = false;

            GameApiService.getCardsPlayed(this.props.context.game_id).then(
                (cardsPlayed) => {
                    let filteredCards = () =>
                        cardsPlayed.filter((card) => card === randomNumber);

                    let matchedCards = filteredCards();

                    while (cardPicked === false) {
                        if (matchedCards.length === 0) {
                            GameApiService.updateCardsPlayed(
                                this.props.context.game_id,
                                this.props.context.active_card
                            );
                            GameApiService.updateActiveCard(
                                this.props.context.game_id,
                                randomNumber
                            );
                            cardPicked = true;
                            localStorage.setItem('active_card', randomNumber);
                        } else {
                            randomNumber = Math.floor(
                                Math.random() * Math.floor(cardsLength) + 1
                            );
                            matchedCards = filteredCards();
                        }
                    }
                }
            );
        });
    }

    render() {
        return (
            <div className="response-container">
                <h2 className="player-responses-header">Player Responses</h2>
                {this.props.context.responses &&
                this.props.context.responses.length ===
                    this.props.context.players.length - 1 ? (
                    <h3 className="favorite-response">
                        Choose your favorite response
                    </h3>
                ) : (
                    <h3 className="favorite-response-ellipsis">
                        Waiting on responses from players
                    </h3>
                )}

                {this.state.response_chosen === false ? (
                    this.displayResponses()
                ) : (
                    <div></div>
                )}
            </div>
        );
    }
}
