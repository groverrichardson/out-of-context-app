import React from 'react';
import { GameContext } from '../game-context';
import GameApiService from '../services/game_api_service';

export default class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            card: {
                cardCopy: '',
            },
            game_id: window.location.pathname.split('/')[3],
            judge: '',
            judgeId: '',
        };
    }

    componentDidMount() {
        const checkForUpdate = () => {
            setInterval(() => {
                this.getPlayers();
                this.getActiveCard();
            }, 3000);
        };

        checkForUpdate();
    }

    componentWillUnmount() {
        clearInterval(this.getPlayers);
        clearInterval(this.getActiveCard);
    }

    getActiveCard() {
        GameApiService.getActiveCard().then((card_id) => {
            localStorage.setItem('active_card', card_id);
            GameApiService.getCardInfo(card_id).then((cardData) => {
                this.setState({
                    card: {
                        cardCopy: cardData[0].card_copy,
                    },
                });
            });
        });
    }

    getPlayers() {
        GameApiService.getPlayers(window.location.pathname.split('/')[3])
            .then((players) =>
                players.filter((player) => player.player_status === 'Judge')
            )
            .then((judge) => {
                this.setState({
                    judge: judge[0].player_name,
                    judgeId: judge[0].id,
                });
                return this.state.judgeId;
            })
            .then((id) => {
                if (parseInt(localStorage.getItem('player_id')) === id) {
                    localStorage.setItem('player_status', 'Judge');
                } else {
                    localStorage.setItem('player_status', 'Player');
                }
            });
    }

    displayCardText() {
        return <p className="card-text">{this.state.card.cardCopy}</p>;
    }

    render() {
        return (
            <GameContext.Consumer>
                {(context) => {
                    const updateTurn = () => {
                        if (context.activeView === 'Player') {
                            return (
                                <p className="turn-text">
                                    {this.state.judge}'s Turn
                                </p>
                            );
                        } else {
                            return <p className="turn-text">Your Turn</p>;
                        }
                    };
                    return (
                        <div className="card">
                            <div className="turn-container"></div>
                            {updateTurn()}
                            <div className="text-container">
                                {this.displayCardText()}
                            </div>
                        </div>
                    );
                }}
            </GameContext.Consumer>
        );
    }
}
