import React from "react";
import MessageBoard from "./message-board";
import Responses from "./responses";

const ResponseSection = () => {
    return (
        <div className="player-message-section">
            <Responses />
            <MessageBoard />
        </div>
    );
};

export default ResponseSection;
