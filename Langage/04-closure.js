function externe(msg) {
  function interne() {
    console.log(msg);
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
