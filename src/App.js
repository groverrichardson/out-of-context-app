import React from "react";
import "../src/sass/style.sass";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Routes/LandingPage/landing-page-route";
import QuestionsPage from "./Routes/QuestionsPage/questions-route";
import NotFoundPage from "./Routes/NotFoundPage/not-found-route";
import GamePage from "./Routes/GamePage/game-route";

export default function App() {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/questions" component={QuestionsPage} />
            <Route path="/game" component={GamePage} />
            <Route component={NotFoundPage} />
        </Switch>
    );
}
