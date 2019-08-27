// Module IIFE Immediately Invoked Function Expression
// (function () {
  /**
   * Une fonction qui dit bonjour
   * @param {string} name Un nom
   */
  function hello(name) {
    return `Hello ${name}`;
  }

  const names = ['Romain', 'Edouard'];

  for (const name of names) {
    console.log(hello(name));
  }

// }());
