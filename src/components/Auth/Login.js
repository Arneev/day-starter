import React, { useRef, useState } from "react";
import CenteredContainer from "../helpers/CenteredContainer";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [error, setError] = useState("");
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();

    async function handleSubmit(e) {
        setLoading(true);
        e.preventDefault();

        try {
            await login(emailRef.current.value, passwordRef.current.value);
            setLoading(false);
            history.push("/");
        } catch (e) {
            setError("Problem logging in, please try again");
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
                        Login
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
                        <Button
                            className="w-100"
                            type="submit"
                            disabled={loading}
                        >
                            Login
                        </Button>
                    </Form>
                    <div className="text-center mt-4">
                        Don't have an account?{" "}
                        <Link to="/sign-up">Create one</Link>
                    </div>
                    <div className="text-center mt-3">
                        Forgot your password?{" "}
                        <Link to="/forgot-password">Reset Password</Link>
                    </div>
                </Card.Body>
            </Card>
        </CenteredContainer>
    );
}
