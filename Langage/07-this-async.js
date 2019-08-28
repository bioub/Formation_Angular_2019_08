class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    setTimeout(() => {
      console.log(`Hello ${this.name} !!!`);
    }, 100);
  }
}

const romain = new Contact('Romain');
romain.hello();

/*
for (var i=0; i<btns.length; i++) {
  btns[i].addEventListener('click', (event) => {
    // DANS CE TYPE DE CODE
    // NE PLUS UTILISER THIS
    event.target.innerText++;
  });
}
*/
