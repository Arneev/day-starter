import React, { useRef, useState } from "react";
import CenteredContainer from "../helpers/CenteredContainer";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const { signUp } = useAuth();

    async function handleSubmit(e) {
        setLoading(true);
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            await signUp(emailRef.current.value, passwordRef.current.value);
            setLoading(false);
            history.push("/");
        } catch (e) {
            setError("Problem creating account, please try again");
            setLoading(false);
        }
    }

    return (
        <CenteredContainer>
            <Card>
                <Card.Body>
                    <h2
                        style={{ fontSize: "60px" }}
                        className="text-center mb-3"
                    >
                        Sign Up
                    </h2>
                    {error && (
                        <Alert variant="danger" className="mt-5">
                            {error}
                        </Alert>
                    )}
                    <Form onSubmit={handleSubmit}>
                        <div className="my-4">
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    ref={emailRef}
                                    required
                                ></Form.Control>
                            </Form.Group>
                        </div>
                        <div className="my-4">
                            <Form.Group id="Password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    ref={passwordRef}
                                    required
                                ></Form.Control>
                            </Form.Group>
                        </div>
                        <div className="my-4">
                            <Form.Group id="confirm-password">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    ref={passwordConfirmRef}
                                    required
                                ></Form.Control>
                            </Form.Group>
                        </div>
                        <Button
                            className="w-100"
                            type="submit"
                            disabled={loading}
                        >
                            Sign Up
                        </Button>
                    </Form>
                    <div className="text-center mt-4">
                        Already have an account? <Link to="/login">Log in</Link>
                    </div>
                </Card.Body>
            </Card>
        </CenteredContainer>
    );
}
