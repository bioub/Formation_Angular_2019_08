setTimeout(() => console.log('A'), 1000);
setTimeout(() => console.log('B'), 500);
setTimeout(() => console.log('C'), 0);
setTimeout(() => console.log('D'), 500);
console.log('E');

// ECBDA

// pile
// ^
// |
// |                             log
// |st - st - st - st - log .... =>  .... =>  ....
// +-------------------------------------------> temps
//                      E        C

// file d'attente :


// Conférence de Jake Archibald sur event loop
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
