export function initializeColorPicker() {
  const colorDisplay = createColorDisplay();
  const svgContainer = createSVGContainer();
  const crosshairX = createCrosshairLine("axisX");
  const crosshairY = createCrosshairLine("axisY");

  svgContainer.appendChild(crosshairX);
  svgContainer.appendChild(crosshairY);
  document.body.appendChild(svgContainer);

  addEventListener("mousemove", handleMouseMove);
  addEventListener("click", handleClick);
}

function createColorDisplay() {
  const display = document.createElement("div");
  display.className = "text hsl";
  document.body.appendChild(display);
  return display;
}

function createSVGContainer() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS(null, "height", window.innerHeight);
  svg.setAttributeNS(null, "width", window.innerWidth);
  return svg;
}

function createCrosshairLine(id) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttributeNS(null, "id", id);
  line.setAttributeNS(null, "x1", 0);
  line.setAttributeNS(null, "y1", 0);
  line.setAttributeNS(null, "x2", 0);
  line.setAttributeNS(null, "y2", 0);
  line.style.stroke = "white";
  line.style.strokeWidth = 1;
  return line;
}

function handleMouseMove(event) {
  removeExistingElements();
  updateCrosshair(event);
  const hue = calculateHue(event.clientX);
  const luminosity = calculateLuminosity(event.clientY);
  updateBackgroundColor(hue, luminosity);
  displayColorInfo(hue, luminosity);
}

function removeExistingElements() {
  document
    .querySelectorAll(".hue, .hsl, .luminosity")
    .forEach((element) => element.remove());
}

function updateCrosshair(event) {
  const crosshairX = document.getElementById("axisX");
  const crosshairY = document.getElementById("axisY");

  crosshairY.setAttributeNS(null, "x1", 0);
  crosshairY.setAttributeNS(null, "y1", event.clientY);
  crosshairY.setAttributeNS(null, "x2", window.innerWidth);
  crosshairY.setAttributeNS(null, "y2", event.clientY);

  crosshairX.setAttributeNS(null, "x1", event.clientX);
  crosshairX.setAttributeNS(null, "y1", 0);
  crosshairX.setAttributeNS(null, "x2", event.clientX);
  crosshairX.setAttributeNS(null, "y2", window.innerHeight);
}

function calculateHue(x) {
  return Math.round((x / window.innerWidth) * 360);
}

function calculateLuminosity(y) {
  return Math.round((y / window.innerHeight) * 100);
}

function updateBackgroundColor(hue, luminosity) {
  document.body.style.background = `hsl(${hue}, 50%, ${luminosity}%)`;
}

function displayColorInfo(hue, luminosity) {
  const hueDisplay = createInfoElement("hue", `hue<br>${hue}`);
  const hslDisplay = createInfoElement(
    "hsl",
    `hsl(${hue}, 50%, ${luminosity}%)`
  );
  const luminosityDisplay = createInfoElement(
    "luminosity",
    `${luminosity}<br>luminosity`
  );

  document.body.appendChild(hueDisplay);
  document.body.appendChild(hslDisplay);
  document.body.appendChild(luminosityDisplay);
}

function createInfoElement(className, innerHTML) {
  const element = document.createElement("div");
  element.className = `${className} text`;
  element.innerHTML = innerHTML;
  return element;
}

function handleClick() {
  const hslValue = document.getElementsByClassName("hsl")[0].innerHTML;
  const tempInput = document.createElement("input");
  document.body.appendChild(tempInput);
  tempInput.value = hslValue;
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
