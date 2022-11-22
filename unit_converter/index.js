const inputValue = document.getElementById('value');
const convertBtn = document.getElementById('convert-btn');
const length = document.getElementById('length');
const mass = document.getElementById('mass');
const volume = document.getElementById('volume');



convertBtn.addEventListener('click', function() {
    console.log(inputValue.value);
    let value = inputValue.value;
    convertLenght(value);
    convertVolume(value);
    convertWeight(value);
    


})

function convertLenght(Value){
    let meter = Value * 0.3048;
    let feet = Value * 3.28084;
    meter = meter.toFixed(3);
    feet = feet.toFixed(3);
    console.log(feet);
    console.log(meter);
    let result = `
    <p>
        <p id='result'>
            ${Value} meter = ${feet} feet | ${Value} feet = ${meter} meters
        </p>
    </p>
`
    length.innerHTML += result;                       

}

function convertWeight(Value){
    let kilogram = Value * 0.453592;
    let pound = Value * 2.20462;
    kilogram = kilogram.toFixed(3);
    pound = pound.toFixed(3);
    console.log(kilogram);
    console.log(pound);
    let result = `
    <p>
        <p id='result'>
            ${Value} kilos = ${pound} pounds | ${Value} pounds = ${kilogram} kilos
        </p>
    </p>
`
    mass.innerHTML += result;
}

function convertVolume(Value){
    let liter = Value * 0.264172;
    let gallon = Value * 3.78541;
    liter = liter.toFixed(3);
    gallon = gallon.toFixed(3);
    console.log(liter); 
    console.log(gallon);
    let result = `
    <p>
        <p id='result'>
            ${Value} liters = ${gallon} gallons | ${Value} gallons = ${liter} liters
        </p>
    </p>
`
    volume.innerHTML += result;
}
