
const getDisplay = () => document.getElementById("display");
const getResult = () => document.getElementById("result");

let leftBracket = 0;
let rightBracket = 0;

function displayShowPanel(input){
    return function(){
        let display = getDisplay();
        if (!display) {
            throw new Error("Nie znaleziono znaku: " + input);
        } else {
            display.value += input;
        }
    }
};
//High-Order Functions
const square = displayShowPanel("√");
const mod = displayShowPanel("mod");
const squareOfNumberMultiplication= displayShowPanel("²");

//function which clear all display numbers
function clearDisplay() {
    const display = getDisplay();
    const result = getResult();
    if(!display) {
        throw new Error("Display element does not exist in the DOM");
    }if(!result){
        throw new Error("Result element does not exist in the DOM");
    }
    display.value = ""; 
    result.value = ""; 
};
//function which do mathematic algoritms like (addition,substraction,multiplication,division e.t.c)
function addToDisplay(input) {
    const display = getDisplay();
    if(display){
        display.value += input;
    } else {
        throw new Error("Display element nothing exist");
    }
};
//function which he add left bracket
function bracketLeft(input = "(") {
    const display = getDisplay();
    if(!display) {
        throw new Error("Display element not found");
    }
    if(!input) {
        throw new Error("Input cannot be empty");
    }
    const displayValue = display.value || '';
    if(!displayValue.endsWith("(")) {
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
    const display = getDisplay();
    if(!display) {
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
//function which calculations mathematic operations
function equals() {
    const display = getDisplay();
    const result = getResult();

    if (display.value.includes("√")) {
        const number = display.value.replace("√", "").trim();
        if (isNaN(number) || number === "") throw new Error("Nieprawidłowy format pierwiastka");

        try {
            const sqrtResult = math.evaluate(`sqrt(${number})`);
            result.value = `${sqrtResult}`;
        } catch (error) {
            throw new Error("Nieprawidłowy format pierwiastka");
        }

    } else if (display.value.includes("mod")) {
        const numberMod = display.value.replaceAll("mod", "%");

        try {
            const modResult = math.evaluate(numberMod);
            result.value = `${modResult}`;
        } catch (error) {
            throw new Error("Nieprawidłowe wyrażenie dla modulo");
        }

    } else if (display.value.includes("²")) {
        const multiplicationDouble = display.value.replace("²", "").trim();
        if (isNaN(multiplicationDouble) || multiplicationDouble === "") throw new Error("Niepoprawne obliczenie kwadratu liczby");

        try {
            const squareOfNumber = math.evaluate(`${multiplicationDouble}^2`);
            result.value = `${squareOfNumber}`;
        } catch (error) {
            throw new Error("Niepoprawne obliczenie kwadratu liczby");
        }

    } else {
        try {
            result.value = math.evaluate(display.value);
        } catch (error) {
            throw new Error("Nieprawidłowe wyrażenie matematyczne");
        }
    }
};
module.exports = { addToDisplay, clearDisplay , bracketLeft,bracketRight, square, mod, squareOfNumberMultiplication,equals};

