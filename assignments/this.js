/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding sets `this` to object or window value
* 2. implicit binding lets create functions off of objects easily with this. The this is always before the dot e.g myObj.myFunc() myObj is `this`
* 3. New binding helps create new objects using this and constructor functions. When using constructor functions it `this` refers to the specific instance of the object created by the constructor function. 
* 4. when the call or apply method is call this is the same as the function 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function displayWords(words){
    console.log(this);
    return words;
}
displayWords("These are words");
// Principle 2

// code example for Implicit Binding
const barbarian = {
    action: 'Draw Sword',
    displayAction: function(fightingWords){
        console.log(`I ${this.action} and ${fightingWords}`);
        console.log(this);
    }
};
barbarian.displayAction("These are fighting words");
// Principle 3

// code example for New Binding
function Character(player) {
    this.class = "Warlock";
    this.player = player;
    this.speak = function () {
      console.log(`hello i am ${player} and I am a ${this.class}`);
    };
}
const boyle = new Character('Boyle');
const holt = new Character('holt');
// Principle 4

// code example for Explicit Binding