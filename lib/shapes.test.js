const { Circle, Triangle, Square } = require("./shapes.js")
const { generateSVG } = require("./cli.js")

describe("Test Triangle", () => {
    test("color should match input", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
    test("SVG should output correctly", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        const text = "ABC";
        const textColor = "yellow";
        const expectedOutput = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="125" font-size="50" text-anchor="middle" fill="yellow">ABC</text></svg>`;
        expect(generateSVG(shape, text, textColor)).toEqual(expectedOutput);
    })
})

describe("Test Circle", () => {
    test("color should match input", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<cricle cx="25" cy="75" r="20" fill="blue"/>');
    })
    test("SVG should output correctly", () => {
        const shape = new Circle();
        shape.setColor("blue");
        const text = "ABC";
        const textColor = "yellow";
        const expectedOutput = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><cricle cx="25" cy="75" r="20" fill="blue" /><text x="150" y="125" font-size="50" text-anchor="middle" fill="yellow">ABC</text></svg>`;
        expect(generateSVG(shape, text, textColor)).toEqual(expectedOutput);
    })
})

describe("Test Square", () => {
    test("color should match input", () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />');
    })
    test("SVG should output correctly", () => {
        const shape = new Square();
        shape.setColor("blue");
        const text = "ABC";
        const textColor = "yellow";
        const expectedOutput = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="blue" /><text x="150" y="125" font-size="50" text-anchor="middle" fill="yellow">ABC</text></svg>`;
        expect(generateSVG(shape, text, textColor)).toEqual(expectedOutput);
    })
})