class Cat {
  constructor(child) {
    this.child = child;
    this.sound = child.sound;
  }

  speak() {
    console.log(this.sound);
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
