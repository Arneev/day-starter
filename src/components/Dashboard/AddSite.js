import React from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";

export default function AddSite({
    handleSubmit,
    urlComponentRef,
    error,
    loading,
}) {
    return (
        <>
            <div className="my-4 mx-2" />
            <div id="home">
                <div className="w-100 d-flex justify-content-center">
                    <Card style={{ maxWidth: "80vw", minWidth: "800px" }}>
                        <Card.Body>
                            <h2
                                style={{ fontSize: "40px" }}
                                className="text-center mb-3"
                            >
                                Add Site
                            </h2>

                            {error && (
                                <div className="d-flex justify-content-center align-items-center">
                                    <Alert
                                        variant="danger"
                                        className="mb-3"
                                        style={{
                                            overflowWrap: "break-word",
                                        }}
                                    >
                                        {error}
                                    </Alert>
                                </div>
                            )}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="add-url">
                                    <Form.Control
                                        type="text"
                                        ref={urlComponentRef}
                                    />
                                </Form.Group>
                                <Button
                                    type="submit"
                                    className="w-100"
                                    variant="success"
                                    disabled={loading}
                                >
                                    Add URL
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}
