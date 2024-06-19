import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import FavouriteRow from "./FavouriteRow";
import UserService from "../../service/User.service.js";
import { AuthContext } from "../../auth/AuthProvider.jsx";
import useAlert from "../../hooks/useAlert";

const FavouriteSection = () => {
    const [favourites, setFavourites] = useState([]);
    const [alert, showAlert] = useAlert();
    const { authToken, userDetails } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const updateFavouritesList = (removedLocation) => {
        setFavourites((currentFavourites) =>
            currentFavourites.filter((location) => location !== removedLocation)
        );
    };

    const handleAlert = (message, variant) => {
        showAlert(message, variant);
    };

    useEffect(() => {
        // Redirect to /login if authToken is empty
        if (authToken === "") {
            navigate("/login");
            return; // Prevent further execution
        }

        const fetchFavorites = async () => {
            console.log("Sending", userDetails.email, authToken);
            const response = await UserService.getFavouriteLocations(userDetails.email, authToken);
            if (!response.failed) {
                console.log("Data: ", response);
                setFavourites(response);
            } else {
                // Handle error or display a message
                console.error(response.message);
            }
        };

        fetchFavorites();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <>
            {alert.show && <Alert variant={alert.variant}>{alert.message}</Alert>}

            <Container style={{ padding: "0 50px" }}>
                <h1 className="text-center">Favourite locations</h1>

                <Row>
                    {favourites.map((location, index) => (
                        <Col xs={12} md={6} lg={4} key={index}>
                            <FavouriteRow
                                location={location}
                                onRemove={updateFavouritesList}
                                onAlert={handleAlert}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default FavouriteSection;
