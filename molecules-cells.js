const DNA = function(string) {
    let res = "";
    for (let i = 0; i < string.length; i++) {
        res += DNAreplace(string[i]);
    }
    return res;
}

const RNA = function(string) {
    let res = "";
    for (let i = 0; i < string.length; i++) {
        res += RNAreplace(string[i]);
    }
    return res;
}

const RNAreplace = function(str) {
    if (str == "G" || str == "g") {
        return "C";
    }
    if (str == "C" || str == "c") {
        return "G";
    }
    if (str == "A" || str == "a") {
        return "U";  
    }
    if (str == "U" || str == "u") {
        return "A";
    }
    if (str == "T" || str == "t") {
        return "A";
    }
}

const DNAreplace = function(str) {
    if (str == "G" || str == "g") {
        return "C";
    }
    if (str == "C" || str == "c") {
        return "G";
    }
    if (str == "T" || str == "t") {
        return "A";
    }
    if (str == "A" || str == "a") {
        return "U"; 
    }
    if (str == "A" || str == "a") {
        return "U";  
    }
}


// eq(RNA('TAGC'), 'AUCG')