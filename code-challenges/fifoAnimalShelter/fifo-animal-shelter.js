'use strict';

class Animal {
  constructor(name, type) {
    this.name = name,
    this.type = type
  }
}

class AnimalShelter {
  constructor() {
    this.animals = [];
  }

  enqueue(animal) {
    this.animals.push(animal);
  }

  dequeue(preferred) {
    let prefAnimal = `Sorry there is no ${preferred}`;
    if (this.animals[0] === undefined) {
      return ('The shelter is empty');
    }

    if (preferred !== 'dog' && preferred !== 'cat') {
      prefAnimal = this.animals[0]; //first one in, so first one out
      this.animals.splice(0, 1);
      return prefAnimal;
    }

    for(let i = 0; i < this.animals.length; i++) {
      if (this.animals[i].type === preferred) {
        prefAnimal = this.animals[i];
        this.animals.splice(i, 1);
        i++;
        break;
      }
    }
    return prefAnimal;
  }
}

let fifoShelter = new AnimalShelter();

// let fido = new Animal('fido', 'dog');
// let spot = new Animal('spot', 'dog');
// let peaches = new Animal('peaches', 'cat');
// let jasper = new Animal('jasper', 'cat');

// fifoShelter.enqueue(fido);
// fifoShelter.enqueue(peaches);
// fifoShelter.enqueue(spot);
// fifoShelter.enqueue(jasper);
// console.log(fifoShelter);
// console.log(fifoShelter.dequeue());
// console.log(fifoShelter);

module.exports = {
  animal: Animal,
  shelter: AnimalShelter,
};
