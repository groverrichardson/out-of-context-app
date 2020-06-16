import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/Logo.png";

export default function LandingPage() {
    return (
        <div class="main-container">
            <img src={img} alt="Out of Context logo" class="logo" />
            <div class="start-menu">
                <Link to={"/questions"} class="new">
                    New Game
                </Link>
                <Link to={"/questions"} class="returning">
                    Join Existing Game
                </Link>
                <Link to={"/questions"} class="how-to-play">
                    How to Play
                </Link>
            </div>
        </div>
    );
}
