import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import { BsBookmarkStar } from "react-icons/bs";
import WeatherCard from "./WeatherCard";
import { getWeatherData } from "../../utils/getWeatherData.js"; // Adjust the path as necessary

const WeatherSection = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState("");
    const currentURL = useLocation();

    const handleAddToFavorites = () => {};

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
                            const colProps = index === 0 ? { sm: 12 } : { sm: 12, md: 6, lg: 3 };
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
                                            /* Make sure small cards display the weather icon on top of the data, not next to it*/
                                            ...(index === 0 ? { layout: "row" } : { layout: "col" })
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
    );
};

export default WeatherSection;
