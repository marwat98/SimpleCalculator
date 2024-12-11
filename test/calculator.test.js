const {addToDisplay}= require('../script.js');
const {clearDisplay}= require('../script.js');
const {bracketLeft}= require('../script.js');

let display;
let result;

//JSDOM Side
beforeEach(() => {
  document.body.innerHTML = `
  <input id="display" value="">
  <input id="result" value="">
`;
  display = document.getElementById('display');
  result = document.getElementById('result');
});

//Test side
test("Check if value is display", ()=>{
  addToDisplay('0');
  expect(display.value).toBe('0');
});

test("Addition two values", () =>{
  addToDisplay("1");
  addToDisplay("+");
  addToDisplay("2");
  expect(display.value).toBe('1+2');
});

test("Minus two values", () =>{
  addToDisplay("5");
  addToDisplay("-");
  addToDisplay("2");
  expect(display.value).toBe('5-2');
});

test("Multiplication two values", () =>{
  addToDisplay("1");
  addToDisplay("*");
  addToDisplay("2");
  expect(display.value).toBe('1*2');
});

test("Substraction two values", () =>{
  addToDisplay("1");
  addToDisplay("/");
  addToDisplay("2");
  expect(display.value).toBe('1/2');
});

test("If clear values", () =>{
  clearDisplay();
  expect(display.value).toBe("");
  expect(result.value).toBe("");
});

test("Should throw an error if input is empty", () => {
  document.getElementById = jest.fn().mockReturnValue({ value: '' });
  expect(() => bracketLeft("")).toThrowError("Input cannot be empty");
});

test("Should throw an error if display dosen't exist", () =>{
  document.getElementById = jest.fn().mockReturnValue(null);
  expect(() => bracketLeft()).toThrowError("Display element not found");
});