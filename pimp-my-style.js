import { styles } from "./pimp-my-style.data.js";

let count = 0;

const pimp = function() {
  const button = document.querySelector("button.button");
  if (!button) return; // Guard clause to handle missing button

  if (button.classList.contains("unpimp")) {
    // Reverse the process
    button.classList.remove(styles[count]);
    count = (count - 1 + styles.length) % styles.length;
    if (count === 0) {
      button.classList.toggle("unpimp");
    }
  } else {
    // Apply the next style
    button.classList.add(styles[count]);
    count = (count + 1) % styles.length;
    if (count === 0) {
      button.classList.toggle("unpimp");
    }
  }
}

export { pimp };
