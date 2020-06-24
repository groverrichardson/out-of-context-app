import React from "react";
import { Link } from "react-router-dom";
import GameContext from "../../game-context";
// import GameApiService from "../../services/game_api_service";

export default class QuestionsPage extends React.Component {
    static contextType = GameContext;

    render() {
        this.context.updateContext = () => {
            this.setState({
                gameId: "1",
            });
            console.log(this.context.gameId);
        };
        return (
            <div className="questions-container">
                <div className="name-question form-question">
                    <p className="question">What's your name?</p>
                    <input
                        type="text"
                        id="name-input"
                        className="question-input"
                    />
                </div>
                <div className="session-question form-question">
                    <p className="question">Name your session</p>
                    <input
                        type="text"
                        id="session-input"
                        className="question-input"
                    />
                </div>
                <Link
                    to="/game"
                    onClick={this.context.updateContext}
                    className="submit"
                >
                    Submit
                </Link>
            </div>
        );
    }
}
