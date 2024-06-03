import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

console.log({Navbar, Nav, Form, FormControl, Button, InputGroup, BsSearch});

const AppNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="px-5">
            <Navbar.Brand href="#">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">My saved Locations</Nav.Link>
                </Nav>
                <Form className="d-flex ms-auto">
                    <FormControl
                        type="text"
                        placeholder="Location search..."
                        className="me-2"
                    />
                    <Button variant="outline-success">
                        <BsSearch />
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppNavbar;