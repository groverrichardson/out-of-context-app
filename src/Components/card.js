import React from "react";
import { GameContext } from "../game-context";

export default class Card extends React.Component {
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
                                <p className="card-text">
                                    You arrive at the Emergency room, they ask
                                    why you're here. You calmly say...
                                </p>
                            </div>
                        </div>
                    );
                }}
            </GameContext.Consumer>
        );
    }
}
