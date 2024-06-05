import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { BsBookmarkStar } from "react-icons/bs";
import WeatherCard from "./WeatherCard";

const WeatherSection = () => {
	const handleAddToFavorites = () => {};

	return (
		<div style={{ padding: "0 50px" }}>
			<h1 className="text-center"> Place name </h1>
			<span className="text-center" style={{ display: "flex", justifyContent: "center" }}>
				<Button variant="link" className="border-none" onClick={handleAddToFavorites}>
					<BsBookmarkStar />
					Click to add to favorites
				</Button>
			</span>

			<Row style={{ marginTop: "45px" }}>
				<Col sm={12}>
					<WeatherCard date="2022-01-01" temperature={25} description="Sunny" layout="row" />
				</Col>
				<Col sm={6} md={3}>
					<WeatherCard date="2022-01-01" temperature={20} description="Cloudy" />
				</Col>
				<Col sm={6} md={3}>
					<WeatherCard date="2022-01-02" temperature={22} description="Sunny" />
				</Col>
				<Col sm={6} md={3}>
					<WeatherCard date="2022-01-03" temperature={24} description="Rainy" />
				</Col>
				<Col sm={6} md={3}>
					<WeatherCard date="2022-01-04" temperature={26} description="Snowy" />
				</Col>
			</Row>
		</div>
	);
};

export default WeatherSection;
