function Cat(child) {
  this.child = child;
  this.sound = child.sound;
}

Cat.prototype.speak = function speak () {
  console.log(this.sound);
};

function Tiger(name) {
  Cat.call(this, {
    name: name,
    sound: `${name} roars!!!`
  }, 'tiger');
};

Tiger.prototype = Object.create(Cat.prototype);
Tiger.prototype.constructor = Tiger;
Tiger.parent = Cat.prototype;

const t = new Tiger('Artem');
t.speak();

console.log('Prototype chain:');
console.log('1. t:', Object.getPrototypeOf(t));
console.log('2. Tiger:', Object.getPrototypeOf(Tiger));
console.log('3. Cat:', Object.getPrototypeOf(Cat));
