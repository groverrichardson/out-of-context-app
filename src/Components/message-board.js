import React from "react";
// import { Link } from "react-router-dom";

const MessageBoard = () => {
    return (
        <div className="message-board">
            <h3 className="message-board-header">Message Board</h3>
            <div className="message-viewport">
                <p className="message-sample">This is a message</p>
            </div>
            <textarea
                type="text"
                name="message-response"
                id="message-response"
            />
            <button className="submit-button">Send Message</button>
        </div>
    );
};

export default MessageBoard;
