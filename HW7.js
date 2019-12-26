// generator
let gener = document.getElementById("gener");
function num(arg) {
	return arg * 10 % 2222;
}
function* random(val, count) {
	var value = val;
	for (var i = 1; i <= count; i++) {
		value = num(value);
		yield value;
	}
}
let generator = random(1, 5);
console.log(generator.next().value); //10
console.log(generator.next().value); //100
console.log(generator.next().value); //1000
console.log(generator.next().value); //1112
console.log(generator.next().value); //10
console.log(generator.next().done); // true


// iterator
let str = "HeLlo WoRlD";

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // выводит символы один за другим
}



class Animal {
	constructor(name) {
	  this.speed = 0;
	  this.name = name;
	}
	run(speed) {
	  this.speed += speed;
	  console.log(`${this.name} бежит со скоростью ${this.speed}.`);
	}
	stop() {
	  this.speed = 0;
	  class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed += speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} стоит.`);
  }
}

// Наследуем от Animal указывая "extends Animal"
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} прячется!`);
  }
}

let rabbit = new Rabbit("Белый кролик");

rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.hide(); // Белый кролик прячется!(`${this.name} стоит.`);
	}
  }
  
  // Наследуем от Animal указывая "extends Animal"
  class Rabbit extends Animal {
	hide() {
		console.log(`${this.name} прячется!`);
	}
  }
  
  let rabbit = new Rabbit("Белый кролик");
  
  rabbit.run(5); // Белый кролик бежит со скоростью 5.
  rabbit.hide(); // Белый кролик прячется!

  let sayMixin = {
    say(phrase) {
      console.log(phrase);
    }
  };
  
  let sayHiMixin = {
    __proto__: sayMixin, // 
  
    sayHi() {
      // вызываем метод родителя
      super.say(`Привет, ${this.name}`); // (*)
    },
    sayBye() {
      super.say(`Пока, ${this.name}`); // (*)
    }
  };
  
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  // копируем методы
  Object.assign(User.prototype, sayHiMixin);
  
  // теперь User может сказать Привет
  new User("Вася").sayHi(); // Привет, Вася!