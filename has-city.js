const hasCity = function (country, citiesArray) {
    return function (city) {
        if (citiesArray.includes(city)) {
            return `${city} is a city from ${country}`
        } else {
            return `${city} is not a city from ${country}`;
        }
    }
}