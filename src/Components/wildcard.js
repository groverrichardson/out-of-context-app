import React from "react";

const Wildcard = () => {
    return (
        <div className="wildcard-container">
            <h3 className="active-wildcard-header">Active Wildcard</h3>
            <div className="wildcard">
                <p className="wildcard-text">
                    You arrive at the Emergency room, they ask why you’re here.
                    You calmly say…
                </p>
            </div>
            <button className="claim-button">Claim</button>
        </div>
    );
};

export default Wildcard;
