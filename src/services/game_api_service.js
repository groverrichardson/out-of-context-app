const GameApiService = {
    addGame(gameId) {
        const addOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        };
        return fetch(`http://localhost:8000/game/${gameId}`, addOptions)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    },
};

export default GameApiService;
