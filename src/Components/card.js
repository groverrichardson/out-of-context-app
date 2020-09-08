import React from "react";
import { GameContext } from "../game-context";

export default class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            card: {
                cardCopy: "",
                thread: "",
                message: "",
            },
        };
    }

    componentDidMount() {
        fetch(
            `http://localhost:8000/dashboard?game_id=${localStorage.getItem(
                "game_id"
            )}`
        )
            .then((gameData) => gameData.json())
            .then((gameData) =>
                fetch(`http://localhost:8000/card/${gameData.active_card}`)
            )
            .then((cardData) => cardData.json())
            .then((cardData) => {
                this.setState({
                    card: {
                        cardCopy: cardData[0].card_copy,
                        thread: cardData[0].thread_count,
                        message: cardData[0].card_count,
                    },
                });
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
                        if (context.activeView === "Player") {
                            return <p className="turn-text">John Doe's Turn</p>;
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
