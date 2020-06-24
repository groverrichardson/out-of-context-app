import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/Logo.png";

export default function LandingPage() {
    return (
        <div className="main-container">
            <img src={img} alt="Out of Context logo" className="logo" />
            <div className="start-menu">
                <Link to={"/questions"} className="new">
                    New Game
                </Link>
                <Link to={"/questions"} className="returning">
                    Join Existing Game
                </Link>
                <Link to={"/questions"} className="how-to-play">
                    How to Play
                </Link>
            </div>
        </div>
    );
}
