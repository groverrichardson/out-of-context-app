const GameApiService = {
    createGame(route, game_status, game_name, player_name) {
        const createGameOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        };
        return fetch(
            `http://localhost:8000/create-game?game_status=${game_status}&game_name=${game_name}&player_name=${player_name}`,
            createGameOptions
        ).then((res) => {
            return res.json();
        });
    },
};

export default GameApiService;
