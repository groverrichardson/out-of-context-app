import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/out-of-context-wordmark-blue.svg';
import { GameContext } from '../../game-context';
import LinesTopLeft from '../../assets/lines-top-left.svg';
import LinesBottomRight from '../../assets/lines-bottom-right.svg';

export default class LandingPage extends React.Component {
    render() {
        return (
            <GameContext.Consumer>
                {(context) => {
                    const newGameKeyValue = {
                        newGame: false,
                    };
                    const updateNewGame = () => {
                        context.updateContext(newGameKeyValue);
                    };
                    return (
                        <div className="main-container">
                            <section className="logo-lines">
                                <img
                                    src={LinesTopLeft}
                                    alt="Background Lines"
                                    className="lines lines-top-left"
                                />
                                <img
                                    src={LinesBottomRight}
                                    alt="Background Lines"
                                    className="lines lines-bottom-right"
                                />
                            </section>
                            <img
                                src={Logo}
                                alt="Out of Context logo"
                                className="logo"
                            />
                            <div className="start-menu">
                                <Link to={'/questions'} className="new">
                                    New Game
                                </Link>
                                <Link
                                    to={'/questions'}
                                    className="returning"
                                    onClick={updateNewGame}
                                >
                                    Join Game
                                </Link>
                            </div>
                        </div>
                    );
                }}
            </GameContext.Consumer>
        );
    }
}
