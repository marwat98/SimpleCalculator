
const display = document.getElementById("display");
const result = document.getElementById("result");

let leftBracket = 0;
let rightBracket = 0;

function clearDisplay() {
    display.value = " ";
    result.value = " ";
}

function addToDisplay(input) {
    display.value += input;
}
function bracetLeft(input = "("){
    if (display.value.slice(-1) !== "(") {
        display.value += input;
        leftBracket++; 
    }
};

function bracetRight(input = ")"){
    if(rightBracket < leftBracket){
        display.value += input;
        rightBracket++; 
    } else{
        alert("Nie można dodać zamykającego nawiasu przed otwierającym");
    }
};

function equals() {
    try {
        result.value = math.evaluate(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
