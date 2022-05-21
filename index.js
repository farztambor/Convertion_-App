let feetEl = document.getElementById("feet-el")
let inputEl = document.getElementById("input-el")
let gallonEl = document.getElementById("gallons-el")
let poundsEl = document.getElementById("pounds-el")
let inputVal = 20


inputEl.textContent = inputVal

feetEl.textContent = inputVal+ " meters = "  + (inputVal*3.28084).toFixed(3) + " feet " + "| " + inputVal+ " feet " + (inputVal*0.3048) + " = meters" 
gallonEl.textContent =  inputVal + " liters = "  + (inputVal*0.264172).toFixed(3) + " gallons " + "| " + inputVal+" gallons " + (inputVal*3.78541).toFixed(3) + " liters"
// 0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos
poundsEl.textContent =  inputVal + " pounds = "  + (inputVal*0.453592).toFixed(3) + " kilos " + "| " + inputVal+" kilos " + (inputVal*2.20462).toFixed(3) + " pounds"
