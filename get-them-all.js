const getArchitects = function () {
    return [
        document.getElementsByTagName("a"),
        document.getElementsByTagName("span")
    ]
}

const getClassical = function () {
    return [
        document.querySelectorAll('a.classical'),
        document.querySelectorAll('a:not(.classical)')
    ]
}

const getActive = function () {
    return [
        document.querySelectorAll('a.classical.active'),
        document.querySelectorAll('a.classical:not(.active)')
    ]
}

const getBonannoPisano = function () {
    return [
      document.getElementById("BonannoPisano"),
      document.querySelectorAll("a.classical.active:not(#BonannoPisano)"),
    ];
}

export {getArchitects, getBonannoPisano, getClassical,getActive}