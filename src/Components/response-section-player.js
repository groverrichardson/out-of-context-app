import React from 'react';
import GameApiService from '../services/game_api_service';

export default class ResponseSectionPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            answerSubmitted: false,
        };
    }

    render() {
        const updateAnswer = (e) => {
            this.setState({
                answer: e.target.value,
            });
        };

        const round = localStorage.getItem('round');
        const game_id = window.location.pathname.split('/')[3];
        const player_id = localStorage.getItem('player_id');

        return (
            <div className="player-view">
                {this.state.answerSubmitted === false ? (
                    <div className="answer-submit">
                        <h3 className="answer-submit-header">
                            Submit your response
                        </h3>
                        <textarea
                            placeholder="Type your answer here"
                            className="player-answer"
                            onChange={(e) => {
                                updateAnswer(e);
                            }}
                        ></textarea>
                        <button
                            className="answer-submit-button"
                            onClick={(e) => {
                                GameApiService.addAnswer(
                                    round,
                                    game_id,
                                    player_id,
                                    this.state.answer
                                );
                                this.setState({
                                    answerSubmitted: true,
                                });
                            }}
                        >
                            Submit Answer
                        </button>
                    </div>
                ) : (
                    <h3 className="answer-confirmation">
                        Answer submitted. Please wait for judge...
                    </h3>
                )}
            </div>
        );
    }
}
