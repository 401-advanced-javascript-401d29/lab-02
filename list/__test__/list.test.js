'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  test('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  test('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  test('shifts\\removes items from the beginning of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.shift()).toEqual('a');
    expect(stuff.data[0]).toEqual('b');
  });

  // test('unshifts\\adds items to the beginning the data set', () => {
  //   let stuff = new List();
  //   stuff.push('a');
  //   stuff.push('b');
  //   expect(stuff.unshift('z')).toEqual('a');
  //   expect(stuff.data[0]).toEqual('z');
  // })
});

// NEW VERSION OF STARTER CODE... MAY NEED TO REVIEW AND REFACTOR
// 'use strict';
//
// // These 2 should be interchangeable!
// const List = require('../list.js');
// // const List = require('../list-constructor.js');
//
// describe('List Data Structure', () => {
//
//   it('starts with a length of -1 and an empty data set', () => {
//     let stuff = new List();
//     expect(stuff.length).toEqual(0);
//     expect(stuff.data).toEqual({});
//   });
//
//   it('pushes items to the end of the data set', () => {
//     let stuff = new List();
//     stuff.push('a');
//     stuff.push('b');
//     expect(stuff.length).toEqual(2);
//     expect(stuff.data[1]).toEqual('b');
//   });
//
// });
