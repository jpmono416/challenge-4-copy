import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsTrash, BsCloudSun } from "react-icons/bs";

const FavouriteRow = ({ location, onRemove }) => (
	<Card className="mb-3">
		<Card.Body className="d-flex justify-content-between align-items-center">
			<BsCloudSun size={30} />
			<Card.Title className="mb-0">{location}</Card.Title>
			<Button variant="outline-danger" onClick={onRemove}>
				<BsTrash />
			</Button>
		</Card.Body>
	</Card>
);

export default FavouriteRow;
