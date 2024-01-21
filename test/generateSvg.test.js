// utils/generateSvg.test.js
const generateSvg = require('../utils/generateSvg'); // Corrected path

describe('generateSvg', () => {
  test('generates SVG for Circle', () => {
    const result = generateSvg({ shape: 'Circle', text: 'ABC', textColor: 'blue', shapeColor: 'red' });
    expect(result).toContain('<circle cx="150" cy="100" r="80" fill="red" />');
  });

  test('generates SVG for Square', () => {
    const result = generateSvg({ shape: 'Square', text: 'ABC', textColor: 'blue', shapeColor: 'green' });
    expect(result).toContain('<rect width="200" height="200" fill="green" />');
  });

  test('generates SVG for Triangle', () => {
    const result = generateSvg({ shape: 'Triangle', text: 'ABC', textColor: 'blue', shapeColor: 'purple' });
    expect(result).toContain('<polygon points="150, 18 244, 182 56, 182" fill="purple" />');
  });
});


