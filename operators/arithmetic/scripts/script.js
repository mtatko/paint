let a, b
while (!a && a != 0) {
  a = parseFloat(prompt('Wprowadź liczbę a:'))
}
while (!b && b != 0) {
  b = parseFloat(prompt('Wprowadź liczbę b:'))
}

document.body.innerHTML += `a = ${a}: ${typeof a}<br>`
document.body.innerHTML += `b = ${b}: ${typeof b}<br>`

document.body.innerHTML += `<br>`

document.body.innerHTML += `Suma liczb ${a} i ${b} wynosi ${a + b}<br>`
document.body.innerHTML += `Różnica liczb ${a} i ${b} wynosi ${a - b}<br>`
document.body.innerHTML += `Iloczyn liczb ${a} i ${b} wynosi ${a * b}<br>`

if (b == 0) {
  document.body.innerHTML += `Nie można dzielić przez zero`
} else {
  document.body.innerHTML += `Wynik dzielenia liczb ${a} i ${b} wynosi ${a / b}<br>`
  document.body.innerHTML += `Reszta z dzielenia liczb ${a} i ${b} wynosi ${a % b}<br>`
}

document.body.innerHTML += `<br>`

document.body.innerHTML += `a++: ${++a} - pre-increment<br>`
document.body.innerHTML += `++a: ${a++} - post-increment<br>`
document.body.innerHTML += `<br>`
document.body.innerHTML += `++b: ${++b} - pre-increment<br>`
document.body.innerHTML += `b++: ${b++} - post-increment<br>`