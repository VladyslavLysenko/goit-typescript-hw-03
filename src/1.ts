/*
  Клас Student, який містить три властивості: name, age та grade. 
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, 
  напишіть скорочену ініціалізацію.
*/

class Student {
  constructor(public name: string, public age: number, public grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}

export {};

const student = new Student('John', 25, 'B');

console.log(student);
