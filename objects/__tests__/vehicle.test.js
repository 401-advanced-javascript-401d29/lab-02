'use strict';

const Vehicle = require('../vehicle-class.js');
const Factory = require('../vehicle-factory.js');

describe('Vehicles', () => {

  describe('Car', () => {

    let car = new Vehicle.Car('foo');

    test('has 4 wheels', () => {
      expect(car.wheels).toEqual(4);
    });

    test('can drive', () => {
      expect(car.drive()).toBeTruthy();
    });

    test('can stop', () => {
      expect(car.stop()).toBeTruthy();
    });

    test('cannot do a wheelie', () => {
      expect(car.wheelie).toBeUndefined();
    });

  });

  describe('Motorcycle', () => {

    let motorcycle = new Vehicle.Motorcycle('foo');

    test('has 2 wheels', () => {
      expect(motorcycle.wheels).toEqual(2);
    });

    test('can drive', () => {
      expect(motorcycle.drive()).toBeTruthy();
    });

    test('can stop', () => {
      expect(motorcycle.stop()).toBeTruthy();
    });

    test('can do a wheelie', () => {
      expect(motorcycle.wheelie()).toBeTruthy();
    });

  });

});

describe('Vehicles', () => {

  describe('Car', () => {

    let car = new Factory.Car('foo');

    test('has 4 wheels', () => {
      expect(car.wheels).toEqual(4);
    });

    test('can drive', () => {
      expect(car.drive()).toBeTruthy();
    });

    test('can stop', () => {
      expect(car.stop()).toBeTruthy();
    });

    test('cannot do a wheelie', () => {
      expect(car.wheelie).toBeUndefined();
    });

  });

  describe('Motorcycle', () => {

    let motorcycle = new Factory.Motorcycle('foo');

    test('has 2 wheels', () => {
      expect(motorcycle.wheels).toEqual(2);
    });

    test('can drive', () => {
      expect(motorcycle.drive()).toBeTruthy();
    });

    test('can stop', () => {
      expect(motorcycle.stop()).toBeTruthy();
    });

    test('can do a wheelie', () => {
      expect(motorcycle.wheelie()).toBeTruthy();
    });

  });

});


// COMMENTED OUT UNTIL I CAN REFACTOR OLD LAB 2 CODE

// 'use strict';
//
// const VehicleConstructor = require('../vehicle-constructor.js');
//
// let types = ['Constructor'];
//
// describe('Vehicles', () => {
//
//   describe('Car', () => {
//    
//     function getCar(type) {
//       switch(type) {
//         case 'Constructor':
//           return new VehicleConstructor.Car('foo');
//         default:
//           return {};
//       }
//     }
//    
//     types.forEach( type => {
//      
//       let car = getCar(type);
//
//       it(`${type} (Car) has 4 wheels`, () => {
//         expect(car.wheels).toEqual(4);
//       });
//
//       it(`${type} (Car) can drive`, () => {
//         expect(car.drive()).toBeTruthy();
//       });
//
//       it(`${type} (Car) can stop`, () => {
//         expect(car.stop()).toBeTruthy();
//       });
//
//       it(`${type} (Car) cannot do a wheelie`, () => {
//         expect(car.wheelie).toBeUndefined();
//       }); 
//     });
//
//   });
//
//   describe(`Motorcycle`, () => {
//
//     function getMotorcycle(type) {
//       switch(type) {
//         case 'Constructor':
//           return new VehicleConstructor.Motorcycle('foo');
//         default:
//           return {};
//       }
//     }
//
//     types.forEach( type => {
//
//       let motorcycle = getMotorcycle(type);
//
//       it(`${type} (Motorcycle) has 2 wheels`, () => {
//         expect(motorcycle.wheels).toEqual(2);
//       });
//
//       it(`${type} (Motorcycle) can drive`, () => {
//         expect(motorcycle.drive()).toBeTruthy();
//       });
//
//       it(`${type} (Motorcycle) can stop`, () => {
//         expect(motorcycle.stop()).toBeTruthy();
//       });
//
//       it(`${type} (Motorcycle) cannot do a wheelie`, () => {
//         expect(motorcycle.wheelie()).toBeTruthy();
//       });
//      
//     });
//
//   });
//
// });
