import WeatherSection from "./components/application/WeatherSection";
import MainSection from "./components/home/MainSection";
import AppFooter from "./components/shared/AppFooter";
import AppNavbar from "./components/shared/AppNavbar";

const App = () => {
	return (
		<>
			<AppNavbar />
			{/*<MainSection />*/}
			<WeatherSection />
			<AppFooter />
		</>
	);
};

export default App;
