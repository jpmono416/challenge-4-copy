import React from "react";
import { Navbar, Nav, Form, FormControl, Button, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const AppNavbar = () => {
    const isLoggedIn = false; // Replace with your login logic

    return (
        <Navbar bg="dark" expand="lg" className="text-white px-5">
            <Navbar.Brand href="#" className="text-white px-1">
                Logo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#" className="text-white px-5">
                        Home
                    </Nav.Link>
                    {isLoggedIn ? (
                        <Nav.Link href="#" className="text-white px-5">
                            My saved Locations
                        </Nav.Link>
                    ) : (
                        <Nav.Link href="#" className="text-white px-1">
                            Login
                        </Nav.Link>
                    )}
                </Nav>
                <Form className="d-flex ms-auto">
                    <FormControl type="text" placeholder="Location search..." className="me-2" />
                    <Button variant="outline-success">
                        <BsSearch />
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppNavbar;
