import React from "react";

export default function Card() {
    return (
        <div className="card">
            <div className="turn-container">
                <p className="turn-text">Your turn</p>
            </div>
            <div className="text-container">
                <p className="card-text">
                    You arrive at the Emergency room, they ask why you're here.
                    You calmly say...
                </p>
            </div>
        </div>
    );
}
