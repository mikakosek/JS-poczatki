/* czas na stringi :) */
var animal = "Zielone słonie".toUpperCase(),
    text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.".replace("Papugi", animal);

console.log(text.substring(0,text.length/2));