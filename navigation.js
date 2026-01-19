function navAuswahl(wert) {

  if (wert === "bg") {
    hintergrundBild();
  }

  else if (wert === "fontStandard") {
    schriftStandard();
  }

  else if (wert === "fontHellblau") {
    schriftHellblau();
  }

  else if (
    wert === "index.html" ||
    wert === "galerie.html" ||
    wert === "seite2.html"
  ) {
    window.location.href = wert;
  }

  // Dropdown zurücksetzen, damit Auswahl mehrfach funktioniert
  document.querySelector("select").value = "";
}