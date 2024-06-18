import FavouriteSection from "./components/favourites/FavouriteSection";
import WeatherSection from "./components/application/WeatherSection";
import AppFooter from "./components/shared/AppFooter";
import AppNavbar from "./components/shared/AppNavbar";

const App = () => {
	return (
		<>
			<AppNavbar />
			<WeatherSection />
			{/*<MainSection />*/}
			{/*<FavouriteSection />*/}
			<AppFooter />
		</>
	);
};

export default App;
