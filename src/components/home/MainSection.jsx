import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { getCitiesData } from "../../utils/getCitiesData.js";

const MainSection = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState("");
    const [suggestions, setSuggestions] = useState([]); // Autocomplete suggestions
    const [fetchEnabled, setFetchEnabled] = useState(true); // Enable/disable the autocomplete API calling

    useEffect(() => {
        const loadSuggestions = async () => {
            if (fetchEnabled && location.length > 3) {
                getCitiesData(location).then((data) => {
                    setSuggestions(data);
                });
            } else {
                setSuggestions([]);
            }
        };

        loadSuggestions();
    }, [location, fetchEnabled]);

    const handleSelect = (name) => {
        setLocation(name);
        setSuggestions([]);
        setFetchEnabled(false);
    };

    const handleChange = (e) => {
        setLocation(e.target.value);
        setFetchEnabled(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/weather?location=${encodeURIComponent(location)}`);
    };

    return (
        <>
            <Container className="mt-4">
                <Row>
                    <Col>
                        <h1 className="text-center">Search for locations</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-4">
                    <Col md={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="locationName">
                                <Form.Control
                                    type="text"
                                    placeholder="Location name"
                                    name="Location name"
                                    value={location}
                                    onChange={handleChange}
                                />
                                {suggestions.map((suggestion, index) => (
                                    <div key={index} onClick={() => handleSelect(suggestion)}>
                                        {suggestion}
                                    </div>
                                ))}
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                className="d-block mx-auto mt-3"
                            >
                                Search
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default MainSection;
