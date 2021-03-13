import React from "react";

export default function BoostButton({ openUrls }) {
    function onButtonEnter(e) {
        e.target.style.backgroundColor = "green";
    }

    function onButtonLeave(e) {
        e.target.style.backgroundColor = "rgb(40, 167, 69)";
    }

    return (
        <>
            <div className="my-4 w-100 d-flex justify-content-center">
                <div
                    className="d-flex justify-content-center align-items-center "
                    style={{
                        width: "10vw",
                        height: "10vw",
                        borderRadius: "5vw",
                        color: "white",
                        textAlign: "center",
                        fontSize: "2vw",
                        backgroundColor: "rgb(40, 167, 69)",
                        transition: "all 1s",
                    }}
                    onMouseEnter={onButtonEnter}
                    onMouseLeave={onButtonLeave}
                    onClick={openUrls}
                    id="openLinks"
                >
                    BOOST
                </div>
            </div>
        </>
    );
}
