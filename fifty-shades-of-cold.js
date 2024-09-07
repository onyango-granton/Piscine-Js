import { colors } from "./fifty-shades-of-cold.data.js";

const generateClasses = function () {
  let headElem = document.getElementsByTagName("head")[0];
  let style = document.createElement("style");

  colors.forEach((color) => {
    style.innerHTML += `.${color} {background: ${color};}`;
  });

  headElem.appendChild(style);
};


function isColdShade(color) {
    const coldShades = /(aqua|blue|turquoise|green|cyan|navy|purple)/;
    return coldShades.test(color);
}


function generateColdShades() {
    const body = document.body; 

    colors.forEach(color => {
        if (isColdShade(color)) {
            const div = document.createElement('div');
            div.classList.add('shade', color); 
            div.textContent = color;
            body.appendChild(div);
        }
    });
}


function choseShade(shade) {
    document.querySelectorAll('.shade').forEach(div => {
        div.className = `shade ${shade}`;
    });
}

export { generateClasses,generateColdShades, choseShade };
