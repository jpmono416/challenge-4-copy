import axios from "axios";
import Config from "../config/Config.js";

export const getWeatherData = async (location) => {
    const response = await axios.get(`${Config.backendUrl()}/weather?location=${location}`);
    return response.data;
};
