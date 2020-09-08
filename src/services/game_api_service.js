const GameApiService = {
    createGame(route, game_status, game_name, player_name) {
        const createGameOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        return fetch(
            `http://localhost:8000/create-game?game_status=${game_status}&game_name=${game_name}&player_name=${player_name}`,
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
            `http://localhost:8000/game?id=${game_id}`,
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
            `http://localhost:8000/players?game_id=${game_id}`,
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
            `http://localhost:8000/players?player_name=${player_name}&points=0&player_status=Player&game_id=${game_id}`,
            createOptions
        ).then((res) => {
            return res.json();
        });
    },
};

export default GameApiService;
