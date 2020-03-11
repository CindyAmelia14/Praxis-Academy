function Fruit (type) {
    this.type = type;
    this.color = 'unknown';
}

Fruit.prototype.getInformation = function() {
    return 'This ' + this.type + ' is ' +this.color + '.';
}

let lime = new Fruit('Mexican Lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());