
const getDisplay = () => document.getElementById("display");
const getResult = () => document.getElementById("result");

let leftBracket = 0;
let rightBracket = 0;

function displayShowPanel(input){
    return function(){
        const display = getDisplay();
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
    if(!display || !result) {
        throw new Error("Display or result element does not exist in the DOM");
    } else {
        display.value = ""; 
        result.value = ""; 
    }
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
function equals(display) {
        switch(true){
            case "√":
                if(!display.value.includes("√")) {
                    throw new Error('Brak symbolu √ w wyrażeniu');
                }
                const number = display.value.replace("√", "").trim();
                try {
                    const sqrtResult = math.evaluate(`sqrt(${number})`);
                    result.value = `${sqrtResult}`;
                } catch (error) {
                    throw new Error("Nieprawidłowy format pierwiastka");
                }
            break;
            case "mod":
                if(!display.value.includes("mod")) {
                    throw new Error('Brak symbolu mod w wyrażeniu');
                }
                const numberMod = display.value.replace("mod", "%");
                try {
                    const modResult = math.evaluate(numberMod);
                    result.value = `${modResult}`; // Wyświetl wynik w result.value
                } catch (error) {
                    throw new Error("Nieprawidłowe wyrażenie dla modulo");
                }
            break;
            case "²":
                if (!display.value.includes("²")) {
                    throw new Error('Brak symbolu ² w wyrażeniu');
                }
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
};

module.exports = { addToDisplay, clearDisplay , bracketLeft,bracketRight, square, mod, squareOfNumberMultiplication,equals};

