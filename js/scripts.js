/* funkcja rysująca choinkę */
function rysujChoinke(liczbaPoziomow) {
    if (liczbaPoziomow < 1) {
        return "Nieprawidłowe dane";
    }
    var star = "";
    for (var i = 1; i < liczbaPoziomow; i++) {
        star += " ";
    }
    star += "*";
    console.log(star);
    for (var i = 1; i < liczbaPoziomow; i++) {
        star = star.replace(" *","**").concat("*");
        console.log(star);
    }
    return;
}

var liczba = prompt("Podaj liczbę poziomów");
rysujChoinke(liczba);