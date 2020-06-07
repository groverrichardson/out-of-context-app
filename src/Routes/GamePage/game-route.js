import React from "react";

export default function GamePage() {
    return (
        <div class="game-page-container">
            <div class="main-container">
                <div class="dashboard">
                    <div class="scoreboard-container">
                        <div class="scoreboard">
                            <h1 class="scoreboard-header">Scoreboard</h1>
                            <div class="players">
                                <div class="player-container">
                                    <p class="player-name">Tressa</p>
                                    <p class="playerscore">3</p>
                                </div>
                                <div class="player-container">
                                    <p class="player-name">Tressa</p>
                                    <p class="playerscore">3</p>
                                </div>
                                <div class="player-container">
                                    <p class="player-name">Tressa</p>
                                    <p class="playerscore">3</p>
                                </div>
                                <div class="player-container">
                                    <p class="player-name">Tressa</p>
                                    <p class="playerscore">3</p>
                                </div>
                                <div class="player-container">
                                    <p class="player-name">Tressa</p>
                                    <p class="playerscore">3</p>
                                </div>
                                <div class="player-container">
                                    <p class="player-name">Tressa</p>
                                    <p class="playerscore">3</p>
                                </div>
                                <div class="player-container">
                                    <p class="player-name">Tressa</p>
                                    <p class="playerscore">3</p>
                                </div>
                                <div class="player-container">
                                    <p class="player-name">Tressa</p>
                                    <p class="playerscore">3</p>
                                </div>
                            </div>
                        </div>
                        <button class="edit-button">Edit</button>
                    </div>
                    <button class="claim-wildcard">Claim Wildcard</button>
                    <div class="card-container">
                        <div class="card">
                            <div class="turn-container">
                                <p class="turn-text">Your turn</p>
                            </div>
                            <div class="text-container">
                                <p class="card-text">
                                    You arrive at the Emergency room, they ask
                                    why you're here. You calmly say...
                                </p>
                            </div>
                        </div>
                        <div class="details-container">
                            <div class="counts-container">
                                <p class="thread-count">Thread: 11</p>
                                <p class="message-count">Message: 3</p>
                            </div>
                            <p class="timer">30 Seconds Left</p>
                        </div>
                    </div>
                    <div class="wildcard-container">
                        <h3 class="active-wildcard-header">Active Wildcard</h3>
                        <div class="wildcard">
                            <p class="wildcard-text">
                                You arrive at the Emergency room, they ask why
                                you’re here. You calmly say…
                            </p>
                        </div>
                        <button class="claim-button">Claim</button>
                    </div>
                </div>
                <div class="player-responses-container">
                    <h1 class="player-responses-header">Player Responses</h1>
                    <h2 class="favorite-response">
                        Choose your favorite response
                    </h2>
                    <div class="responses">
                        <div class="response">
                            Sed posuere consectetur est at lobortis. Sed posuere
                            consectetur est at lobortis. Etiam porta sem
                            malesuada magna mollis euismod. Integer posuere erat
                            a ante venenatis dapibus posuere velit aliquet.
                            Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </div>
                        <div class="response">
                            Nulla vitae elit libero, a pharetra augue. Donec sed
                            odio dui.
                        </div>
                        <div class="response">
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Vivamus sagittis lacus vel augue
                            laoreet rutrum faucibus dolor auctor. Cras justo
                            odio, dapibus ac facilisis in, egestas eget quam.
                        </div>
                        <div class="response">
                            Sed posuere consectetur est at lobortis. Sed posuere
                            consectetur est at lobortis. Etiam porta sem
                            malesuada magna mollis euismod. Integer posuere erat
                            a ante venenatis dapibus posuere velit aliquet.
                            Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </div>
                        <div class="response">
                            Sed posuere consectetur est at lobortis. Sed posuere
                            consectetur est at lobortis. Etiam porta sem
                            malesuada magna mollis euismod. Integer posuere erat
                            a ante venenatis dapibus posuere velit aliquet.
                            Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </div>
                        <div class="response">
                            Sed posuere consectetur est at lobortis. Sed posuere
                            consectetur est at lobortis. Etiam porta sem
                            malesuada magna mollis euismod. Integer posuere erat
                            a ante venenatis dapibus posuere velit aliquet.
                            Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </div>
                        <div class="response">
                            Sed posuere consectetur est at lobortis. Sed posuere
                            consectetur est at lobortis. Etiam porta sem
                            malesuada magna mollis euismod. Integer posuere erat
                            a ante venenatis dapibus posuere velit aliquet.
                            Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </div>
                    </div>
                </div>
            </div>
            <div class="player-responses"></div>
        </div>
    );
}
