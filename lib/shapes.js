class Shape {
  constructor() {
    this.color = 'black';
  }

  setColor(color) {
    this.color = color;
  }


  render() {
    throw new Error('Render method must be implemented by subclasses');
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="200" height="200" fill="${this.color}" />`;
  }
}

// Export the classes
export { Shape, Triangle, Circle, Square };

  