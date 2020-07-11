import React from "react";
import { GameContext } from "../../game-context";
import GameApiService from "../../services/game_api_service";

export default class QuestionsPage extends React.Component {
    render() {
        return (
            <GameContext.Consumer>
                {(context) => {
                    const route = this.props.history;
                    const mainPlayerName = context.mainPlayerName;
                    const sessionName = context.sessionName;
                    const gameInputs = { mainPlayerName, sessionName };

                    function startGame(e) {
                        e.preventDefault();
                        for (const [key, value] of Object.entries(gameInputs)) {
                            if (value === null || value === "") {
                                context.updateQuestionErrors(
                                    `${key} is missing and is required.`
                                );
                            }
                        }
                        if (mainPlayerName !== "" && sessionName !== "") {
                            GameApiService.createGame(
                                route,
                                "Active",
                                sessionName,
                                mainPlayerName
                            );
                        }
                    }

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
                            <div className="session-question form-question">
                                <p className="question">Name your session</p>
                                <input
                                    type="text"
                                    id="session-input"
                                    className="question-input"
                                    onChange={(e) => {
                                        context.updateSessionName(e);
                                    }}
                                />
                            </div>
                            <div className="error-message">
                                {context.errorMessage.map((message) => {
                                    return <p>{message}</p>;
                                })}
                            </div>
                            <button
                                type="submit"
                                className="submit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    startGame(e);
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
