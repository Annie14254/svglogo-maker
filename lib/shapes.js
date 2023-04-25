
class Triangle {
    constructor(color){
        this.color = color;
    }

    render(initials){
        return `<svg version = "1.1" width = "300" height = "200" xmlns="http://www.w3.org/2000/svg"><polygon points = "50, 15 100, 100 0, 100" fill = ${fillcolor}><text x = "150" y = "150" font-size = "60" text-anchor = "middle" fill = ${textcolor}>${initials}</text></polygon></svg>`
    }
}


class Square {
    constructor(color){
        this.color = color;
    }
    
    render(intials){
        return `<svg version = "1.1" width = "300" height = "200" xmlns="http://www.w3.org/2000/svg"><rect x = "10" y = "10" width="80" height = "80" fill = ${fillcolor}><text x = "150" y = "150" font-size = "60" text-anchor = "middle" fill = ${textcolor}>${initials}</text></rect></svg>`
    }
}

class Circle {
    constructor(color){
        this.color = color;
    }

    render(intials){
        return `<svg version = "1.1" width = "300" height = "200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy = "100" r="80" fill = ${fillcolor}><text x = "150" y = "150" font-size = "60" text-anchor = "middle" fill = ${textcolor}>${initials}</text></circle></svg>`
    }
}

modules.exports = Triangle
modules.exports = Square
modules.exports = Circle