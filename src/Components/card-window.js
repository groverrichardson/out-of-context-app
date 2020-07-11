import React from "react";
import Card from "../Components/card";
import { GameContext } from "../game-context";

class CardWindow extends React.Component {
    render() {
        return (
            <GameContext.Consumer>
                {(context) => {
                    return (
                        <div className="card-container">
                            <Card />
                            <div className="details-container">
                                <div className="counts-container">
                                    <p className="thread-count">Thread: 11</p>
                                    <p className="message-count">Message: 3</p>
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
