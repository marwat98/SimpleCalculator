const {addToDisplay}= require('../script');
const {clearDisplay}= require('../script');
const {bracketLeft}= require('../script');
const {bracketRight}= require('../script');
const {square}= require('../script');

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
test("Check if when i  addition left bracket gonna can addition number", () =>{
  document.getElementById = jest.fn().mockReturnValue({value : '(2'});
  expect(() => bracketLeft().toBe('(2'));
});
test("Check if when  i addition first number function gonna be work without left bracket", () =>{
  document.getElementById = jest.fn().mockReturnValue({value : '2'});
  expect(() => bracketLeft().toThrowError("First you must addition left bracket"));
});
test("Should throw error if don't hava left bracket", () =>{
  document.getElementById = jest.fn().mockReturnValue({value : '2)'});
  expect(() => bracketRight().toThrowError("First you must addition left bracket"));
});
test("Should perfom function", () =>{
  document.getElementById = jest.fn().mockReturnValue({value : '(2+2)'});
  expect(() => bracketRight().toBe("2+2"));
});
test("If sqaure is display", () =>{
  document.getElementById = jest.fn().mockReturnValue({value : '√'});
  expect(() => square().toBe("√"));
});
