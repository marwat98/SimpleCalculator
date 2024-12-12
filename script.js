
const display = document.getElementById("display");
const result = document.getElementById("result");

let leftBracket = 0;
let rightBracket = 0;

//function which clear all display numbers
function clearDisplay() {
    const display = document.getElementById("display");
    const result = document.getElementById("result");

    if(!display || !result) {
        throw new Error("Display or result element does not exist in the DOM");
    } else {
        display.value = ""; 
        result.value = ""; 
    }
};
//function which do mathematic algoritms like (addition,substraction,multiplication,division e.t.c)
function addToDisplay(input) {
    const display = document.getElementById("display");
    if(display){
        display.value += input;
    } else {
        throw new Error("Display element nothing exist");
    }
};

//function which he add left bracket
function bracketLeft(input = "(") {
    const display = document.getElementById("display");
    if (!display) {
        throw new Error("Display element not found");
    }
    if (!input) {
        throw new Error("Input cannot be empty");
    }
    const displayValue = display.value || '';
    if (!displayValue.endsWith("(")) {
        display.value += input;

        if (typeof leftBracket === 'undefined') {
            throw new Error("leftBracket variable is not defined");
        }
        leftBracket++; 
    } else {
        throw new Error("Cannot add left bracket after another left bracket");
    }
};

//function which he add right bracket
function bracketRight(input = ")"){
    const display = document.getElementById("display");
    if (!display) {
        throw new Error("Display element not found");
    }
    if(leftBracket <= 0){
        throw new Error("Can't addition right bracket without left bracket");
    }
    if(rightBracket < leftBracket){
        display.value += input;
        rightBracket++; 
    } else{
        alert("Nie można dodać zamykającego nawiasu przed otwierającym");
    }
};
//function which he add square symbol
function square(input = "√") {
    const display = document.getElementById("display");
    if (!display) {
        throw new Error("Display element not found");
    } else {
        display.value += input;
    }
};
//function which he add mod symbol
function mod(input = "mod"){
    try{
        display.value += input;
    } catch(e){
        display.value = "Nie dodano znaku pierwiastka";
    }
};
//function which he add square of number symbol
function squareOfNumberMultiplication(input = "²"){
    try{
        display.value += input;
    } catch(e){
        display.value = "Nie dodano znaku kwadratu liczby";
    }
};
//function which calculations mathematic operations
function equals() {
    try {
        switch(true){
            case display.value.includes("√"):

                const number = display.value.replace("√", "").trim();
                try{
                    const sqrtResult = math.evaluate(`sqrt(${number})`);
                    result.value = `${sqrtResult}`;
                }catch (error) {
                    throw new Error("Nieprawidłowy format pierwiastka");
                }

            break;
            case display.value.includes("mod"):

                const numberMod = display.value.replace("mod", "%");
                try {
                    const modResult = math.evaluate(numberMod);
                    result.value = `${modResult}`; // Wyświetl wynik w result.value
                } catch (error) {
                    throw new Error("Nieprawidłowe wyrażenie dla modulo");
                }
            break;
            case display.value.includes("²"):
                const multiplicationDouble = display.value.replace("²", "").trim();
                try{
                    const squareOfNumber = math.evaluate(`${multiplicationDouble} * ${multiplicationDouble}`);
                    result.value = `${squareOfNumber}`;
                }catch (error) {
                    throw new Error("Niepoprawne obliczenie kwadratu liczby");
                }
            break;
            default:
                result.value = math.evaluate(display.value);
        }
    } catch (e) {
        display.value = "Błąd obliczenia";
        console.error("Błąd:", e);
    }
};

module.exports = { addToDisplay, clearDisplay , bracketLeft,bracketRight, square};
