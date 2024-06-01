<center>

# React component hierarchy and plan

</center>

---

Based on the wireframes and user stories, I have come up with the following component hierarchy:

## Home page

![Home page](./img/home-page-component-layout.png)

```mermaid

graph TD;
    HomeApp --> Navbar;
    HomeApp --> MainSection;
    HomeApp --> Footer;

    Navbar --> Logo;
    MainSection --> PageTitle;
    MainSection --> SearchForm;
    Footer;
```

## Full app

![Full app](./img/full-app-component-layout.png)

```mermaid

graph TD;
    App --> Navbar;
    App --> WeatherSection;
    App --> MapSection;
    App --> HotelsSection;
    App --> Footer;

    Navbar --> Logo;
    WeatherSection --> TodayWeatherCard;
    WeatherSection --> WeatherCard;
    WeatherSection --> PageTitle;
    WeatherSection --> AddToFavourites;
    
    TodayWeatherCard --> WeatherIcon;
    TodayWeatherCard --> WeatherInfo;

    WeatherCard --> WeatherIcon;
    WeatherCard --> WeatherInfo;

    HotelsSection --> HotelCard;
    HotelCard --> HotelInfoRow
    Footer;
```

## Favourite locations page

![Favourite locations page](./img/fav-locations-component-layout.png)

```mermaid


graph TD;
    FavouriteLocationsApp --> Navbar;
    FavouriteLocationsApp --> FavouriteSection;
    FavouriteLocationsApp --> Footer;

    Navbar --> Logo;
    FavouriteSection --> FavouriteRow;

    Footer;
```