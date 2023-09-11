import createForecastDisplayDates from "./utils/createForecastDisplayDates.js";
import removeAllElementChildren from "./utils/removeElementChildren.js";
import createDOMElement from "./utils/createDOMElement.js";
import processWeatherUnits from "./utils/processWeatherUnits.js";
import processWeatherCodes from "./utils/processWeatherCodes.js";
import convertWindDirection from "./utils/convertWindDirection.js";
import processWeatherCodeIcon from "./utils/processWeatherCodeIcon.js"

const forecastWeatherWrapper = document.querySelector("#forecast-weather-wrapper");

// Get local storage data
const fullLocationName = localStorage.getItem("fullLocationName");
const lat = localStorage.getItem("currentLat");
const lon = localStorage.getItem("currentLon");

console.log("CURRENT LAT", lat);
console.log("CURRENT LON", lon);

// Fetch the forecast data for the current location
async function fetchForecastData(lat, lon) {
    removeAllElementChildren(forecastWeatherWrapper)
    // How many days of forecast weather to fetch (if changed, sortForecastWeatherData will have to be updated)
    /* const daysNum = 3; */

    console.log(forecastWeatherWrapper, lat, lon, "all this is in forecast.html fetchForecastData function")

    // Hourly forecast endpoint for current location based on lat/lon of the "Current Weather"
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,precipitation_probability_max,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_sum,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=auto`;

    fetch (url)
        .then (response => {
            // check response status
            if (!response.ok) {
                throw new Error ("Error fetching CURRENT weather data")
            }

            // Return promise
            return response.json()
        })

        .then (data => {
            sortDailyForecastData(data)
            console.log(data)
        })

        .catch (error => {
            console.error("Error fetching FORECAST weather data:", error)
        })
}

if (lat !== null && lon !== null) {
    fetchForecastData(lat, lon);
}

// Sort the forecast data for the current location
function sortDailyForecastData(data) {
    console.log(data)
    // Variables to hold each forecast day's weather
    let dayOne = [];
    let dayTwo = [];
    let dayThree = [];
    let dayFour = [];
    let dayFive = [];
    let daySix = [];
    let daySeven = [];

    // Loop through and save one day's weather to the variables above
     // Loop through and save one day's weather to the variables above
     for (let i = 0; i < 7; i++) {
        if (i == 0) {
            dayOne.push({
                "apparent_temp_max": data.daily.apparent_temperature_max[i],
                "apparent_temp_min": data.daily.apparent_temperature_min[i],
                "precip_sum": data.daily.precipitation_sum[i],
                "precip_prob_max": data.daily.precipitation_probability_max[i],
                "sunrise": data.daily.sunrise[i],
                "sunset": data.daily.sunset[i],
                "temp_max": data.daily.temperature_2m_max[i],
                "temp_min": data.daily.temperature_2m_min[i],
                "uv_index_max": data.daily.uv_index_max[i],
                "weathercode": data.daily.weathercode[i],
                "winddirection_dominant": data.daily.winddirection_10m_dominant[i],
                "windspeed_max": data.daily.windspeed_10m_max[i],
                "windgusts_max": data.daily.windgusts_10m_max[i],
                "time": data.daily.time[i],
                "date": createForecastDisplayDates()[i]
            });
        }
        if (i == 1) {
            dayTwo.push({
                "apparent_temp_max": data.daily.apparent_temperature_max[i],
                "apparent_temp_min": data.daily.apparent_temperature_min[i],
                "precip_sum": data.daily.precipitation_sum[i],
                "precip_prob_max": data.daily.precipitation_probability_max[i],
                "sunrise": data.daily.sunrise[i],
                "sunset": data.daily.sunset[i],
                "temp_max": data.daily.temperature_2m_max[i],
                "temp_min": data.daily.temperature_2m_min[i],
                "uv_index_max": data.daily.uv_index_max[i],
                "weathercode": data.daily.weathercode[i],
                "winddirection_dominant": data.daily.winddirection_10m_dominant[i],
                "windspeed_max": data.daily.windspeed_10m_max[i],
                "windgusts_max": data.daily.windgusts_10m_max[i],
                "time": data.daily.time[i],
                "date": createForecastDisplayDates()[i]
            });
        }
        if (i == 2) {
            dayThree.push({
                "apparent_temp_max": data.daily.apparent_temperature_max[i],
                "apparent_temp_min": data.daily.apparent_temperature_min[i],
                "precip_sum": data.daily.precipitation_sum[i],
                "precip_prob_max": data.daily.precipitation_probability_max[i],
                "sunrise": data.daily.sunrise[i],
                "sunset": data.daily.sunset[i],
                "temp_max": data.daily.temperature_2m_max[i],
                "temp_min": data.daily.temperature_2m_min[i],
                "uv_index_max": data.daily.uv_index_max[i],
                "weathercode": data.daily.weathercode[i],
                "winddirection_dominant": data.daily.winddirection_10m_dominant[i],
                "windspeed_max": data.daily.windspeed_10m_max[i],
                "windgusts_max": data.daily.windgusts_10m_max[i],
                "time": data.daily.time[i],
                "date": createForecastDisplayDates()[i]
            });
        }
        if (i == 3) {
            dayFour.push({
                "apparent_temp_max": data.daily.apparent_temperature_max[i],
                "apparent_temp_min": data.daily.apparent_temperature_min[i],
                "precip_sum": data.daily.precipitation_sum[i],
                "precip_prob_max": data.daily.precipitation_probability_max[i],
                "sunrise": data.daily.sunrise[i],
                "sunset": data.daily.sunset[i],
                "temp_max": data.daily.temperature_2m_max[i],
                "temp_min": data.daily.temperature_2m_min[i],
                "uv_index_max": data.daily.uv_index_max[i],
                "weathercode": data.daily.weathercode[i],
                "winddirection_dominant": data.daily.winddirection_10m_dominant[i],
                "windspeed_max": data.daily.windspeed_10m_max[i],
                "windgusts_max": data.daily.windgusts_10m_max[i],
                "time": data.daily.time[i],
                "date": createForecastDisplayDates()[i]
            });
        }
        if (i == 4) {
            dayFive.push({
                "apparent_temp_max": data.daily.apparent_temperature_max[i],
                "apparent_temp_min": data.daily.apparent_temperature_min[i],
                "precip_sum": data.daily.precipitation_sum[i],
                "precip_prob_max": data.daily.precipitation_probability_max[i],
                "sunrise": data.daily.sunrise[i],
                "sunset": data.daily.sunset[i],
                "temp_max": data.daily.temperature_2m_max[i],
                "temp_min": data.daily.temperature_2m_min[i],
                "uv_index_max": data.daily.uv_index_max[i],
                "weathercode": data.daily.weathercode[i],
                "winddirection_dominant": data.daily.winddirection_10m_dominant[i],
                "windspeed_max": data.daily.windspeed_10m_max[i],
                "windgusts_max": data.daily.windgusts_10m_max[i],
                "time": data.daily.time[i],
                "date": createForecastDisplayDates()[i]
            });
        }
        if (i == 5) {
            daySix.push({
                "apparent_temp_max": data.daily.apparent_temperature_max[i],
                "apparent_temp_min": data.daily.apparent_temperature_min[i],
                "precip_sum": data.daily.precipitation_sum[i],
                "precip_prob_max": data.daily.precipitation_probability_max[i],
                "sunrise": data.daily.sunrise[i],
                "sunset": data.daily.sunset[i],
                "temp_max": data.daily.temperature_2m_max[i],
                "temp_min": data.daily.temperature_2m_min[i],
                "uv_index_max": data.daily.uv_index_max[i],
                "weathercode": data.daily.weathercode[i],
                "winddirection_dominant": data.daily.winddirection_10m_dominant[i],
                "windspeed_max": data.daily.windspeed_10m_max[i],
                "windgusts_max": data.daily.windgusts_10m_max[i],
                "time": data.daily.time[i],
                "date": createForecastDisplayDates()[i]
            });
        }
        if (i == 6) {
            daySeven.push({
                "apparent_temp_max": data.daily.apparent_temperature_max[i],
                "apparent_temp_min": data.daily.apparent_temperature_min[i],
                "precip_sum": data.daily.precipitation_sum[i],
                "precip_prob_max": data.daily.precipitation_probability_max[i],
                "sunrise": data.daily.sunrise[i],
                "sunset": data.daily.sunset[i],
                "temp_max": data.daily.temperature_2m_max[i],
                "temp_min": data.daily.temperature_2m_min[i],
                "uv_index_max": data.daily.uv_index_max[i],
                "weathercode": data.daily.weathercode[i],
                "winddirection_dominant": data.daily.winddirection_10m_dominant[i],
                "windspeed_max": data.daily.windspeed_10m_max[i],
                "windgusts_max": data.daily.windgusts_10m_max[i],
                "time": data.daily.time[i],
                "date": createForecastDisplayDates()[i]
            });
        }
    }

    const allForecastData = [dayOne, dayTwo, dayThree, dayFour, dayFive, daySix, daySeven]
    

    // Calculate the current day based on user's timezone offset
    const now = new Date();
    console.log("NOW", now)
    now.setSeconds(now.getSeconds() + data.utc_offset_seconds);

    // Clear the forecast wrapper before rendering (prevents the re-rendered data to be appended after the already present data)
    removeAllElementChildren(forecastWeatherWrapper);

    const forecastHeading = createDOMElement("h1", "forecast-heading", fullLocationName);
    const forecastSubHeading = createDOMElement("span", "forecast-sub-heading", "7-Day Forecast");
    forecastWeatherWrapper.append(forecastHeading);
    forecastHeading.append(forecastSubHeading);

    console.log("all forecast data", allForecastData)
    // Render the forecast data
    allForecastData.forEach((dayData) => {
        renderDailyForecast(dayData) 
    })
}

// Render Forecast data to the DOM
function renderDailyForecast(data) {

    const dayWrapper = createDOMElement("div", "forecast-day-wrapper");

    // UI Layout Elements
    const colsWrapper = createDOMElement("div", "day-data")
    const leftCol = createDOMElement("div", "col");
    const rightCol = createDOMElement("div", "col");
    const tempWrapper = createDOMElement("div", "temp-wrapper");
    const highLowWrapper = createDOMElement("div", "high-low-wrapper");

    // Data Elements
    const date = createDOMElement("h3", "daily-forecast-heading", data[0].date);
    const icon = createDOMElement("img", "icon-lg");
    icon.setAttribute("src", processWeatherCodeIcon(data[0].weathercode))
    const dayHighData = createDOMElement("p", "forecast-temp high", `${processWeatherUnits("temp", data[0].temp_max)} `);
    const dayHighTitle = createDOMElement("span", "title", "High");
    const dayLowData = createDOMElement("p", "forecast-temp low", `${processWeatherUnits("temp", data[0].temp_min)} `);
    const dayLowTitle = createDOMElement("span", "title", "Low");
    const weathercode = createDOMElement("p", "weathercode", processWeatherCodes(data[0].weathercode));
    const apparentTempWrapper = createDOMElement("p", undefined, "Feels Like:");
    const apparentTempData = createDOMElement("span", "apparent-temp", ` ${processWeatherUnits("temp", data[0].apparent_temp_max)} High / ${processWeatherUnits("temp", data[0].apparent_temp_min)} Low`)
    const UVWrapper = createDOMElement("div", "data-row", "UV Index Max");
    const UVData = createDOMElement("p", undefined, processWeatherUnits("uv", data[0].uv_index_max));
    const precipSumWrapper = createDOMElement("div", "data-row", "Precipitation");
    const precipSumData = createDOMElement("p", undefined, processWeatherUnits("precipSum", data[0].precip_sum))
    const precipProbWrapper = createDOMElement("div", "data-row", "Precipitation Probability");
    const precipProbData = createDOMElement("p", undefined, processWeatherUnits("precipProb", data[0].precip_prob_max))
    const windWrapper = createDOMElement("div", "data-row", "Wind");
    const windData = createDOMElement("p", undefined, `${convertWindDirection(data[0].winddirection_dominant)} ${processWeatherUnits("speed", data[0].windspeed_max)}`);
    const windGustWrapper = createDOMElement("div", "data-row", "Wind Gusts");
    const windGustData = createDOMElement("p", undefined, processWeatherUnits("speed", data[0].windgusts_max));

    dayWrapper.append(date);

    dayWrapper.append(colsWrapper);
    colsWrapper.append(leftCol);
    colsWrapper.append(rightCol);

    leftCol.append(tempWrapper);
    tempWrapper.append(icon);
    tempWrapper.append(highLowWrapper);
    highLowWrapper.append(dayHighData);
    dayHighData.append(dayHighTitle);
    highLowWrapper.append(dayLowData);
    dayLowData.append(dayLowTitle);
    leftCol.append(weathercode);
    leftCol.append(apparentTempWrapper);
    apparentTempWrapper.append(apparentTempData)

    rightCol.append(UVWrapper);
    UVWrapper.append(UVData);
    rightCol.append(precipSumWrapper);
    precipSumWrapper.append(precipSumData);
    rightCol.append(precipProbWrapper);
    precipProbWrapper.append(precipProbData);
    rightCol.append(windWrapper);
    windWrapper.append(windData);
    rightCol.append(windGustWrapper);
    windGustWrapper.append(windGustData);

    forecastWeatherWrapper.append(date);
    forecastWeatherWrapper.append(dayWrapper);
}