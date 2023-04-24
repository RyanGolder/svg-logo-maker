const { Circle } = require('./shapes');


describe('Circle', () => {
  test('generates circle SVG correctly', () => {
    const shape = new Circle("yo", "red", "red");
    expect(shape.render()).toEqual('<circle cx="100" cy="125" r="60" fill="red" />');
  });
});
