import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Button, Row, Col, Alert } from "react-bootstrap";
import { BsBookmarkStar } from "react-icons/bs";
import WeatherCard from "./WeatherCard";
import { AuthContext } from "../../auth/AuthProvider.jsx";
import { getWeatherData } from "../../utils/getWeatherData.js";
import UserService from "../../service/User.service.js";
import useAlert from "../../hooks/useAlert";

const WeatherSection = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState("");
    const [alert, showAlert] = useAlert();
    const { authToken, userDetails } = useContext(AuthContext);
    const currentURL = useLocation();

    const handleAddToFavorites = async () => {
        const response = await UserService.addFavouriteLocation(
            userDetails.email,
            location,
            authToken
        );
        if (response.failed) {
            showAlert(`Failed to add ${location} to favorites`, "danger");
        } else {
            showAlert(`${location} added to favorites`, "success");
        }
    };

    useEffect(() => {
        const locationParam = new URLSearchParams(currentURL.search).get("location");
        if (locationParam) {
            setLocation(locationParam);
            getWeatherData(locationParam).then((data) => {
                setWeatherData(data);
            });
        }
    }, [currentURL]);

    return (
        <>
            {alert.show && <Alert variant={alert.variant}>{alert.message}</Alert>}

            <div style={{ padding: "0 50px" }}>
                <h1 className="text-center">{location ? location : "Loading..."}</h1>
                <span className="text-center" style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="link" className="border-none" onClick={handleAddToFavorites}>
                        <BsBookmarkStar />
                        Click to add to favorites
                    </Button>
                </span>

                <Row style={{ marginTop: "45px" }}>
                    {weatherData ? (
                        <>
                            {weatherData.map((data, index) => {
                                // Today's weather card takes up the whole row
                                const colProps =
                                    index === 0 ? { sm: 12 } : { sm: 12, md: 6, lg: 3 };
                                const roundedTemp = data.avgTemp.toFixed(2);
                                const roundedPressure = data.avgPressure.toFixed(2);

                                return (
                                    <Col {...colProps} key={index}>
                                        <WeatherCard
                                            date={new Date(data.date).toLocaleDateString()}
                                            temperature={roundedTemp}
                                            description={data.description}
                                            pressure={roundedPressure}
                                            {
                                                //? Making sure small cards display the weather icon on top of the data, not next to it
                                                ...(index === 0
                                                    ? { layout: "row" }
                                                    : { layout: "col" })
                                            }
                                        />
                                    </Col>
                                );
                            })}
                        </>
                    ) : (
                        <p>Loading weather data...</p>
                    )}
                </Row>
            </div>
        </>
    );
};

export default WeatherSection;
