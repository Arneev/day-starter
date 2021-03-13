import React from "react";
import { Button, Card } from "react-bootstrap";
import CenteredContainer from "../helpers/CenteredContainer";
import { useHistory } from "react-router-dom";

export default function About() {
    const history = useHistory();

    function goToHome() {
        history.push("/");
    }

    return (
        <CenteredContainer>
            <Card>
                <Card.Body>
                    <h2
                        style={{ fontSize: "60px" }}
                        className="text-center mb-3"
                    >
                        About
                    </h2>
                    <p
                        className="px-2 mx-1 py-1 text-center"
                        style={{ overflowWrap: "break-word", fontSize: "18px" }}
                    >
                        Meant to be a simple day starter site, opens up any
                        links you choose in a single click.
                    </p>
                    <p
                        className="px-2 py-1 mx-1 text-center"
                        style={{ overflowWrap: "break-word" }}
                    >
                        Enable "pop-up windows" for this site, otherwise only
                        one site will open up. <br />
                        You can do so by clicking on the item on the left of the
                        URL link. <br />
                        <br />
                        Images thanks to{" "}
                        <a
                            href="https://pixabay.com/users/nikondian-5969191/"
                            target="blank"
                        >
                            nikondian
                        </a>
                    </p>

                    <Button onClick={goToHome} className="m-1 w-100">
                        Home
                    </Button>
                </Card.Body>
            </Card>
        </CenteredContainer>
    );
}
