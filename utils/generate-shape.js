const { Triangle, Square, Circle } = require("../lib/shapes");

// Shape generator
function generateShape(data) {
  if (data.shape.toLowerCase() === "circle") {
    const circle = new Circle(data.text, data.textColor, data.shapeColor);

    return `<?xml version="1.0" standalone="no"?>
      <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      ${circle.render()}
      <text x="100" y="135" font-size="30" text-anchor="middle" fill="${circle.textColor}">${circle.text}</text>
      </svg>
      `;
  } else if (data.shape.toLowerCase() === "square") {
    const square = new Square(data.text, data.textColor, data.shapeColor);
    return `<?xml version="1.0" standalone="no"?>
      <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      ${square.render()}
      <text x="110" y="120" font-size="30" text-anchor="middle" fill="${square.textColor}">${square.text}</text>
      </svg>
      `;
  } else {
    const triangle = new Triangle(data.text, data.textColor, data.shapeColor);
    return `
      <?xml version="1.0" standalone="no"?>
      <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      ${triangle.render()}
      <text x="100" y="180" font-size="30" text-anchor="middle"fill="${triangle.textColor}">${triangle.text}</text>
      </svg>
      `;
  }
}

module.exports = generateShape;
