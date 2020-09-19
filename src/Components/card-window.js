import React from 'react';
import Card from '../Components/card';
import { GameContext } from '../game-context';

class CardWindow extends React.Component {
    displayThreadCount() {
        if (this.props.context.active_card) {
            return (
                <p className="thread-count">
                    Thread: {this.props.context.active_card.thread_count}
                </p>
            );
        }
    }
    displayMessageCount() {
        if (this.props.context.active_card) {
            return (
                <p className="message-count">
                    Message: {this.props.context.active_card.message_count}
                </p>
            );
        }
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
