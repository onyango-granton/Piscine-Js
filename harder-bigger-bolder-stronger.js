const generateLetters = function () {
  let fontSize = 11;
  let bodyTag = document.getElementsByTagName("body")[0];
  for (let i = 1; i <= 120; i++) {
    let newDiv = document.createElement("div");
    newDiv.textContent = getRandomUppercaseLetter();
      newDiv.style.fontSize = `${fontSize}px`;
      if (i <= 40) {
          newDiv.style.fontWeight = 300
      } else if (i > 40 && i <= 80) {
          newDiv.style.fontWeight = 400
      } else {
          newDiv.style.fontWeight = 600
      }
      bodyTag.append(newDiv)
    fontSize++;
  }
};

function getRandomUppercaseLetter() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex];
}
