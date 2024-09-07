let lastCircle = null;
const box = setBox();

document.addEventListener("click", (event) => {
  createCircle(event.clientX, event.clientY);
});

document.addEventListener("mousemove", (event) => {
  moveCircle(event.clientX, event.clientY);
});

function createCircle(x, y) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.left = `${x - 25}px`;
  circle.style.top = `${y - 25}px`;
  document.body.appendChild(circle);
  lastCircle = circle;
}

function moveCircle(x, y) {
  if (lastCircle) {
    lastCircle.style.left = `${x - 25}px`;
    lastCircle.style.top = `${y - 25}px`;
    checkCircleInBox(lastCircle, box);
  }
}

function setBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.left = `${window.innerWidth / 2 - 100}px`;
  box.style.top = `${window.innerHeight / 2 - 100}px`;
  document.body.appendChild(box);
  return box;
}

function checkCircleInBox(circle, box) {
  const circleRect = circle.getBoundingClientRect();
  const boxRect = box.getBoundingClientRect();

  if (
    circleRect.left >= boxRect.left &&
    circleRect.right <= boxRect.right &&
    circleRect.top >= boxRect.top &&
    circleRect.bottom <= boxRect.bottom
  ) {
    circle.style.backgroundColor = "var(--purple)";
    circle.style.pointerEvents = "none";
  }
}


export {createCircle, moveCircle, setBox}