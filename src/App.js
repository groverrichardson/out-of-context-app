import React from 'react';
import { Component } from 'react';
import '../src/sass/style.sass';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Routes/LandingPage/landing-page-route';
import QuestionsPage from './Routes/QuestionsPage/questions-route';
import NotFoundPage from './Routes/NotFoundPage/not-found-route';
import GamePage from './Routes/GamePage/game-route';
import GameContextProvider from './game-context';
import WaitingPage from './Routes/WaitingPage/waiting-route';

export default class App extends Component {
    render() {
        return (
            <GameContextProvider>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/questions" component={QuestionsPage} />
                    <Route path="/game/:gameName/" component={GamePage} />
                    <Route path="/waiting-room" component={WaitingPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </GameContextProvider>
        );
    }
}
