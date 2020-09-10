import React from 'react';
import Responses from './responses';
import { GameContext } from '../game-context';

export default class ResponseSection extends React.Component {
    render() {
        return (
            <GameContext.Consumer>
                {(context) => {
                    return (
                        <div className="player-message-section">
                            <Responses context={context} />
                        </div>
                    );
                }}
            </GameContext.Consumer>
        );
    }
}
