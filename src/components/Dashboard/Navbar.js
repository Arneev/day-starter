import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function NavbarComponent() {
    const { signOut } = useAuth();
    const history = useHistory();

    function goToAbout() {
        history.push("/about");
    }

    function SignOutApp() {
        signOut();
        history.push("/login");
    }

    function hoverEffectBlack(e) {
        e.target.style.color = "black";
        e.target.style.transition = "color 500ms";
    }

    // function hoverEffectGrey(e) {
    //     e.target.style.color = "grey";
    //     e.target.style.transition = "color 500ms";
    // }

    function hoverLeave(e) {
        e.target.style.color = "white";
    }

    return (
        <Navbar className="bg-success pb-3">
            <Navbar.Brand
                onMouseEnter={hoverEffectBlack}
                onMouseLeave={hoverLeave}
                href="#home"
                className="fancyFont ml-5"
                style={{ fontSize: "40px", color: "white" }}
            >
                Day Boost
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="mr-auto d-flex justify-content-around w-100">
                    <Nav.Link
                        href="#home"
                        onMouseEnter={hoverEffectBlack}
                        onMouseLeave={hoverLeave}
                        style={{ color: "white" }}
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link
                        onClick={goToAbout}
                        onMouseEnter={hoverEffectBlack}
                        onMouseLeave={hoverLeave}
                        style={{ color: "white" }}
                    >
                        About
                    </Nav.Link>
                    <Nav.Link
                        onClick={SignOutApp}
                        onMouseEnter={hoverEffectBlack}
                        onMouseLeave={hoverLeave}
                        style={{ color: "white" }}
                    >
                        Sign Out
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
