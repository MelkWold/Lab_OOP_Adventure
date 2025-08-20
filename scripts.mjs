// Part 1: Humble Beginings
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
    }

// create a loop that logs each item in Robin’s inventory.

adventurer.inventory.forEach(item => {
    // console.log(item);
})

// Let’s give Robin a companion to travel with – a furry friend they call “Leo.”
adventurer.companion = {
    name: "Leo",
    type: "Cat"
}

// console.log(adventurer);
// Next, give Robin’s feline friend a friend of his own:
// Add a “companion” sub-object to “Leo” with the following properties:
   // The companion’s name is “Frank.”
   // The companion’s type is “Flea.”
   // The companion has its own belongings, which includes a small hat and sunglasses.
adventurer.companion.companion = {
    name: "Frank",
    type: "Flea",
    belongings: ["hat", "sunglasses"]
}

console.log(adventurer)

// Give Robin the following method:

adventurer.roll = function (mod = 0) {
    const result = Math.floor(Math.random() *20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
}
// Now we have a method for “dice rolls, a common way to handle outcomes in adventuring games. Test this method by calling adventurer.roll() a few times.
adventurer.roll();
adventurer.roll();
adventurer.roll();

//================================End of Part 1 ==============================

// Part 2. Classy Fantasy
class Character {
    constructor (name, roll) {
        this.name = name,
        this.health = 100,
        this.inventory = []
        this.roll = function (mod = 0) {
            const result = Math.floor(Math.random() *20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`);
    }
    
}
}

// Now, we can re-create Robin using the Character class!
const robin = new Character ("Robin");
console.log(`The new class BEFORE adding the relevant data for each character looks like the following:\n`, robin)
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(`The new class AFTER adding the relevant data for each character looks like the following:\n`, robin);


// Test the roll funciton for each character
console.log("Let's make each character use the roll function: ")
robin.roll();
robin.companion.roll();
robin.companion.companion.roll();

//================================End of Part 2 ==============================

// Part 3: Class Features
