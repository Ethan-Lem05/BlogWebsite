const xyz = require("./people"); // imports whole js object
console.log(xyz.people + " " + xyz.ages);

const {people} = require("./people"); // imports only people
console.log(people);