module.exports = { addToDisplay };
module.exports = { testEnvironment: 'jsdom'};

const display = document.getElementById("display");
const result = document.getElementById("result");

let leftBracket = 0;
let rightBracket = 0;

//function which clear all display numbers
function clearDisplay() {
    display.value = " ";
    result.value = " ";
};
//function which do mathematic algoritms like (addition,substraction,multiplication,division e.t.c)
function addToDisplay(input) {
    display.value += input;
};

//function which he add left bracket
function bracetLeft(input = "("){
    if (display.value.slice(-1) !== "(") {
        display.value += input;
        leftBracket++; 
    }
};
//function which he add right bracket
function bracetRight(input = ")"){
    if(rightBracket < leftBracket){
        display.value += input;
        rightBracket++; 
    } else{
        alert("Nie można dodać zamykającego nawiasu przed otwierającym");
    }
};
//function which he add square symbol
function square(input = "√") {
    try{
        display.value += input;
    } catch(e){
        display.value = "Nie dodano znaku pierwiastka";
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
        display.value = "Nie dodano znaku pierwiastka";
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
