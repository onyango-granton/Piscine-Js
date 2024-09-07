const build = function (bricks) {
    let bodyElem = document.getElementsByTagName('body')[0]
    let brickId = 1
    const buildInterval = setInterval(() => {
        let newDiv = document.createElement('div')
        newDiv.setAttribute('id', `brick-${brickId}`)
            (brickId % 3 === 2) ? newDiv.setAttribute('foundation', true) : false
        bodyElem.appendChild(newDiv)
        brickId++
        (brickId == bricks + 1) ? clearInterval(buildInterval) : false
    },100)
}

const repair = function (ids) {
    ids.array.forEach(element => {
        let brickDiv = document.getElementById(element)
        brickDiv.getAttribute("foundation")
          ? brickDiv.setAttribute("repaired", "in progress")
          : brickDiv.setAttribute("repaired", true);
    });
}

const destroy = function () {
    let bricks = document.getElementsByTagName('div')
    bricks[bricks.length - 1].remove()
}

export {build, repair, destroy}