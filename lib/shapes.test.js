// lib/shapes.test.js
const { Circle, Triangle } = require('./shapes'); // Adjusted path, removed Square



describe('Circle', () => {
  test('renders correctly', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });
});

describe('Square', () => {
  test('renders correctly', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toEqual('<rect width="100%" height="100%" fill="green" />');
  });
});

describe('Triangle', () => {
  test('renders correctly', () => {
    const triangle = new Triangle();
    triangle.setColor('purple');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="purple" />');
  });
});
const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
  test('renders correctly', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });
});

describe('Square', () => {
  test('renders correctly', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toEqual('<rect width="100%" height="100%" fill="green" />');
  });
});

describe('Triangle', () => {
  test('renders correctly', () => {
    const triangle = new Triangle();
    triangle.setColor('purple');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="purple" />');
  });
});



