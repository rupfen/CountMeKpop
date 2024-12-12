//Erfassen und Speichern der Lyrics aus dem ersten Eingabefeld.

//InputFeld liest was im HTML Feld mit der ID "enter" steht
const InputFeld = document.getElementById("enter");



//die Suchfunktion sucht innerhalb der Eingabe des Input-Felds ziffern,buchstaben,worte und Sätze
function Suchfunktion(text) {
  //return = suche und gib mir den Wert zurück

  return {
// ziffer,wort,letter
   ziWoLe: text.search()
}
}



function readAndSave() {
  //Z. 8 Inhalt wird gelesen Z.9 speichert Eingabe als String
  let eingabe = InputFeld.value;

}

//Erfassen des Suchbegriffs aus dem zweiten Eingabefeld.
