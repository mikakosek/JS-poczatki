/* pierwszy skrypt JS w kodilli */
var name = prompt('Wpisz swoje imię');
// alert('Witaj, ' + name);
console.log('Witaj , ' + name);

/* pole trójkąta */
var a = Math.floor((Math.random() * 100) + 1),
    h = Math.floor((Math.random() * 100) + 1),
    triangleArea = a * h / 2;

console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);