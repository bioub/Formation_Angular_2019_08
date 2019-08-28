function externe(msg) {
  const b = 'closure';
  function interne() {
    const a = 'local';
    console.log(msg, b);
  }
  interne();
}

externe('Hello');

// pile
// ^
// |log
// |interne
// |externe
// +---------------------------------> temps
//
