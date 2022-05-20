let num1 = 2
let num2 = 8
let sum = document.getElementById("sum-el")


document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
    let sumM = "Sum:  "
    sum.textContent = sumM + num1 + num2
}

function subtract(){
    let dif = "Difference: "
    sum.textContent = dif + (num1 - num2)
}

function divide(){
    let quot = "Quotient: "
    sum.textContent = quot + num1 / num2
}


function multiply(){
    let prod = "Product: "
    sum.textContent = prod + num1 * num2
}
