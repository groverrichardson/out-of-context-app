import React from "react";
import { Link } from "react-router-dom";

export default function QuestionsPage() {
    return (
        <div class="questions-container">
            <div class="name-question form-question">
                <p class="question">What's your name?</p>
                <input type="text" id="name-input" class="question-input" />
            </div>
            <div class="session-question form-question">
                <p class="question">Name your session</p>
                <input type="text" id="session-input" class="question-input" />
            </div>
            <Link to="/game" class="submit">
                Submit
            </Link>
        </div>
    );
}
