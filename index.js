let feetEl = document.getElementById("feet-el")
let inputEl = document.getElementById("input-el").value
let gallonEl = document.getElementById("gallons-el")
let poundsEl = document.getElementById("pounds-el")
let convertBtn = document.getElementById("convert-btn")
let inputVal = inputEl


convertBtn.addEventListener("click", function(){
    inputEl = document.getElementById("input-el").value
    inputVal = inputEl
    convert()
})

function convert(){
    inputEl.textContent = inputVal
    feetEl.textContent = inputVal+ " meters = "  + (inputVal*3.28084).toFixed(3) + " feet " + "| " + inputVal+ " feet " + (inputVal*0.3048).toFixed(3) + " = meters" 
    gallonEl.textContent =  inputVal + " liters = "  + (inputVal*0.264172).toFixed(3) + " gallons " + "| " + inputVal+" gallons " + (inputVal*3.78541).toFixed(3) + " liters"
    poundsEl.textContent =  inputVal + " pounds = "  + (inputVal*0.453592).toFixed(3) + " kilos " + "| " + inputVal+" kilos " + (inputVal*2.20462).toFixed(3) + " pounds"
}
    convert()
