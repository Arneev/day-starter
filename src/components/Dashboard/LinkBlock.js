import React from "react";
import { Card, Button } from "react-bootstrap";

export default function LinkBlock({ url, delUrl }) {
    return (
        <div className="d-flex justify-content-center my-3">
            <Card
                className="d-flex justify-content-center"
                style={{
                    maxWidth: "80vw",
                    minWidth: "800px",
                    backgroundColor: "rgba(255, 255, 0,0.3)",
                }}
            >
                <Card.Body className="d-flex flex-direction-row justify-content-between">
                    <div className="mr-3 ml-5 text-white">{url}</div>
                    <Button
                        variant="danger p-1 mr-3"
                        onClick={delUrl}
                        style={{ float: "right" }}
                    >
                        Delete
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}
