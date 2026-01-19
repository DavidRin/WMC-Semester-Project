// Ursprünglichen Hintergrund speichern
var originalHintergrund = getComputedStyle(document.body).backgroundImage;;
var originalFarbe = getComputedStyle(document.body).backgroundColor;

// Merkt sich, ob das Bild aktiv ist
var bildAktiv = false;

/* Schaltet zwischen Farbe und Hintergrundbild u */
function hintergrundBild() {

  // Wenn das Bild noch NICHT aktiv ist
  if (bildAktiv == false) {

    // Hintergrundbild setzen
    document.body.style.backgroundImage =
      "url('https://i0.wp.com/terrypratchett.com/management/wp-content/uploads/2022/03/Great-ATuin-II.jpg?resize=1536%2C1225&ssl=1')";

    // Bild anpassen
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

    //document.body.style.
    // Merken: Bild ist aktiv
    bildAktiv = true;
  }
  else {

    // Ursprünglichen Hintergrund wiederherstellen
    document.body.style.backgroundImage = originalHintergrund;
    document.body.style.backgroundColor = originalFarbe;

    // Merken: Bild ist aus
    bildAktiv = false;
  }
}
function schriftStandard() {
  document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
  document.body.style.fontStyle = "normal";
}

function schriftHellblau() {
  document.body.style.color = "lightblue";
}