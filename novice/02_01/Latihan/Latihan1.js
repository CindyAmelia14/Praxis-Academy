const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`Nama saya adalah ${this.name}. dan Saya cantik ? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = "Cindy";
me.isHuman = true;

me.printIntroduction();