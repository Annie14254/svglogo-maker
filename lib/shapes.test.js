// import classes

const {Triangle, Square, Circle} = require("./shapes")

// instantiate a new object and pass a known value through, e.g. if color = purple, then this.color = purple
describe('Triangle', () => {
    describe('Instatiation', () => {
        it("properly instatiates the triangle with a given color", () => {
            const fillcolor = "red";
            const testObject = new Triangle(fillcolor);
            expect(testObject).toBeInstanceOf(Triangle)
            expect(testObject.fillcolor).toEqual("red")
        })
        it("properly renders the given SVG code for the triangle", () => {
            const initials = "SVG"
            const fillcolor = "red"
            const textcolor = "red"
            const testObject = new Triangle(fillcolor, initials, textcolor)
            const testRender = testObject.render(fillcolor, initials, textcolor)
            expect(testRender).toEqual('<svg version = "1.1" width = "300" height = "200" xmlns="http://www.w3.org/2000/svg"><polygon points = "145, 15 239, 179 59, 179" fill = "red"></polygon><text x = "150" y = "150" font-size = "60" text-anchor = "middle" fill = "red">SVG</text></svg>')
        })
    })
})

describe('Square', () => {
    describe('Instatiation', () => {
        it("properly instatiates the square with a given color", () => {
            const fillcolor = "red";
            const testObject = new Square(fillcolor);
            expect(testObject).toBeInstanceOf(Square)
            expect(testObject.fillcolor).toEqual("red")
        })
        it("properly renders the given SVG code for the square", () => {
            const initials = "SVG"
            const fillcolor = "blue"
            const textcolor = "blue"
            const testObject = new Square(fillcolor, initials, textcolor)
            const testRender = testObject.render(fillcolor, initials, textcolor)
            expect(testRender).toEqual(`<svg version = "1.1" width = "300" height = "200" xmlns="http://www.w3.org/2000/svg"><rect x = "75" y = "35" width="150" height = "150" fill = "blue"></rect><text x = "150" y = "150" font-size = "60" text-anchor = "middle" fill = "blue">SVG</text></svg>`)
    })
})
})

describe('Circle', () => {
    describe('Instatiation', () => {
        it("properly instatiates the circle with a given color", () => {
            const fillcolor = "red";
            const testObject = new Circle(fillcolor);
            expect(testObject).toBeInstanceOf(Circle)
            expect(testObject.fillcolor).toEqual("red")
        })
        it("properly renders the given SVG code for the circle", () => {
            const initials = "SVG"
            const fillcolor = "purple"
            const textcolor = "purple"
            const testObject = new Circle(fillcolor, initials, textcolor)
            const testRender = testObject.render(fillcolor, initials, textcolor)
            expect(testRender).toEqual(`<svg version = "1.1" width = "300" height = "200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy = "120" r="80" fill = "purple"></circle><text x = "150" y = "150" font-size = "60" text-anchor = "middle" fill = "purple">SVG</text></svg>`)
    })
})
})