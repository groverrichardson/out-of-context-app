import React from 'react';
import GameApiService from '../services/game_api_service';

export default class Responses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            round: localStorage.getItem('round'),
            game_id: window.location.pathname.split('/')[3],
            responses: [],
            hover: '',
            response_chosen: false,
        };
    }

    componentDidMount() {
        const checkForUpdate = () => {
            setInterval(() => this.getAnswers(), 3000);
        };
        checkForUpdate();
    }

    getAnswers() {
        GameApiService.getAnswers(this.state.round, this.state.game_id)
            .then((responses) => {
                this.setState({
                    responses: responses,
                });
            })
            .then(this.displayResponses());
    }

    componentWillUnmount() {
        clearInterval(this.getAnswers);
        clearInterval(this.displayResponses);
    }

    displayResponses() {
        const filteredList = this.state.responses.filter(
            (response) => response.answer
        );

        const responseList = filteredList.map((response, i) => {
            return (
                <div
                    key={i}
                    id={i}
                    onMouseEnter={(e) => this.setState({ hover: e.target.id })}
                    className={
                        this.state.hover === i ? 'response hover' : 'response'
                    }
                    onClick={(e) => {
                        this.getPoints(response.player_id);
                        localStorage.setItem('response_chosen', true);
                        this.setState({ response_chosen: true });
                        this.nextRound();
                    }}
                >
                    {response.answer}
                </div>
            );
        });

        return <div>{responseList}</div>;
    }

    getPoints(player_id) {
        const player = this.props.context.players.filter(
            (player) => player.id === player_id
        );

        const points = (parseInt(player[0].points) + 1).toString();

        GameApiService.updatePoints(player_id, points);
    }

    nextRound() {
        const nextRound = (
            parseInt(localStorage.getItem('round')) + 1
        ).toString();
        GameApiService.updateGame(this.state.game_id, nextRound);

        GameApiService.getPlayers(this.state.game_id).then((players) => {
            const currentJudgeIndex = players.indexOf(
                players.filter((player) => player.player_status === 'Judge')[0]
            );
            if (currentJudgeIndex === players.length - 1) {
                players.forEach((player) => {
                    if (players.indexOf(player) === 0) {
                        GameApiService.updatePlayerStatus(player.id, 'Judge');
                    } else {
                        GameApiService.updatePlayerStatus(player.id, 'Player');
                    }
                });
            } else {
                players.forEach((player, i) => {
                    if (
                        currentJudgeIndex !== i &&
                        i === currentJudgeIndex + 1
                    ) {
                        GameApiService.updatePlayerStatus(player.id, 'Judge');
                    } else {
                        GameApiService.updatePlayerStatus(player.id, 'Player');
                    }
                });
            }
        });
    }

    render() {
        return (
            <div className="response-container">
                <h1 className="player-responses-header">Player Responses</h1>
                <h2 className="favorite-response">
                    Choose your favorite response
                </h2>
                {this.state.response_chosen === false ? (
                    <div className="responses">{this.displayResponses()}</div>
                ) : (
                    <div></div>
                )}
            </div>
        );
    }
}
