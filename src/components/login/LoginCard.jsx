import React, { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";

const LoginCard = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [validationMessage, setValidationMessage] = useState("");

    const handleSwitchForm = () => {
        setIsRegister(!isRegister);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setValidationMessage("");
    };

    const checkPasswordRules = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
        return regex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidationMessage("");

        if (isRegister && password !== confirmPassword) {
            setValidationMessage("Passwords do not match");
            return;
        }

        // Check password rules
        if (isRegister && !checkPasswordRules(password)) {
            setValidationMessage(
                "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a special character."
            );
            return;
        }

        console.log("Form submitted");
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "70vh",
                width: "100%",
            }}
        >
            <Card style={{ width: "500px" }}>
                <Card.Body>
                    <Card.Title>{isRegister ? "Register" : "Login"}</Card.Title>
                    {validationMessage && <Alert variant="danger">{validationMessage}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        {isRegister && (
                            <Form.Group controlId="formConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </Form.Group>
                        )}
                        <Button variant="primary" type="submit" style={{ marginTop: "10px" }}>
                            {isRegister ? "Register" : "Login"}
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={handleSwitchForm}
                            style={{ marginLeft: "10px", marginTop: "10px" }}
                        >
                            Switch to {isRegister ? "Login" : "Register"}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default LoginCard;
