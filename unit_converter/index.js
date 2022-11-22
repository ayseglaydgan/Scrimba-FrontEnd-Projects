const inputvalue = document.getElementById('value');
const convertBtn = document.getElementById('convert-btn');
const lengthEl = document.getElementById('length');
const massEl = document.getElementById('mass');
const volumeEl = document.getElementById('volume');

const FEET_TO_METER = 0.3048;
const METER_TO_FEET = 3.28084;
const KILO_TO_POUND = 2.20462;
const POUND_TO_KILO = 0.453592;
const GALLON_TO_LITER = 3.78541;
const LITER_TO_GALLON = 0.264172;




convertBtn.addEventListener('click', function() {
    console.log(inputvalue.value);
    let value = inputvalue.value;
    convertLenght(value);
    convertVolume(value);
    convertWeight(value);

})

function convertLenght(value){
    let meter = (value * FEET_TO_METER).toFixed(3);
    let feet = (value * METER_TO_FEET).toFixed(3);
    console.log(feet);
    console.log(meter);
    let result = `
    <p>
        <p id='result'>
            ${value} meter = ${feet} feet | ${value} feet = ${meter} meters
        </p>
    </p>
`
    lengthEl.innerHTML += result;                       

}


function convertWeight(value){
    let kilogram = (value * POUND_TO_KILO).toFixed(3);
    let pound = (value * KILO_TO_POUND).toFixed(3);
    console.log(kilogram);
    console.log(pound);
    let result = `
    <p>
        <p id='result'>
            ${value} kilos = ${pound} pounds | ${value} pounds = ${kilogram} kilos
        </p>
    </p>
`
    massEl.innerHTML += result;
}

function convertVolume(value){
    let liter = (value * GALLON_TO_LITER).toFixed(3);
    let gallon = (value * LITER_TO_GALLON).toFixed(3);
    console.log(liter); 
    console.log(gallon);
    let result = `
    <p>
        <p id='result'>
            ${value} liters = ${gallon} gallons | ${value} gallons = ${liter} liters
        </p>
    </p>
`
    volumeEl.innerHTML += result;
}
