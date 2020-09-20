import config from '../config';

const GameApiService = {
    createGame(route, game_status, player_name) {
        const createGameOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `${config.API_ENDPOINT}/create-game?game_status=${game_status}&player_name=${player_name}`,
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
            `${config.API_ENDPOINT}/game?id=${game_id}`,
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
            `${config.API_ENDPOINT}/players?game_id=${game_id}`,
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
            `${config.API_ENDPOINT}/players?player_name=${player_name}&points=0&player_status=Player&game_id=${game_id}&answer_submitted=false`,
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
            `${config.API_ENDPOINT}/active-card/${
                window.location.pathname.split('/')[2]
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
        return fetch(`${config.API_ENDPOINT}/card/${card_id}`, Options).then(
            (cardInfo) => {
                return cardInfo.json();
            }
        );
    },

    addAnswer(round, game_id, player_id, answer) {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `${config.API_ENDPOINT}/answers?round=${round}&game_id=${game_id}&player_id=${player_id}&answer=${answer}`,
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
            `${config.API_ENDPOINT}/answers?round=${round}&game_id=${game_id}`,
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
            `${config.API_ENDPOINT}/players/${player_id}?points=${points}`,
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
            `${config.API_ENDPOINT}/game/${game_id}?round=${round}`,
            Options
        ).then((res) => {
            return res.json();
        });
    },

    updateGameStatus(game_id, game_status) {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `${config.API_ENDPOINT}/game/${game_id}?game_status=${game_status}`,
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
            `${config.API_ENDPOINT}/game/${game_id}?active_card=${active_card}`,
            Options
        ).then((res) => {
            return res.json();
        });
    },

    updatePlayerStatus(player_id, player_status, answer_submitted) {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `${config.API_ENDPOINT}/players/${player_id}?answer_submitted=${answer_submitted}&player_status=${player_status}`,
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
        return fetch(`${config.API_ENDPOINT}/card`, Options).then((res) => {
            return res.json();
        });
    },

    getCardsPlayed(game_id) {
        const Options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(`${config.API_ENDPOINT}/game?id=${game_id}`, Options).then(
            (res) => {
                return res.json();
            }
        );
    },

    updateCardsPlayed(game_id, cards_played) {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `${config.API_ENDPOINT}/game/${game_id}?cards_played=${cards_played}`,
            Options
        ).then((res) => {
            return res.json();
        });
    },

    getDashboard(game_id) {
        const Options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `${config.API_ENDPOINT}/dashboard?game_id=${game_id}`,
            Options
        ).then((res) => {
            return res.json();
        });
    },

    getResponses(round, game_id) {
        const Options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `${config.API_ENDPOINT}/answers?game_id=${game_id}&round=${round}`,
            Options
        ).then((res) => {
            return res.json();
        });
    },
};

export default GameApiService;
