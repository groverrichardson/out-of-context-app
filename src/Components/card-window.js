import React from 'react';
import Card from '../Components/card';
import { GameContext } from '../game-context';
import GameApiService from '../services/game_api_service';

class CardWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            threadCount: null,
            messageCount: null,
            game_id: window.location.pathname.split('/')[3],
        };
    }

    componentDidMount() {
        GameApiService.getActiveCard()
            .then((res) => GameApiService.getCardInfo(res))
            .then((cardInfo) =>
                this.setState({
                    threadCount: cardInfo[0].thread_count,
                    messageCount: cardInfo[0].card_count,
                })
            );
    }

    displayThreadCount() {
        return <p className="thread-count">Thread: {this.state.threadCount}</p>;
    }

    displayMessageCount() {
        return (
            <p className="message-count">Message: {this.state.messageCount}</p>
        );
    }

    render() {
        return (
            <GameContext.Consumer>
                {(context) => {
                    return (
                        <div className="card-container">
                            <Card context={context} />
                            <div className="details-container">
                                <div className="counts-container">
                                    {this.displayThreadCount()}
                                    {this.displayMessageCount()}
                                </div>
                            </div>
                        </div>
                    );
                }}
            </GameContext.Consumer>
        );
    }
}

export default CardWindow;
