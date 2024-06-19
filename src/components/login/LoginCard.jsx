import React, { useContext, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { AuthContext } from "../../auth/AuthProvider.jsx";
import UserService from "../../service/User.service.js";

const LoginCard = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [validationMessage, setValidationMessage] = useState("");
    const navigate = useNavigate();

    const handleSwitchForm = () => {
        setIsRegister(!isRegister);
        setConfirmPassword("");
        setValidationMessage("");
        //? Intentionally not resetting the relevant fields when switching forms as it can be annoying for the user
    };

    const { login } = useContext(AuthContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidationMessage("");

        if (isRegister) {
            const validation = UserService.validateCredentials({
                email,
                password,
                confirmPassword,
            });
            console.log("Validation: ", validation);

            if (!validation.isValid) setValidationMessage(validation.message);
            else {
                const response = await UserService.registerUser({ email, password });
                if (response.failed) {
                    setValidationMessage(response.message);
                    return;
                }

                const {
                    user: { password: _, ...userWithoutPassword }, // Destructure password out of the user for storage
                    token,
                } = response;

                if (login(userWithoutPassword, token)) {
                    //? Backend tokens are set to expire in 24h
                    Cookies.set("token", token, { expires: 1 });
                    navigate("/");
                }
            }
        } else {
            const response = await UserService.loginUser({ email, password });
            if (response.failed) {
                setValidationMessage(response.message);
                return;
            }
            // Destructure to exclude password from the user object
            const {
                user: { password: _, ...userWithoutPassword },
                token,
            } = response;
            if (login(userWithoutPassword, token)) {
                //? Backend tokens are set to expire in 24h
                Cookies.set("token", token, { expires: 1 });
                navigate("/");
            }
        }
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
