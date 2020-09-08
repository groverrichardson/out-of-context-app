import React from "react";
import Card from "../Components/card";
import { GameContext } from "../game-context";

class CardWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            threadCount: null,
            messageCount: null,
        };
    }

    componentDidMount() {
        fetch(
            `http://localhost:8000/active-card/${localStorage.getItem(
                "game_id"
            )}`
        )
            .then((cardData) => cardData.json())
            .then((cardData) =>
                fetch(
                    `http://localhost:8000/card/${cardData[0].active_card}`
                ).then((cardInfo) =>
                    cardInfo.json().then((cardInfo) =>
                        this.setState({
                            threadCount: cardInfo[0].thread_count,
                            messageCount: cardInfo[0].card_count,
                        })
                    )
                )
            );
    }

    displayThreadCount() {
        return <p className="thread-count">Thread: {this.state.threadCount}</p>;
    }

    displayMessageCount() {
        return (
            <p className="message-count">Message: {this.state.messageCount}</p>
        );
    }

    render() {
        return (
            <GameContext.Consumer>
                {(context) => {
                    return (
                        <div className="card-container">
                            <Card context={context} />
                            <div className="details-container">
                                <div className="counts-container">
                                    {this.displayThreadCount()}
                                    {this.displayMessageCount()}
                                </div>
                                <p className="timer">30 Seconds Left</p>
                            </div>
                        </div>
                    );
                }}
            </GameContext.Consumer>
        );
    }
}

export default CardWindow;
