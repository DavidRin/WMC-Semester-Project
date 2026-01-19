const fragen = [
  {
    frage: "Wie heißt die Scheibenwelt im Original?",
    antworten: ["Discworld", "Flatworld", "Roundworld"],
    korrekt: 0
  },
  {
    frage: "Welche Figur ist der TOD?",
    antworten: ["Ein Zauberer", "Ein Reiter", "Eine Personifikation"],
    korrekt: 2
  },
  {
    frage: "Wie spricht der TOD?",
    antworten: ["Flüstert", "GROSSBUCHSTABEN", "Reimt"],
    korrekt: 1
  },
  {
    frage: "Was trägt Rincewind immer?",
    antworten: ["Schwert", "Zauberhut", "Kartoffel"],
    korrekt: 1
  },
  {
    frage: "Wie viele Elefanten tragen die Scheibenwelt?",
    antworten: ["Vier", "Drei", "Fünf"],
    korrekt: 0
  },
  {
    frage: "Wie heißt die Stadtwache?",
    antworten: ["Ankh-Morpork Wache", "Imperiale Garde", "Stadtmiliz"],
    korrekt: 0
  },
  {
    frage: "Wer ist Sam Mumm?",
    antworten: ["Zauberer", "Wachhauptmann", "Assassine"],
    korrekt: 1
  },
  {
    frage: "Was ist Nanny Ogg?",
    antworten: ["Hexe", "Fee", "Göttin"],
    korrekt: 0
  },
  {
    frage: "Wie heißt Pratchetts berühmteste Welt?",
    antworten: ["Scheibenwelt", "Flachland", "Radwelt"],
    korrekt: 0
  },
  {
    frage: "Welches Genre schrieb Pratchett?",
    antworten: ["Hard Sci-Fi", "Fantasy-Satire", "Horror"],
    korrekt: 1
  }
];

let aktuelleFrage = 0;
let punkte = 0;
// HTML-Elemente holen
const quizBox = document.getElementById("quizBox");
const gameOverBox = document.getElementById("gameOverBox");
const frageText = document.getElementById("frageText");
const antwortButtons = document.querySelectorAll(".antwort");
const scoreAnzeige = document.getElementById("scoreAnzeige");
const bild = document.getElementById("quizBild");
// Klick auf Bild startet Quiz
bild.addEventListener("click", startQuiz);

for (var i = 0; i < antwortButtons.length; i++) {
  antwortButtons[i].onclick = function() {
    // Index direkt vom Button holen
    const index = parseInt(this.dataset.index);

    if (index === fragen[aktuelleFrage].korrekt) {
      punkte++;
      scoreAnzeige.textContent = punkte;
      aktuelleFrage++;
      if (aktuelleFrage < fragen.length) {
        ladeFrage();
      } else {
        quizBox.style.display = "none";
      }
    } else {
      quizBox.style.display = "none";
      gameOverBox.style.display = "block";
    }
  };
}
function startQuiz() {
  aktuelleFrage = 0;
  punkte = 0;
  scoreAnzeige.textContent = "0";
  scoreAnzeige.style.display = "block";
  gameOverBox.style.display = "none";
  quizBox.style.display = "block";
  ladeFrage();
}

function ladeFrage() {
  const f = fragen[aktuelleFrage];
  frageText.textContent = f.frage;

 for (var i = 0; i < 3; i++) { 
    antwortButtons[i].textContent = f.antworten[i];
  };
}


