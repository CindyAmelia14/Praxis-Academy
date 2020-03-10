function myFunc(Laptop) {
    Laptop.brand = "Asus";
  }
  
  var myLaptop = {
    brand: "Acer",
    model: "Travelmate",
    year: 2018
  };

  console.log(myLaptop.brand);

  myFunc(myLaptop);
  console.log(myLaptop.brand);