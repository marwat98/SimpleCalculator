
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
function square(input = "√") {
    try{
        display.value += input;
    } catch(e){
        display.value = "Nie dodano znaku pierwiastka";
    }
}
function mod(input = " mod "){
    try{
        display.value += input;
    } catch(e){
        display.value = "Nie dodano znaku mod";
    }
}


function equals() {
    try {
        switch(true){
            case display.value.includes("√"):
                const number = display.value.replace("√", "").trim();
                if (!isNaN(number) && number !== "") {
                    const sqrtResult = math.evaluate(`sqrt(${number})`);
                    result.value = `${sqrtResult}`;
                } else {
                throw new Error("Nieprawidłowy format pierwiastka");
                }
            break;
            case display.value.includes("mod"):

            break;
            default:
                result.value = math.evaluate(display.value);
        }
    } catch (e) {
        display.value = "Błąd obliczenia";
        console.error("Błąd:", e);
    }
}
