/* łączenie tablic */
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
    maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'],
    allNames = femaleNames.concat(maleNames);

var newName = prompt("Podaj nowe imię");

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
}

console.log(allNames.sort());