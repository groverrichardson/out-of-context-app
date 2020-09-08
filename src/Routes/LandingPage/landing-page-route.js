import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/Logo.png';
import { GameContext } from '../../game-context';

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
                            <img
                                src={img}
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
                                    Join Existing Game
                                </Link>
                                <Link to={'/questions'} className="how-to-play">
                                    How to Play
                                </Link>
                            </div>
                        </div>
                    );
                }}
            </GameContext.Consumer>
        );
    }
}
