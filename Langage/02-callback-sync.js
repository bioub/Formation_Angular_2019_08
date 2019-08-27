function hello(name) {
  return 'Hello ' + name;
}

const names = ['Romain', 'Edouard'];

names.forEach((name) => {
  console.log(hello(name));
});

console.log('Fin');
// pile
// ^
// |hello - log   hello - log
// |=>          - =>
// |forEach                    - log
// +---------------------------------> temps
//          Ro            Ed     Fin
