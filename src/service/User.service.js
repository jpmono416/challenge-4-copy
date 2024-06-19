import axios from "axios";
import Config from "../config/Config.js";

export default class UserService {
    static registerUser = async (userData) => {
        try {
            const response = await axios.post(`${Config.backendUrl()}/user`, userData);
            return response.data; // new user object and JWT token
        } catch (error) {
            if (
                error.response &&
                error.response.status === 500 &&
                error.response.data.error.includes("E11000 duplicate key error")
            ) {
                return { failed: true, message: "The email has already been taken." };
            } else {
                return { failed: true, message: "An unexpected error occurred. Please try again." };
            }
        }
    };

    static loginUser = async (credentials) => {
        try {
            const response = await axios.post(`${Config.backendUrl()}/user/login`, credentials);
            return response.data;
        } catch (error) {
            if (
                error.response &&
                error.response.status === 500 &&
                error.response.data.error.includes("E11000 duplicate key error")
            ) {
                return { failed: true, message: "The email has already been taken." };
            } else {
                return { failed: true, message: "An unexpected error occurred. Please try again." };
            }
        }
    };

    static addFavouriteLocation = async (email, location, token) => {
        try {
            const response = await axios.post(
                `${Config.backendUrl()}/user/favLocation`,
                { email, location },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            return response.data;
        } catch (error) {
            return { failed: true, message: "An unexpected error occurred. Please try again." };
        }
    };

    static getFavouriteLocations = async (email, token) => {
        try {
            const response = await axios.get(`${Config.backendUrl()}/user/favLocations/${email}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            return { failed: true, message: "An unexpected error occurred. Please try again." };
        }
    };

    static removeFavouriteLocation = async (email, location, token) => {
        try {
            const response = await axios.delete(`${Config.backendUrl()}/user/favLocation`, {
                data: { email, location },
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            return { failed: true, message: "An unexpected error occurred. Please try again." };
        }
    }

    static validateCredentials = (credentials) => {
        const checkPasswordRules = (password) => {
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
            return regex.test(password);
        };

        const { email, password, confirmPassword } = credentials;
        if (!email || !password || !confirmPassword) {
            return { isValid: false, message: "Please fill in all fields" };
        }
        if (password !== confirmPassword) {
            return { isValid: false, message: "Passwords do not match" };
        }
        if (!checkPasswordRules(password)) {
            return {
                isValid: false,
                message:
                    "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a special character.",
            };
        }

        // If all validations pass
        return { isValid: true, message: "Validation successful" };
    };
}
