function berechneIP() {


  // IP-Adresse aus dem Textfeld holen
  var ip = document.getElementById("ip").value;

  // Suffix aus dem Eingabefeld holen
  // Number() wandelt den Text in eine Zahl um
  var suffix = Number(document.getElementById("suffix").value);



  // Prüfen ob etwas fehlt oder der Suffix keine Zahl ist und korrekt ist
  if (ip == "" || (isNaN(suffix))|| suffix<0 ||suffix>32){
    alert("Bitte IP-Adresse und Suffix eingeben");
    return; // Funktion abbrechen
  }



  // IP-Adresse an den Punkten trennen
  var teile = ip.split(".");

  // Eine IP-Adresse muss 4 Teile haben
  if (teile.length != 4) {
    alert("IP-Adresse ist ungültig");
    return;
  }


  // Jeden Teil der IP-Adresse überprüfen
  for (var i = 0; i < 4; i++) {

    // Text in Zahl umwandeln
    teile[i] = Number(teile[i]);// in zahl

    // Jeder Teil muss zwischen 0 und 255 liegen
    if (teile[i] < 0 || teile[i] > 255) {
      alert("IP-Adresse ist ungültig");
      return;
    }
  }


  // Array für die Subnetzmaske (4 Zahlen)
  var maske = [];

  // Anzahl der verbleibenden Netzbits
  var restBits = suffix;

  // Für jedes Oktett der Maske
  for (var i = 0; i < 4; i++) {

    // Wenn noch mindestens 8 Bits übrig sind
    if (restBits >= 8) {

      // Dieses Oktett ist komplett auf 1 gesetzt
      maske[i] = 255;

      // 8 Bits wurden verbraucht
      restBits = restBits - 8;

    } else {

      // Teilweise gesetztes Oktett berechnen
      maske[i] = 256 - Math.pow(2, 8 - restBits);

      // Danach sind keine Bits mehr übrig
      restBits = 0;
    }
  }



  // Arrays für Netzwerk- und Broadcast-Adresse
  var netz = [];
  var broadcast = [];

  // Für jedes Oktett
  for (var i = 0; i < 4; i++) {

    // Netzwerkadresse:
    // IP UND Subnetzmaske
    netz[i] = teile[i] & maske[i];

    // Broadcastadresse:
    // Netzwerk ODER invertierte Maske
    broadcast[i] = netz[i] | (255 - maske[i]);
  }


  var hosts = 0;

  // Nur wenn es mehr als 2 Hostadressen gibt
  if (suffix < 31) {

    // Formel: 2^(32 - suffix) - 2
    hosts = Math.pow(2, 32 - suffix) - 2;
  }


  // Subnetzmaske anzeigen
  document.getElementById("maske").textContent =
    maske.join(".");

  // Netzwerkadresse anzeigen
  document.getElementById("netz").textContent =
    netz.join(".");

  // Broadcastadresse anzeigen
  document.getElementById("broadcast").textContent =
    broadcast.join(".");

  // Hostanzahl anzeigen
  document.getElementById("hosts").textContent =
    hosts;
}