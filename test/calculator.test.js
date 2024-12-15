const {addToDisplay,clearDisplay,bracketLeft,bracketRight,square,mod,squareOfNumberMultiplication,equals}= require('../script');

let display,result;

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
test("If mod is display", () =>{
  document.getElementById = jest.fn().mockReturnValue({value : 'mod'});
  expect(() => mod().toBe("mod"));
});
test("If sqaureOfNumberMultiplication is display", () =>{
  document.getElementById = jest.fn().mockReturnValue({value : '²'});
  expect(() => squareOfNumberMultiplication().toBe("²"));
});
test("If addition two numbers", () =>{
  document.getElementById = jest.fn().mockReturnValue({value : '2+2'});
  expect(() => equals().toBe("4"));
});
test("If minus two numbers", () =>{
  document.getElementById = jest.fn().mockReturnValue({value : '2-2'});
  expect(() => equals().toBe("0"));
});
test("If multiplication two numbers", () =>{
  document.getElementById = jest.fn().mockReturnValue({value : '2*2'});
  expect(() => equals().toBe("4"));
});
test("If devide two numbers", () =>{
  document.getElementById = jest.fn().mockReturnValue({value : '2/2'});
  expect(() => equals().toBe("1"));
});
test("Complicated calculations expect calculations 8", () =>{
  document.getElementById = jest.fn().mockReturnValue({value : '(2+2)*2'});
  expect(() => equals().toBe("8"));
});
test("Calculations with number pi", () =>{
  document.getElementById = jest.fn().mockReturnValue({value : '3 + 3,141592654'});
  expect(() => equals().toBe("6,141592654"));
});
test("Second calculations with number pi", () =>{
  document.getElementById = jest.fn().mockReturnValue({value : '(73 + 4) * 3,141592654'});
  expect(() => equals().toBe("241,902634326"));
});
test("Calcuations √81", () =>{
  document.getElementById = jest.fn().mockReturnValue({value : '√81'});
  expect(() => equals().toBe("9"));
});
test("Second calcuations 25√5", () =>{
  document.getElementById = jest.fn().mockReturnValue({value : '25√5'});
  expect(() => equals().toBe("55,901699437"));
});
test("Calculations 81 mod 5", () =>{
  document.getElementById = jest.fn().mockReturnValue({value : '81 mod 5'});
  expect(() => equals().toBe("1"));
});
test("Wrong Calculations 81 mod 5", () =>{
  document.getElementById = jest.fn().mockReturnValue({value : '81 mod 5'});
  expect(() => equals().toBe("2"));
});
