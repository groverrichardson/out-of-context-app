const GameApiService = {
    createGame(route, game_status, game_name, player_name) {
        const createGameOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `https://quiet-journey-02794.herokuapp.com/create-game?game_status=${game_status}&game_name=${game_name}&player_name=${player_name}`,
            createGameOptions
        ).then((res) => {
            return res.json();
        });
    },

    getGame(game_id) {
        const createGameOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `https://quiet-journey-02794.herokuapp.com/game?id=${game_id}`,
            createGameOptions
        ).then((res) => {
            return res.json();
        });
    },

    getPlayers(game_id) {
        const createOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `https://quiet-journey-02794.herokuapp.com/players?game_id=${game_id}`,
            createOptions
        ).then((res) => {
            return res.json();
        });
    },

    addPlayer(player_name, game_id) {
        const createOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `https://quiet-journey-02794.herokuapp.com/players?player_name=${player_name}&points=0&player_status=Player&game_id=${game_id}`,
            createOptions
        ).then((res) => {
            return res.json();
        });
    },

    getActiveCard() {
        const Options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `https://quiet-journey-02794.herokuapp.com/active-card/${
                window.location.pathname.split('/')[3]
            }`,
            Options
        )
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return res[0].active_card;
            });
    },

    getCardInfo(card_id) {
        const Options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `https://quiet-journey-02794.herokuapp.com/card/${card_id}`,
            Options
        ).then((cardInfo) => {
            return cardInfo.json();
        });
    },

    addAnswer(round, game_id, player_id, answer) {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `https://quiet-journey-02794.herokuapp.com/answers?round=${round}&game_id=${game_id}&player_id=${player_id}&answer=${answer}`,
            Options
        ).then((res) => {
            return res.json();
        });
    },

    getAnswers(round, game_id) {
        const Options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `https://quiet-journey-02794.herokuapp.com/answers?round=${round}&game_id=${game_id}`,
            Options
        ).then((res) => {
            return res.json();
        });
    },

    updatePoints(player_id, points) {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `https://quiet-journey-02794.herokuapp.com/players/${player_id}?points=${points}`,
            Options
        ).then((res) => {
            return res.json();
        });
    },

    updateGame(game_id, round) {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `https://quiet-journey-02794.herokuapp.com/game/${game_id}?round=${round}`,
            Options
        ).then((res) => {
            return res.json();
        });
    },

    updateActiveCard(game_id, active_card) {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `https://quiet-journey-02794.herokuapp.com/game/${game_id}?active_card=${active_card}`,
            Options
        ).then((res) => {
            return res.json();
        });
    },

    updatePlayerStatus(player_id, player_status) {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `https://quiet-journey-02794.herokuapp.com/players/${player_id}?player_status=${player_status}`,
            Options
        ).then((res) => {
            return res.json();
        });
    },

    getAllCards() {
        const Options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `https://quiet-journey-02794.herokuapp.com/card`,
            Options
        ).then((res) => {
            return res.json();
        });
    },

    getCardsPlayed(game_id) {
        const Options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `https://quiet-journey-02794.herokuapp.com/game?id=${game_id}`,
            Options
        )
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return res[0].cards_played;
            });
    },

    updateCardsPlayed(game_id, cards_played) {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `https://quiet-journey-02794.herokuapp.com/game/${game_id}?cards_played=${cards_played}`,
            Options
        ).then((res) => {
            return res.json();
        });
    },
};

export default GameApiService;
