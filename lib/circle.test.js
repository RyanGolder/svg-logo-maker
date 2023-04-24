const { Circle } = require('../utils/generate-shape');


describe('Circle', () => {
  test('generates circle SVG correctly', () => {
    const shape = new Circle();
    shape.setColor('red');
    shape.setRadius(50);
    expect(shape.render()).toEqual('<circle cx="50" cy="50" r="50" fill="red" />');
  });
});
