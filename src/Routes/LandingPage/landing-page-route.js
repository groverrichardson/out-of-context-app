import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div class="main-container">
            <img
                src="../assets/Logo.png"
                alt="Out of Context logo"
                class="logo"
            />
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
