let a = 10
let b = '10'

document.body.innerHTML += `a = ${a}: ${typeof a}<br>`
document.body.innerHTML += `b = ${b}: ${typeof b}<br>`

document.body.innerHTML += `<br>`

document.body.innerHTML += `a == b: ${a == b}<br>`
document.body.innerHTML += `a === b: ${a === b}<br>`
document.body.innerHTML += `a != b: ${a != b}<br>`
document.body.innerHTML += `a !== b: ${a !== b}<br>`

document.body.innerHTML += `<br>`

document.body.innerHTML += `a < b: ${a < b}<br>`
document.body.innerHTML += `a <= b: ${a <= b}<br>`
document.body.innerHTML += `a > b: ${a > b}<br>`
document.body.innerHTML += `a >= b: ${a >= b}<br>`
