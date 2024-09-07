document.addEventListener("keydown", compose);

function compose(event) {
  if (!event) return;

  const key = event.key;
  const keyCode = key.charCodeAt(0);

  if (isLetter(keyCode)) {
    createNote(key, keyCode);
  } else if (key === "Backspace") {
    removeLastNote();
  } else if (key === "Escape") {
    removeAllNotes();
  }
}

function isLetter(keyCode) {
  return keyCode >= 97 && keyCode <= 122;
}

function createNote(key, keyCode) {
  const div = document.createElement("div");
  div.classList.add("note");
  div.style.backgroundColor = generateBackgroundColor(keyCode);
  div.textContent = key;
  document.body.appendChild(div);
}

function generateBackgroundColor(keyCode) {
  const intensity = (255 / 26) * (keyCode - 97);
  return `rgb(${intensity}, ${intensity}, ${intensity})`;
}

function removeLastNote() {
  const notes = document.getElementsByClassName("note");
  if (notes.length > 0) {
    notes[notes.length - 1].remove();
  }
}
function removeAllNotes() {
  const notes = document.getElementsByClassName("note");
  while (notes.length > 0) {
    notes[0].remove();
  }
}

export { compose };
