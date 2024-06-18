import FavouriteSection from "./components/favourites/FavouriteSection";
import WeatherSection from "./components/application/WeatherSection";
import AppFooter from "./components/shared/AppFooter";
import AppNavbar from "./components/shared/AppNavbar";
import LoginCard from "./components/login/LoginCard";

const App = () => {
	return (
		<>
			<AppNavbar />
			<LoginCard />
			{/* <WeatherSection /> */}
			{/*<MainSection />*/}
			{/*<FavouriteSection />*/}
			<AppFooter />
		</>
	);
};

export default App;
