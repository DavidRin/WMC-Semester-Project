const zitate = {
  vetinari: [
    "Macht ist effizient eingesetzte Angst.",
    "Man muss Menschen lenken, nicht zwingen.",
    "Ordnung ist kein Zufall.",
    "Politik ist die Kunst des Überlebens."
   
  ],
  vimes: [
    "Gib einem Mann ein Feuer, und ihm ist warm für einen Tag. Zünde ihn an, und ihm ist warm für den Rest seines Lebens.",
    "Ich bin nicht der Meinung, dass Menschen im Grunde gut sind. Ich glaube, Menschen sind im Grunde Menschen. Und ein Teil davon ist, dass sie manchmal wie Engel sein können, aber ein anderer Teil ist, dass sie eben auch sehr, sehr schlecht sein können.",
    "Das Ganze war die Stiefel-Theorie der sozioökonomischen Ungerechtigkeit. Mumm verdiente fünfhundert Dollar im Monat plus Spesen. Ein wirklich gutes Paar Lederstiefel kostete fünfzig Dollar. Aber ein erschwingliches Paar Stiefel, die in der Regenzeit etwa ein oder zwei Saisons hielten und dann undicht wurden, kostete etwa zehn Dollar. [...] Aber die Sache war die, dass gute Stiefel Jahre und Jahre hielten. Jemand, der es sich leisten konnte, fünfzig Dollar für ein Paar Stiefel auszugeben, hatte nach zehn Jahren immer noch trockene Füße, während der arme Teufel, der sich nur billige Stiefel leisten konnte und in derselben Zeit hundert Dollar für Stiefel ausgegeben hatte, immer noch nasse Füße hatte..",
    "Gerechtigkeit ist kein Luxus."
  ],
  weatherwax: [
    "Wo das Chaos auf die Ordnung trifft, gewinnt meist das Chaos, weil es besser organisiert ist.",
    "Richtig ist richtig.",
    "Magie ist nicht alles.",
    "Man tut, was getan werden muss."
  ],
  rincewind: [
    "Laufen ist auch eine Strategie.",
    "Heldentum ist überbewertet.",
    "Warum immer ich?",
    "Ich wollte nie hier sein."
  ],
  ogg: [
    "When you break rules, break 'em good and hard.",
    "Ein Glas geht noch.",
    "Familie ist alles.",
    "Lachen ist wichtig."
  ],
  stibbons: [
    "Wissenschaft erklärt alles.",
    "Magie folgt Regeln.",
    "Das Experiment ist schiefgelaufen.",
    "Theorie bestätigt!"
  ]
};

var containerListe = document.getElementsByClassName("bild-container");

for (var i = 0; i < containerListe.length; i = i + 1) {
  var container = containerListe[i];
  var person = container.getAttribute("data-person");
  var blase = container.getElementsByClassName("sprechblase")[0];

  // Klick auf Bild
  container.onclick = function() {
    var pers = this.getAttribute("data-person");
    var bl = this.getElementsByClassName("sprechblase")[0];
    var liste = zitate[pers];
    var zufall = Math.floor(Math.random() * liste.length);

    bl.textContent = liste[zufall];

    // Sichtbarkeit umschalten
    if (bl.style.display == "block") {
      bl.style.display = "none";
    } else {
      bl.style.display = "block";
    }
  }
}