// 'use strict';
//
// class Car {
// }
//
// module.exports = Car;


'use strict';

class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  drive() {
    return 'Moving Forward';
  }

  stop() {
    return 'Stopping';
  }
}

class Car extends Vehicle{
  constructor(name) {
    super(name, 4); // All cars have 4 wheels but not all cars are Kia's
  }
}

class Motorcycle extends Vehicle {
  constructor(name) {
    super(name, 2); // All motorcycles have 4 wheels but not all cars are Harley's
  }

  wheelie() {
    return 'Wheee!';
  }
}



module.exports = {Car, Motorcycle};




