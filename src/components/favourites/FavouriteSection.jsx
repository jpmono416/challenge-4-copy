import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FavouriteRow from "./FavouriteRow";

const FavouriteSection = () => {
	const handleRemoveFromFavorites = () => {
		console.log("Remove"); // TODO implement this later
	};

	const favorites = [
		{ location: "Location 1",  },
		{ location: "Location 2",  },
		{ location: "Location 2",  },
		{ location: "Location 2",  },
		{ location: "Location 2",  },
		{ location: "Location 2",  },

		// Add more favorite locations here
	];

	return (
		<Container style={{ padding: "0 50px" }}>
			<h1 className="text-center"> Favourite locations </h1>

			<Row>
				{favorites.map((favorite, index) => (
					<Col xs={12} md={6} lg={4} key={index}>
						<FavouriteRow location={favorite.location} onRemove={handleRemoveFromFavorites} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default FavouriteSection;
