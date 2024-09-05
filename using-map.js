const citiesOnly = function (objectArray) {
    return objectArray.map((x) => x.city)
}


const upperCasingStates = function (statesArray) {
    return statesArray.map((x) => x[0].toUpperCase()+x.slice(1,))
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

    return celsius + " in " + City + " " + State;
  });
};

console.log(
  citiesOnly([
    {
      city: "Los Angeles",
      temperature: "  101 °F   ",
    },
    {
      city: "San Francisco",
      temperature: " 84 ° F   ",
    },
  ])
);
