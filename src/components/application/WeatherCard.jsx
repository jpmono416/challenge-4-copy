import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { BsCloudSun } from "react-icons/bs";

const WeatherCard = ({ date, temperature, description, layout }) => {
	return (
		<Card
			style={{
				backgroundColor: "#c3c3c3",
				boxShadow: "5px 5px 10px rgba(0,0,0,0.1)",
				margin: "20px 0 ",
			}}
		>
			<Card.Body>
				<Card.Title>{date}</Card.Title>
				<Row className="justify-content-md-center">
					<Col sm={layout === "row" ? 6 : 12} className="d-flex justify-content-center ">
						<BsCloudSun size={50} />
					</Col>
					<Col sm={layout === "row" ? 6 : 12} className="d-flex justify-content-center ">
						<Card.Text>
							Temperature: {temperature}°C
							<br />
							Description: {description}
						</Card.Text>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default WeatherCard;
