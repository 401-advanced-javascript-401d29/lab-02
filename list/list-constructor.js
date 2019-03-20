'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

// Shift - removed from beginning of an array and change the indices of remaining objects
// Maybe found help here https://stackoverflow.com/questions/30135113/shifting-a-javascript-array-one-spot-to-the-left-without-using-the-shift-met
List.prototype.shift = function() {
  let returnValue = this.data[0];
  for(let a = 0 ; a < this.length ; a++){
    this.data[a] = this.data[a+1];
  }
  this.length --;
  return returnValue;
};

// Unshift - adds a value to the beginning of an array and change the indices of the remaining objects
// Information found here - https://stackoverflow.com/questions/33459020/function-to-add-item-to-beginning-of-an-array-without-unshift-method
List.prototype.unshift = function(item) {{
  for (let i = this.length - 1; i >=0; i--) {
    this.data[i +1] = this.data[i];
  }
  this.data[0] = item;
}
};

// forEach() {
//
// }
//


module.exports = List;


// NEW VERSION OF STARTER CODE... MAY NEED TO REVIEW AND REFACTOR
// 'use strict';
// //
// // function List() {
// //   this.length = 0;
// //   this.data = {};
// // }
// // /**
// //  * Add item to the end of the list
// //  * @param item
// //  */
// // List.prototype.push = function(item) {
// //   this.data[this.length] = item;
// //   this.length++;
// // };
// //
// // /**
// //  * // Remove an item from the end of the list and return it's value
// //  * @returns {*}
// //  */
// // List.prototype.pop = function() {
// //   let returnValue = this.data[this.length];
// //   delete this.data[this.length];
// //   this.length--;
// //   return returnValue;
// // };
// //
// // module.exports = List;


