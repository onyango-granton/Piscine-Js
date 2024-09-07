document.addEventListener("keydown", compose);

function compose(event) {
  const SmallLetters = /[abcdefghijkmnopqrstuvwxyz]/;
  const key = event.key;

  if (SmallLetters.test(key)) {
    createNote(key);
  } else if (key === "Backspace") {
    deleteLastNote();
  } else if (key === "Escape") {
    clearAllNotes();
  }
}

function createNote(letter) {
  const noteDiv = document.createElement("div");
  noteDiv.className = "note";
  noteDiv.textContent = letter;

  const color = generateColorFromLetter(letter);
  noteDiv.style.backgroundColor = color;

  document.body.appendChild(noteDiv);
}

function generateColorFromLetter(letter) {
  const charCode = letter.charCodeAt(0);
  const hue = (charCode * 10) % 360; 
  return `hsl(${hue}, 100%, 50%)`;
}

function deleteLastNote() {
  const notes = document.querySelectorAll(".note");
  if (notes.length > 0) {
    const lastNote = notes[notes.length - 1];
    lastNote.remove();
  }
}

function clearAllNotes() {
  const notes = document.querySelectorAll(".note");
  notes.forEach((note) => note.remove());
}
