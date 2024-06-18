import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import FavouriteSection from "./components/favourites/FavouriteSection";
import WeatherSection from "./components/application/WeatherSection";
import MainSection from "./components/home/MainSection";
import AppFooter from "./components/shared/AppFooter";
import AppNavbar from "./components/shared/AppNavbar";
import LoginCard from "./components/login/LoginCard";

const App = () => {
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
