import React from "react";

const GameContext = React.createContext({
    scoreboardVisible: true,
    buttonText: true,
    gameId: "0",
    updateContext: () => {},
});

export default GameContext;
