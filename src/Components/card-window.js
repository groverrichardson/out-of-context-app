import React from "react";
import Card from "../Components/card";

const CardWindow = (props) => {
    return (
        <div className="card-container">
            <Card state={props.state} />
            <div className="details-container">
                <div className="counts-container">
                    <p className="thread-count">Thread: 11</p>
                    <p className="message-count">Message: 3</p>
                </div>
                <p className="timer">30 Seconds Left</p>
            </div>
        </div>
    );
};

export default CardWindow;
