const { Triangle } = require('./shapes');


describe('Triangle', () => {
  test('generates triangle SVG correctly', () => {
    const shape = new Triangle("yo", "red", "red");
    expect(shape.render()).toEqual('<polygon points="50,200 150,200 100,100" fill="red"/>');
  });
});
