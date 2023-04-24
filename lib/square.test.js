const { Square } = require('./shapes');


describe('Square', () => {
  test('generates square SVG correctly', () => {
    const shape = new Square("yo", "red", "red");
    expect(shape.render()).toEqual('<rect x="60" y="60" width="100" height="100" fill="red"/>');
  });
});
