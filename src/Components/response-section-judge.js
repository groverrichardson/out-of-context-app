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
                            <section className="invitation">
                                <h2 className="session-id-header">
                                    Invite your friends!
                                </h2>
                                <p className="session-id">
                                    Your session ID is:{' '}
                                    {window.location.pathname.split('/')[2]}
                                </p>
                            </section>
                        </div>
                    );
                }}
            </GameContext.Consumer>
        );
    }
}
