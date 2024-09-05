const citiesOnly = function (objectArray) {
    return objectArray.map((x) => x.city)
}


const upperCasingStates = function (statesArray) {
    const capitalizeWords = function (str) {
      return str.replace(/\b\w/g, (match) => match.toUpperCase());
    };
    return statesArray.map((x) => capitalizeWords(x))
}

const fahrenheitToCelsius = function (fahrenheitArray) {
  return fahrenheitArray.map((x) => {
    const tempNumber = Number(x.slice(0, -2).trim()); // Extract the numeric part of the temperature
    const celsiusTemp = Math.floor((tempNumber - 32) * (5 / 9)); // Convert to Celsius
    return celsiusTemp.toString() + "°C";
  });
};

const trimTemp = function (objectArray) {
    const pattern = /\s/g;
    return objectArray.map((x) => {
        return {
            city: x.city,
            state: x.state,
            region: x.region,
            temperature : x.temperature.replace(pattern,"")
        }
    })
}

const tempForecasts = function (objectArray) {
  return objectArray.map((x) => {
    const newTemp = x.temperature.replace(/\s/g, "");
    const celsius = fahrenheitToCelsius([newTemp])[0];
    const State = upperCasingStates([x.state])[0];
    const City = upperCasingStates([x.city])[0];

    return celsius +"elsius"+ " in " + City + " " + State;
  });
};

// console.log(upperCasingStates(["alabama", "new jersey"]));
