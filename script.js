//Erfassen und Speichern der Lyrics aus dem ersten Eingabefeld.

//InputFeld liest, was in Feld "enter" steht
const InputFeld = document.getElementById("enter");

function werteAus() {
//Z. 8 Inhalt wird gelesen Z.9
    let eingabe = InputFeld.value;
    saveLyrics.push(eingabe);
}

//Erfassen des Suchbegriffs aus dem zweiten Eingabefeld.