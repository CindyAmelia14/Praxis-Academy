class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    greet() {
        return '${this,name} says hello.';
    }
}

class Mage extends Hero {
    constructor(name, level, spell) {
        super(name, level);
        this.spell = spell;
    }
}