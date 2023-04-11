//complete this code
class Animal {
	constructor(species){
		this._species=species;
	}
	get species(){
		return this._species;
	}
	makeSound(){
		console.log("the "+this.species+"makes sound.")
	}
}

class Dog extends Animal {
	purr(){
		console.log("purr");
	}
}

class Cat extends Animal {
	bark(){
		console.log("woof");
	}
}
let cat = new Cat("cat");
cat.makeSound();
cat.purr();
let dog = new Dog("dog");
dog.makeSound();
dog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
