// To make an object literal:
const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7
}
// All keys will be turned into strings!

// 187 To retrieve a value:
dog.age; //7
dog["age"]; //7

//updating values
dog.breed = "mutt";
dog["age"] = 8;

class Dog {
    constructor(name, year) {
        this.name = name;
        year = 2000;
    }
}


let dog1 = new Dog("J", 2000);

// exercise 29
const product = {
    name: "Gummy Bears",
    inStock: true,
    price: 1.99,
    flavors: ["grape", "apple", "cherry"]
}

// exercise 30
const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;

//188

const midterms = { danielle: 96, thomas: 78 }

midterms.danielle = 50 // modify