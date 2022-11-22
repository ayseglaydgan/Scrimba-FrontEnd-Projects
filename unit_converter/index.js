const inputValue = document.getElementById('value');
const convertBtn = document.getElementById('convert-btn');
const length = document.getElementById('length');



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
    console.log(feet);
    console.log(meter);
    let result = `
    <p>
        <p>
            ${Value} meter = ${feet} feet
        </p>

        <p>
        ${Value} feet = ${meter} meters
        </p>
    </p>
`
     length.innerHTML += result;                       

}

function convertWeight(Value){
    let kilogram = Value * 0.453592;
    let pound = Value * 2.20462;
    console.log(kilogram);
    console.log(pound);
}

function convertVolume(Value){
    let liter = Value * 0.264172;
    let gallon = Value * 3.78541;
    console.log(liter); 
    console.log(gallon);
}
