/* pierwszy skrypt JS w kodilli */
var name = prompt('Wpisz swoje imię');
// alert('Witaj, ' + name);
console.log('Witaj , ' + name);

/* a może jednak sprawdzimy która liczba jest większa? */
var a = Math.floor((Math.random() * 100) + 1),
    b = Math.floor((Math.random() * 100) + 1),
    value = (a * a) + (2 * a * b) - (b * b),
    info = "Wynik działania (a*a)+(2*a*b)-(b*b) dla liczb a=" + a +" i b=" + b + " wynosi " + value + ". ";

switch (Math.sign(value)) {
    case -1:
        info += "Jest to liczba ujemna.";
        break;
    case 1:
        info += "Jest to liczba dodatnia.";
        break;
    case 0:
        info += "Jest to zero.";
        break;
}

console.log(info);

