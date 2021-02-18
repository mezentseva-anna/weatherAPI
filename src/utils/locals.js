export const endpoint = 'https://api.openweathermap.org/data/2.5/';
export const API_KEY = process.env.REACT_APP_API_KEY;
export const tempConventer = (kelvinTemp) => {
    return Math.round(kelvinTemp - 273.15)
}
export const timeConventer = (sec) => {
    return new Date(sec * 1000);
}

export const weatherImg = (condition) => {
    switch (condition) {
        case('rain'):
            return `/img/forecast/rain.png`
        case('snow'):
            return `/img/forecast/snow.png`
        case('sun'):
            return `/img/forecast/sun.png`
        case('storm'):
            return `/img/forecast/wind.png`
        case('clouds'):
            return `/img/forecast/clouds.png`
        default:
            return `/img/forecast/smiling-sun.png`
    }
}