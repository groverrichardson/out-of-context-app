import React from "react";
import MessageBoard from "./message-board";
import Responses from "./responses";
import { Link } from "react-router-dom";

const ResponseSectionPlayer = () => {
    return (
        <div className="player-view">
            {/* <Responses /> */}
            <div className="answer-submit">
                <h3 className="answer-submit-header">Submit your response</h3>
                <textarea
                    placeholder="Type your answer here"
                    className="player-answer"
                ></textarea>
                <button className="answer-submit-button">Submit Answer</button>
            </div>
            <MessageBoard />
        </div>
    );
};

export default ResponseSectionPlayer;
