import {endpoint, API_KEY} from "../locals";

export const fetchWeekQuery = async (payload) => {
    const response = await fetch(`${endpoint}forecast?q=${payload}&appid=${API_KEY}`);
    const weekWeather = await response.json();
    return weekWeather;
}
export const fetchWeekLatAndLongitude = async (payload) => {
    const response = await fetch(`${endpoint}forecast?lat=${payload.latitude}&lon=${payload.longitude}&appid=${API_KEY}`);
    const weekWeather = await response.json();
    return weekWeather;
}