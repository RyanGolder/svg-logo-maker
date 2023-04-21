class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<polygon points="50,200 150,200 100,100" fill="${this.shapeColor}"/>`;
  }
}
class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<rect x="100" y="125" width="100" height="100" fill="${this.shapeColor}"/>`;
  }
}
class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<circle cx="100" cy="125" r="60" fill="${this.shapeColor}" />`;
  }
}

module.exports = { Triangle, Square, Circle };
