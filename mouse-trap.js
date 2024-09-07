let circles = [];
let box;

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 50;
    this.isTrapped = false;
    this.HTML = this.createHTML();
    circles.push(this);
  }

  createHTML() {
    const div = document.createElement("div");
    div.classList.add("circle");
    div.style.position = "absolute";
    div.style.top = `${this.y}px`;
    div.style.left = `${this.x}px`;
    div.style.background = "white";
    document.body.appendChild(div);
    return div;
  }

  move(x, y) {
    if (this.isInsideBox(x, y) || !this.isTrapped) {
      this.updatePosition(x, y);
    } else {
      if (this.isInsideBox(x, this.y)) {
        this.updatePosition(x, this.y);
      } else if (this.isInsideBox(this.x, y)) {
        this.updatePosition(this.x, y);
      }
    }
  }

  updatePosition(x, y) {
    this.x = x;
    this.y = y;
    this.HTML.style.top = `${this.y}px`;
    this.HTML.style.left = `${this.x}px`;
  }

  checkTrapped() {
    this.isTrapped = this.isInsideBox(this.x, this.y);
    this.HTML.style.background = this.isTrapped ? "var(--purple)" : "white";
  }

  isInsideBox(x, y) {
    return (
      x > box.x &&
      x + this.diameter < box.x + box.width &&
      y > box.y &&
      y + this.diameter < box.y + box.height
    );
  }
}

class Box {
  constructor() {
    this.HTML = this.createHTML();
    this.x = this.HTML.offsetLeft - this.HTML.offsetWidth / 2 - 1;
    this.y = this.HTML.offsetTop - this.HTML.offsetHeight / 2 - 1;
    this.width = this.HTML.offsetWidth + 1;
    this.height = this.HTML.offsetHeight + 1;
  }

  createHTML() {
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.position = "absolute";
    div.style.top = "50%";
    div.style.left = "50%";
    div.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(div);
    return div;
  }
}

document.body.addEventListener("click", (e) => createCircle(e));
document.body.addEventListener("mousemove", (e) => moveCircle(e));

function createCircle(e) {
  if (!e) return;
  new Circle(e.clientX - 25, e.clientY - 25);
}

function moveCircle(e) {
  if (!e || circles.length === 0) return;
  circles[circles.length - 1].move(e.clientX - 25, e.clientY - 25);
}

function setBox() {
  box = new Box();
}

export { createCircle, moveCircle, setBox };
