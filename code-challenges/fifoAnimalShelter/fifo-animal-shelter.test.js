'use strict';

const fifo = require('./fifo-animal-shelter.js');

describe('Testing the shelter', () =>{
  it('should successfully add animals to the shelter', () => {

    let fifoShelter = new fifo.shelter();

    let fido = new fifo.animal('fido', 'dog');
    let peaches = new fifo.animal('peaches', 'cat');
    let spot = new fifo.animal('spot', 'dog');
    let jasper = new fifo.animal('jasper', 'cat');

    fifoShelter.enqueue(fido);
    fifoShelter.enqueue(peaches);
    fifoShelter.enqueue(spot);
    fifoShelter.enqueue(jasper);
    expect(fifoShelter.animals[0].name).toEqual('fido');
    expect(fifoShelter.animals[1].name).toEqual('peaches');
    expect(fifoShelter.animals[2].name).toEqual('spot');
    expect(fifoShelter.animals[3].name).toEqual('jasper');
  });

  it('Dequeue should return the type of animal requested that was put into the shelter first', () => {
    let fifoShelter = new fifo.shelter();

    let fido = new fifo.animal('fido', 'dog');
    let peaches = new fifo.animal('peaches', 'cat');
    let spot = new fifo.animal('spot', 'dog');
    let jasper = new fifo.animal('jasper', 'cat');

    fifoShelter.enqueue(fido);
    fifoShelter.enqueue(peaches);
    fifoShelter.enqueue(spot);
    fifoShelter.enqueue(jasper);
    expect(fifoShelter.dequeue('cat').name).toEqual('peaches');
    expect(fifoShelter.animals[0].name).toEqual('fido');
  });

  it('If preferred is not dog or cat, dequeue should return the first animal that was put in the shelter', () => {
    let fifoShelter = new fifo.shelter();

    let fido = new fifo.animal('fido', 'dog');
    let peaches = new fifo.animal('peaches', 'cat');
    let spot = new fifo.animal('spot', 'dog');
    let jasper = new fifo.animal('jasper', 'cat');

    fifoShelter.enqueue(fido);
    fifoShelter.enqueue(peaches);
    fifoShelter.enqueue(spot);
    fifoShelter.enqueue(jasper);
    expect(fifoShelter.dequeue('horse').name).toEqual('fido');
    expect(fifoShelter.animals[0].name).toEqual('peaches');
  });

  it('If no preference is provided, dequeue should return the animal that was put in the shelter first', () => {
    let fifoShelter = new fifo.shelter();

    let fido = new fifo.animal('fido', 'dog');
    let peaches = new fifo.animal('peaches', 'cat');
    let spot = new fifo.animal('spot', 'dog');
    let jasper = new fifo.animal('jasper', 'cat');

    fifoShelter.enqueue(fido);
    fifoShelter.enqueue(peaches);
    fifoShelter.enqueue(spot);
    fifoShelter.enqueue(jasper);
    expect(fifoShelter.dequeue().name).toEqual('fido');
    expect(fifoShelter.animals[0].name).toEqual('peaches');
  });

  it('If animal type is not available, dequeue should return a message', () => {
    let fifoShelter = new fifo.shelter();

    let peaches = new fifo.animal('peaches', 'cat');
    let jasper = new fifo.animal('jasper', 'cat');

    fifoShelter.enqueue(peaches);
    fifoShelter.enqueue(jasper);
    expect(fifoShelter.dequeue('dog')).toEqual('Sorry there is no dog');
  });
  it('If the shelter is empty, dequeue should return a message', () => {
    let fifoShelter = new fifo.shelter();
    expect(fifoShelter.dequeue('dog')).toEqual('The shelter is empty');
  });
});
