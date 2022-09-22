const a = parseFloat(prompt("Wprowadź liczbę a"));
const b = parseFloat(prompt("Wprowadź liczbę b"));

document.body.innerHTML += `${a} + ${b} = ${a+b}<br>`;
document.body.innerHTML += `${a} - ${b} = ${a-b}<br>`;
document.body.innerHTML += `${a} * ${b} = ${a*b}<br>`;
document.body.innerHTML += `${a} / ${b} = ${a/b}<br>`;
