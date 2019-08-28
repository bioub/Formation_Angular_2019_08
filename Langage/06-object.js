// object en JS le modèle est dynamique
// map, hashtable, dict, tableau associatif

// object literal
const coords = {
  x: 1,
  y: 2,
};

console.log(coords.x); // 1
coords.z = 3;
console.log(coords.z); // 3
delete coords.y;
console.log(coords.y); // undefined

// constructor function
/*
function Contact(name) {
  if (name && name.length > 3) {
    this.name = name;
  }
}

Contact.prototype.hello = function() {
  return 'Hello ' + this.name;
};
*/
class Contact {
  constructor(name) {
    if (name && name.length > 3) {
      this.name = name;
    }
  }
  hello() {
    return 'Hello ' + this.name;
  }
}

const romain = new Contact('Romain');
const edouard = new Contact('Edouard');

console.log(romain.name); // Romain
console.log(romain.hello()); // Hello Romain

console.log(romain.hasOwnProperty('name')); // true
console.log(romain.hasOwnProperty('hello')); // false
