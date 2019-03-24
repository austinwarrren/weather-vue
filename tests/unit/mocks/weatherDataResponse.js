// Mock responses for WeatherData.js

export default {
    // GET /data/2.5/weather?q=Chicago
    currentWeatherData: {
        "coord": {
        "lon": -87.62,
        "lat": 41.88
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 284.48,
            "pressure": 1025,
            "humidity": 46,
            "temp_min": 282.59,
            "temp_max": 286.48
        },
        "visibility": 16093,
        "wind": {
            "speed": 2.57,
            "deg": 155.502
        },
        "clouds": {
            "all": 1
        },
        "dt": 1553372700,
        "sys": {
            "type": 1,
            "id": 4505,
            "message": 0.0084,
            "country": "US",
            "sunrise": 1553341738,
            "sunset": 1553385908
        },
        "id": 4887398,
        "name": "Chicago",
        "cod": 200
    }
}