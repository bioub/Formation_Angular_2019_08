// setTimeout(() => {}, 1000);
// timeout(1000).then(() => {});

// function timeout(delayMs) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// timeout(1000).then(() => console.log('1s'));

// (async () => {
//   await timeout(1000);
//   console.log('1s')
// })();

const { Observable } = require('rxjs');
const { take } = require('rxjs/operators');

function interval(delayMs) {
  return new Observable((observer) => {
    const intervalId = setInterval(() => {
      observer.next(delayMs / 1000);
    }, delayMs);
    return () => {
      clearInterval(intervalId);
    };
  });
}

// -----1-----1-----1-----1-----1-----1-----1-----1----
// mapTo('x')
// -----x-----x-----x-----x-----x-----x-----x-----x----
// delay(200)
// ------x-----x-----x-----x-----x-----x-----x-----x----
// take(3)
// ------x-----x-----x|

const subscription = interval(1000)
  .pipe(
    mapTo('x'),
    delay(200),
    // take(3)
  )
  .subscribe(() => console.log('1s'));

setTimeout(() => {
  subscription.unsubscribe();
}, 3500)
