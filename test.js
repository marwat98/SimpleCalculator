const { addToDisplay } = require('./script');

beforeEach(() => {
    document.body.innerHTML = `
      <div id="display"></div>
      <div id="result"></div>
    `;
  });

test('show display values',()=> {

    const display = document.getElementById('display');

    addToDisplay('1+2');

    expect(display.value).toBe('1+2');
   
});