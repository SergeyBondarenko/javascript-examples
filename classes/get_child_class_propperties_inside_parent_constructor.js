class Cat {
  constructor(child) {
    this.child = child;
  }

  speak() {
    console.log(this.child.sound);
  }
}

class Tiger extends Cat {
  constructor(name) {
    super({
      name: name,
      sound: `${name} roars!!!`
    });
  }
}

const t = new Tiger('Artem');
t.speak();
