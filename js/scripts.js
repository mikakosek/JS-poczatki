/* pierwszy skrypt JS w kodilli */
var name = prompt('Wpisz swoje imię');
// alert('Witaj, ' + name);
console.log('Witaj , ' + name);

/* funkcja wyliczająca pole trójkąta */
function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        return "Nieprawidłowe dane";
    }
    
    return a * h / 2;
}

var triangle1Area = getTriangleArea(Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)),
    triangle2Area = getTriangleArea(Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)),
    triangle3Area = getTriangleArea(Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1));

console.log('Pola trójkątów wynoszą: ' + triangle1Area + ', ' + triangle2Area + ' i ' + triangle3Area);