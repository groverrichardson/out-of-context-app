import React, { Component, createContext } from 'react';
import { Redirect } from 'react-router-dom';
import GameApiService from './services/game_api_service';

export const GameContext = createContext();

class GameContextProvider extends Component {
    constructor() {
        super();
        this.state = {
            mainPlayerName: '',
            players: [],
            sessionName: '',
            questionError: false,
            errorMessage: [],
            scoreboardVisible: false,
            buttonText: true,
            activeView: 'Player',
            game_id: '',
            newGame: true,
            current_judge: '',
        };
    }

    updateContext = (newUpdate) => {
        const key = Object.keys(newUpdate);
        const value = Object.values(newUpdate);

        this.setState({
            [key[0]]: value[0],
        });
        console.log(this.state);
    };

    updatePlayersContext = (newUpdate) => {
        const key = Object.keys(newUpdate);
        const value = Object.values(newUpdate);

        this.setState({
            [key[0]]: [...this.state.players, value[0]],
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

    updateGameId = (e) => {
        this.setState({
            game_id: e.target.value,
        });
    };

    displayErrors = () => {
        if (
            this.state.errorMessage !== null ||
            this.state.errorMessage !== ['']
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
                    updatePlayersContext: this.updatePlayersContext,
                    updateGameId: this.updateGameId,
                }}
            >
                {this.props.children}
            </GameContext.Provider>
        );
    }
}

export default GameContextProvider;
