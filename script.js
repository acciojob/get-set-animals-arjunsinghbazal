// class Animal {
// 	constructor(species){
// 		this._species=species;
// 	}
// 	get species(){
// 		return this._species;
// 	}
// 	makeSound(){
// 		console.log("the "+this._species+" makes sound.")
// 	}
// }

// class Cat extends Animal {
// 	purr(){
// 		console.log("purr");
// 	}
// }

// class Dog extends Animal {
// 	bark(){
// 		console.log("woof");
// 	}
// }
// // let mew = new Cat("cat");
// // mew.makeSound();
// // mew.purr();
// // let daff = new Dog("dog");
// // daff.makeSound();
// // daff.bark();


// // Do not change the code below this line
// window.Animal = Animal;
// window.Dog = Dog;
// window.Cat = Cat;
//complete this code
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

class Cat extends Animal {
  purr() {
    console.log(`purr`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`woof`);
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
