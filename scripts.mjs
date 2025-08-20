//============================================================================
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
// adventurer.companion.companion = {
//     name: "Frank",
//     type: "Flea",
//     belongings: ["hat", "sunglasses"]
// }

// console.log(adventurer)

// Give Robin the following method:

// adventurer.roll = function (mod = 0) {
//     const result = Math.floor(Math.random() *20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`)
// }
// Now we have a method for “dice rolls, a common way to handle outcomes in adventuring games. Test this method by calling adventurer.roll() a few times.
// adventurer.roll();
// adventurer.roll();
// adventurer.roll();

//================================End of Part 1 ==============================

// Part 2. Classy Fantasy
class Character {
    constructor (name, health, inventory, roll) {
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
// const robin = new Character ("Robin");
// console.log(`The new class BEFORE adding the relevant data for each character looks like the following:\n`, robin)
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// console.log(`The new class AFTER adding the relevant data for each character looks like the following:\n`, robin);


// Test the roll funciton for each character
// console.log("Let's make each character use the roll function: ")
// robin.roll();
// robin.companion.roll();
// robin.companion.companion.roll();

//================================End of Part 2 ==============================

// Part 3: Class Features

// Take a look at our example below, and expand upon it with your own properties and methods. What else should an adventurer be able to do? What other properties should they have?
// Answer: health, companion from the parent class

// class Adventurer extends Character {
//     constructor (name, health, companion, role) {
//     super(name, health, companion);
//     // Adventurers have specialized roles.
//     this.role = role;
//     // Every adventurer starts with a bed and 50 gold coins.
//     this.inventory.push("bedroll", "50 gold coins");
//     }
//     // Adventurers have the ability to scout ahead of them.
//     scout () {
//     console.log(`${this.name} is scouting ahead...`);
//     super.roll();
//     }
//     }


// Next, create a Companion class with properties and methods specific to the companions.
class Companion extends Character {
    constructor (name, health, companion, inventory, role) {
        super(name, health, companion, inventory);
        this.role = role;
    }
    scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
    }
    
}

// Finally, change the declaration of Robin and the companions to use the new Adventurer and Companion classes. NOT CLEAR TO ME!

// const robin = new Adventurer ("Robin");
// console.log(`The new class BEFORE adding the relevant data for each character looks like the following:\n`, robin)
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Companion("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Companion("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// console.log(`The new class AFTER adding the relevant data for each character looks like the following:\n`, robin);

//================================End of Part 3 ==============================

// Part 4: Class Uniforms

// Using the static keyword:
// Add a static MAX_HEALTH property to the Character class, equal to 100.
// Add a static ROLES array to the Adventurer class, with the values “Fighter”, “Healer” and “Wizard.// ” Feel free to add other roles, if you desire! Add a check to the constructor of the Adventurer class that ensures the given role matches one of these values.

class Adventurer extends Character {
    static MAX_HEALTH = 100;
    static ROLES = ["Fighter", "Healer", "Wizard"];

    constructor (name, health, companion, role) {
    super(name, health, companion);
    // Adventurers have specialized roles.
    if (Adventurer.ROLES.includes(role)) {
        this.role = role;
    }

    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
    }
    }

    // console.log(Adventurer.MAX_HEALTH)
    // console.log(Adventurer.ROLES)

//================================End of Part 4 ==============================

// Part 5: Gather Your Party and Factories
class AdventurerFactory {
    constructor (role) {
    this.role = role;
    this.adventurers = [];
    }
    generate (name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
    return this.adventurers[index];
    }
    findByName (name) {
    return this.adventurers.find((a) => a.name === name);
    }
    }
    const healers = new AdventurerFactory("Healer");
    const robin = healers.generate("Robin");
    
    // console.log(healers);
    // console.log(robin);


//================================End of Part 5 ==============================

// Part 6: Developing skills
// Create an additional method, duel(), for the Adventurer class with the following functionality:
   // Accept an Adventurer as a parameter.
   // Use the roll() functionality to create opposing rolls for each adventurer.
   // Subtract 1 from the adventurer with the lower roll.
   // Log the results of this “round” of the duel, including the rolls and current health values.
   // Repeat this process until one of the two adventurers reaches 50 health.
   // Log the winner of the duel: the adventurer still above 50 health.





//================================End of Part 6 ==============================



// Part 7: Adventure Forth





//================================End of Part 7 ==============================

