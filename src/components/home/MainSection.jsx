import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const MainSection = () => {
	const [location, setLocation] = useState("");
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const loadSuggestions = async () => {
			if (location.length > 2) {
				const response = await axios.get(
					`https://about:blank/`
					//`https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=38fb2dd35fee522d8ec4f4fb7793f9df`
				);
				console.log("Response" + { response });
				setSuggestions(response.data.map((loc) => loc.name));
			} else {
				setSuggestions([]);
			}
		};

		loadSuggestions();
	}, [location]);

	const handleSelect = (name) => {
		setLocation(name);
		setSuggestions([]);
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
						<Form>
							<Form.Group controlId="locationName">
								<Form.Control
									type="text"
									placeholder="Location name"
									name="Location name"
									value={location}
									onChange={(e) => setLocation(e.target.value)}
								/>
								{suggestions.map((suggestion, index) => (
									<div key={index} onClick={() => handleSelect(suggestion)}>
										{suggestion}
									</div>
								))}
							</Form.Group>
							<Button variant="primary" type="submit" className="d-block mx-auto mt-3">
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
