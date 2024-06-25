class Key {
  private signature: number;

  constructor() {
    this.signature = Math.floor(Math.random() * 1000000);
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    } else {
      console.log("Door is closed. Can't enter.");
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key === this.key) {
      this.door = true;
      console.log('Door is open.');
    } else {
      console.log('Wrong key. Door is still closed.');
    }
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
