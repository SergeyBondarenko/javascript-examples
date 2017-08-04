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

console.log('Prototype chain:');
console.log('1. t:', Object.getPrototypeOf(t));
console.log('2. Tiger:', Object.getPrototypeOf(Tiger));
console.log('3. Cat:', Object.getPrototypeOf(Cat));
