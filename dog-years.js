function dogYears(planetName ,dogAgeSec){
    let earthYear = 31557600
    let age
    if (planetName == "earth"){
        age = dogAgeSec / earthYear 
    } else if (planetName == "mercury"){
        age = dogAgeSec / (0.2408467 * earthYear)
    } else if (planetName == "venus"){
        age = dogAgeSec / (0.61519726 * earthYear)
    } else if (planetName == "mars") {
        age = dogAgeSec / (1.8808158 * earthYear)
    } else if (planetName == "jupiter"){
        age = dogAgeSec / (11.862615 * earthYear)
    } else if (planetName == "saturn"){
        age = dogAgeSec / (29.447498  * earthYear)
    } else if (planetName == "uranus"){
        age = dogAgeSec / (84.016846 * earthYear)
    } else if (planetName == "neptune"){
        age = dogAgeSec / (164.79132 * earthYear)
    }
    return Math.round(age * 100 * 7) / 100
}
