// utils/generateSvg.js
const { Circle, Square, Triangle } = require('../lib/shapes');

let genShape;

const generateSvg = ({ shape, text, textColor, shapeColor }) => {
  switch (shape) {
    case 'Triangle':
      genShape = new Triangle(text, textColor, shapeColor, shape);
      break;
    case 'Circle':
      genShape = new Circle(text, textColor, shapeColor, shape);
      break;
    case 'Square':
      genShape = new Square(text, textColor, shapeColor, shape);
      break;
  }
  return genShape.render();
};

module.exports = generateSvg;
