import { colors } from "./fifty-shades-of-cold.data.js";

const generateClasses = function () {
  const styleTag = document.createElement("style");
  let cssTags = "";
  colors.forEach((color) => {
    cssTags += `.${color} {\n  background: ${color};\n }\n\n`;
  });

  styleTag.innerHTML = cssTags;

  document.head.appendChild(styleTag);
};

const generateColdShades = function () {
  const bodyTag = document.body;
  const coldShades = [
    "aqua",
    "blue",
    "turquoise",
    "green",
    "cyan",
    "navy",
    "purple",
  ];
  colors.forEach((color) => {
    if (coldShades.some((shade) => color.toLowerCase().includes(shade))) {
      let newDiv = document.createElement("div");
      newDiv.classList.add(color);
      newDiv.innerHTML = color;
      bodyTag.appendChild(newDiv);
    }
  });
};

const choseShade = function (shade) {
  const allElem = document.querySelectorAll("div");

  allElem.forEach((element) => {
    element.className = shade;
  });
};

export { generateClasses, generateColdShades, choseShade };
