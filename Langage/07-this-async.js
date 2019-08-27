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
