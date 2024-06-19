import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider.jsx";
import { navigateToWeather } from "../../utils/navigationHelper";
import UserService from "../../service/User.service.js";

const FavouriteRow = ({ location, onRemove, onAlert }) => {
    const { authToken, userDetails } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigateToWeather(navigate, location);
    };

    const handleRemoveFavourite = async (location) => {
        try {
            const response = await UserService.removeFavouriteLocation(
                userDetails.email,
                location,
                authToken
            );

            if (response.failed) {
                onAlert(`Failed to remove ${location} from favorites`, "danger");
            } else {
                onAlert(`${location} removed from favorites`, "success");
            }
        } catch (error) {
            onAlert("An error occurred", "danger");
        } finally {
            onRemove(location);
        }
    };

    return (
        <>
            <Card className="mb-3" onClick={handleCardClick} style={{ cursor: "pointer" }}>
                <Card.Body className="d-flex justify-content-between align-items-center">
                    <Card.Title className="mb-0">{location}</Card.Title>
                    <Button
                        variant="outline-danger"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent card click event when button is clicked
                            handleRemoveFavourite(location);
                        }}
                    >
                        <BsTrash />
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default FavouriteRow;
