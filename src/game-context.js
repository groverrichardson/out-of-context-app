import React, { Component, createContext } from "react";
import { Redirect } from "react-router-dom";
import GameApiService from "./services/game_api_service";

export const GameContext = createContext();

class GameContextProvider extends Component {
    state = {
        mainPlayerName: "",
        players: [],
        sessionName: "",
        questionError: false,
        errorMessage: [],
        scoreboardVisible: false,
        buttonText: true,
        activeView: "Player",
    };

    updateContext = (newUpdate) => {
        const key = Object.keys(newUpdate);
        const value = Object.values(newUpdate);
        this.setState({
            [key]: value,
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

    displayErrors = () => {
        if (
            this.state.errorMessage !== null ||
            this.state.errorMessage !== [""]
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
                }}
            >
                {this.props.children}
            </GameContext.Provider>
        );
    }
}

export default GameContextProvider;
