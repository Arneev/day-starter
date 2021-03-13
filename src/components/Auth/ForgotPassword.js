import React, { useRef, useState } from "react";
import CenteredContainer from "../helpers/CenteredContainer";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    const emailRef = useRef();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const { resetPassword } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);

        try {
            await resetPassword(emailRef.current.value);
            setLoading(false);
            setSuccess(true);
        } catch (e) {
            setError("Problem reseting password, please try again");
            setLoading(false);
            setSuccess(false);
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
                        Reset Password
                    </h2>
                    {success && !error && (
                        <Alert variant="success">Check your email :)</Alert>
                    )}
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

                        <Button
                            className="w-100"
                            type="submit"
                            disabled={loading}
                        >
                            Reset Password
                        </Button>
                    </Form>
                    <div className="text-center mt-4">
                        Remembered your password? <Link to="/login">Login</Link>
                    </div>
                </Card.Body>
            </Card>
        </CenteredContainer>
    );
}
