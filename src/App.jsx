import { useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FavouriteSection from "./components/favourites/FavouriteSection";
import WeatherSection from "./components/application/WeatherSection";
import MainSection from "./components/home/MainSection";
import AppFooter from "./components/shared/AppFooter";
import AppNavbar from "./components/shared/AppNavbar";
import LoginCard from "./components/login/LoginCard";
import { AuthContext } from "./auth/AuthProvider";

const App = () => {
    const { login } = useContext(AuthContext);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");

        if (storedUser && storedToken) {
            const user = JSON.parse(storedUser);
            login(user, storedToken); // Set the user state and token
        }
    }, []);

    return (
        <BrowserRouter>
            <AppNavbar />
            <Routes>
                <Route path="/" element={<MainSection />} />
                <Route path="/login" element={<LoginCard />} />
                <Route path="/weather" element={<WeatherSection />} />
                <Route path="/favourites" element={<FavouriteSection />} />
            </Routes>
            <AppFooter />
        </BrowserRouter>
    );
};

export default App;
