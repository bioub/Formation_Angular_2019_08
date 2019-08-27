function externe(msg) {
  setTimeout(() => {
    console.log(msg);
  }, 100);
}

externe('Hello');

// pile
// ^
// |
// |            log
// |externe ... =>
// +---------------------------------> temps
//
function backupIndex(saveIndex) {
  return () => {
    console.log(saveIndex);
  };
}

for (var i=0; i<3; i++) {
  setTimeout(backupIndex(i), 100);
}

// 0 1 2

for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}

// 0 1 2
