import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/7888-loader-gray-inline.json";

export default function LoadingPage() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className="loading-container">
            <h1 className="loading-header">Loading</h1>
            <Lottie options={defaultOptions} height={50} width={50} />
        </div>
    );
}
