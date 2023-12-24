var Vector = function (components) {
    this.components = components;
    this.add = function (vector) {
        if (components.length !== vector.components.length) {
            throw new Error('Vectors have different length');
        }
        return new Vector(components.map((cur, index) => cur + vector.components[index]));
    }
    this.dot = function (vector) {
        if (components.length !== vector.components.length) {
            throw new Error('Vectors have different length');
        }
        return components.reduce((acc, cur, index) => acc + cur * vector.components[index], 0);
    }
    this.subtract = function (vector) {
        if (components.length !== vector.components.length) {
            throw new Error('Vectors have different length');
        }
        return new Vector(components.map((cur, index) => cur - vector.components[index]));
    }
    this.norm = function () {
        return Math.sqrt(components.reduce((acc, cur) => acc + cur * cur, 0));
    }
    this.toString = function () {
        return `(${this.components.join(',')})`;
    }
    this.equals = function (vector) {
        return components.every((cur, index) => cur === vector.components[index]);
    }
};

var a = new Vector([1, 2]);
var b = new Vector([3, 4]);
console.log(a.add(b)); // [4,6]