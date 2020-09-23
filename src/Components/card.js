import React from 'react';
import { GameContext } from '../game-context';

export default class Card extends React.Component {
    componentDidMount() {
        const checkForUpdate = () => {
            setInterval(() => {
                this.setLocalStorage();
            }, 3000);
        };

        checkForUpdate();
    }

    componentWillUnmount() {
        clearInterval(this.setLocalStorage);
    }

    setLocalStorage() {
        if (this.props.context.current_judge) {
            if (
                parseInt(localStorage.getItem('player_id')) ===
                this.props.context.current_judge[0].id
            ) {
                localStorage.setItem('player_status', 'Judge');
            } else {
                localStorage.setItem('player_status', 'Player');
            }
        }
    }

    displayCardText() {
        if (this.props.context.active_card) {
            return (
                <p className="card-text">
                    {this.props.context.active_card.card_copy}
                </p>
            );
        }
    }

    displayJudgeName() {
        let judge = this.props.context.current_judge[0];
        if (judge) {
            return <p className="turn-text">{judge.player_name}'s Turn</p>;
        }
    }

    render() {
        return (
            <GameContext.Consumer>
                {(context) => {
                    const updateTurn = () => {
                        if (context.activeView === 'Player') {
                            return this.displayJudgeName();
                        } else {
                            return <p className="turn-text">Your Turn</p>;
                        }
                    };
                    return (
                        <div className="card">
                            <div className="card-outline"></div>
                            <div className="turn-container">{updateTurn()}</div>
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
