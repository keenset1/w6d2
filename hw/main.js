function displayFavFood(obj) {
    for (let food in obj) {
        if (Array.isArray(obj[food])) {
            console.log(food + ": " + obj[food].join(", "));
        } else {
            console.log(food + ": " + obj[food]);
        }
    }
}

displayFavFood(person3);




// Person prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// printInfo method using an arrow function
Person.prototype.printInfo = () => {
    console.log(`Name: ${this.name} | Age: ${this.age}`);
};

// addAge method using an arrow function
Person.prototype.addAge = (years) => {
    this.age += years;
};

// Create two people using the 'new' keyword
const person1 = new Person("Laurent Pierre", 30);
const person2 = new Person("Kami Pierre", 25);

// Print both of their infos
person1.printInfo();
person2.printInfo();

// Increment one person's age by 3 years
person1.addAge(3);

// Print the updated info for person1
person1.printInfo();





const checkStringLength = (str) => {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        resolve("Big word");
      } else {
        resolve("Small Number");
      }
    });
  };
  
  checkStringLength("hello loloo")
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  
