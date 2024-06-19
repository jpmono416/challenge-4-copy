import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { AuthContext } from "../../auth/AuthProvider.jsx";
import { navigateToWeather } from "../../utils/navigationHelper.js";

const AppNavbar = () => {
    const { authToken, logout } = useContext(AuthContext); // Replace with your login logic
    const [location, setLocation] = useState("");
    const navigate = useNavigate();

    const getPath = () => {
        const url = useLocation();
        return url.pathname;
    };

    const handleLogout = () => {
        logout(); // Call the logout function from AuthContext
        navigate("/"); // Navigate to home page
    };

    const handleChange = (e) => {
        setLocation(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigateToWeather(navigate, location);
    };

    return (
        <Navbar bg="dark" expand="lg" className="text-white px-5">
            <Navbar.Brand href="#" className="text-white px-1">
                Logo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" className="text-white px-5">
                        Home
                    </Nav.Link>
                    {authToken !== "" ? (
                        <>
                            <Nav.Link as={Link} to="/favourites" className="text-white px-5">
                                My saved Locations
                            </Nav.Link>
                            <Nav.Link
                                as={Button}
                                onClick={handleLogout}
                                className="text-white px-5"
                                style={{ cursor: "pointer" }}
                            >
                                Logout
                            </Nav.Link>
                        </>
                    ) : (
                        <Nav.Link as={Link} to="/login" className="text-white px-1">
                            Login
                        </Nav.Link>
                    )}
                </Nav>
                {getPath() !== "/" && (
                    // Only render this if search bar isn't visible (if not on home)
                    <Form onSubmit={handleSubmit} className="d-flex ms-auto">
                        <FormControl
                            type="text"
                            placeholder="Location search..."
                            className="me-2"
                            onChange={handleChange}
                        />
                        <Button type="submit" variant="outline-success">
                            <BsSearch />
                        </Button>
                    </Form>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppNavbar;
