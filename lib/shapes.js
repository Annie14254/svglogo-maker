class Shapes {

}

class Triangle extends Shapes {
    constructor(color){
        this.color = color;
    }

    render(initials){
        return '<svg>triangle with color</svg>'
    }
}


class Square extends Shapes {
    constructor(){

    }
}

class Circle extends Shapes {
    constructor(){

    }
}

modules.exports = Triangle
modules.exports = Square
modules.exports = Circle