// Constants
const CIRCLE_DIAMETER = 50;

// Global variables
let circles = [];
let box;

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = CIRCLE_DIAMETER;
    this.isTrapped = false;
    this.element = this.createCircleElement();
    this.updatePosition();
    this.updateTrappedState();
    circles.push(this);
  }

  createCircleElement() {
    const element = document.createElement("div");
    element.classList.add("circle");
    element.style.position = "absolute";
    document.body.appendChild(element);
    return element;
  }

  updatePosition() {
    this.element.style.top = `${this.y}px`;
    this.element.style.left = `${this.x}px`;
  }

  updateTrappedState() {
    const wasTrapped = this.isTrapped;
    this.isTrapped = this.isInsideBox(this.x, this.y);
    if (this.isTrapped || wasTrapped) {
      this.element.style.background = "white";
    } else {
      this.element.style.background = "var(--purple)";
    }
  }

  move(x, y) {
    const newX = this.isTrapped
      ? Math.max(box.x, Math.min(x, box.x + box.width - this.diameter))
      : x;
    const newY = this.isTrapped
      ? Math.max(box.y, Math.min(y, box.y + box.height - this.diameter))
      : y;

    this.x = newX;
    this.y = newY;
    this.updatePosition();
    this.updateTrappedState();
  }

  isInsideBox(x, y) {
    return (
      x >= box.x &&
      x + this.diameter <= box.x + box.width &&
      y >= box.y &&
      y + this.diameter <= box.y + box.height
    );
  }
}

class Box {
  constructor() {
    this.element = this.createBoxElement();
    this.updateDimensions();
  }

  createBoxElement() {
    const element = document.createElement("div");
    element.classList.add("box");
    element.style.position = "absolute";
    element.style.top = "50%";
    element.style.left = "50%";
    element.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(element);
    return element;
  }

  updateDimensions() {
    const rect = this.element.getBoundingClientRect();
    this.x = rect.left;
    this.y = rect.top;
    this.width = rect.width;
    this.height = rect.height;
  }
}

function createCircle(e) {
  if (!e) return;
  new Circle(e.clientX - CIRCLE_DIAMETER / 2, e.clientY - CIRCLE_DIAMETER / 2);
}

function moveCircle(e) {
  if (!e || circles.length === 0) return;
  circles[circles.length - 1].move(
    e.clientX - CIRCLE_DIAMETER / 2,
    e.clientY - CIRCLE_DIAMETER / 2
  );
}

function setBox() {
  box = new Box();
}

document.body.addEventListener("click", createCircle);
document.body.addEventListener("mousemove", moveCircle);

export { createCircle, moveCircle, setBox };
