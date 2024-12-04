let display = document.getElementsById("display");

function clear(){
    display.value = "";
};
function addToDisplay(input){
    display.value += input;
};
function equals(){
    display.value = eval(display.value);
};