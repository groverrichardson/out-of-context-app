import React from 'react';
import GameApiService from '../services/game_api_service';

export default class ResponseSectionPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
        };
    }

    render() {
        const updateAnswer = (e) => {
            this.setState({
                answer: e.target.value,
            });
        };

        const round = localStorage.getItem('round');
        const game_id = window.location.pathname.split('/')[2];
        const player_id = localStorage.getItem('player_id');

        return (
            <div className="player-view">
                {this.props.context.answerSubmitted === 'false' ? (
                    <form
                        className="answer-submit"
                        onSubmit={(e) => {
                            e.preventDefault();
                            GameApiService.addAnswer(
                                round,
                                game_id,
                                player_id,
                                this.state.answer
                            );
                            GameApiService.updatePlayerStatus(
                                player_id,
                                'Player',
                                'true'
                            );
                        }}
                    >
                        <h2 className="answer-submit-header">
                            Submit your response
                        </h2>
                        <textarea
                            type="input"
                            placeholder="Type your answer here"
                            className="player-answer"
                            onChange={(e) => {
                                updateAnswer(e);
                            }}
                        ></textarea>
                        <button type="submit" className="answer-submit-button">
                            Submit Answer
                        </button>
                    </form>
                ) : (
                    <h2 className="answer-confirmation">
                        Answer submitted. Please wait for judge
                    </h2>
                )}
            </div>
        );
    }
}
