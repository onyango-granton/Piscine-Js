const build = function (numBricks) {
    let body = document.getElementsByTagName("body")[0];
    let bricks = 1;
    let buildInterval = setInterval(() => {
        let brick = document.createElement("div");
        brick.setAttribute("id", "brick-" + bricks);
        bricks % 3 === 2 ? (brick.dataset.foundation = true) : null;
        body.appendChild(brick);
        bricks++;
        (bricks > numBricks) ? clearInterval(buildInterval) : null
    }, 100);
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