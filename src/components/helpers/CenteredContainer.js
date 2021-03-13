import React from "react";
import Background from "../../assets/images/backgroundSky.jpg";

export default function CenteredContainer({ children, className }) {
    return (
        <div
            className={`d-flex justify-content-center align-items-center ${className}`}
            style={{
                minHeight: "100vh",
                maxWidth: "100vw",
                backgroundImage: `url(${Background})`,
            }}
        >
            <div style={{ minWidth: "500px" }}>{children}</div>
        </div>
    );
}
