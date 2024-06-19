export const navigateToWeather = (navigate, location) => {
    navigate(`/weather?location=${encodeURIComponent(location)}`);
};