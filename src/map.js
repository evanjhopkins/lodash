const each = require('./each');

module.exports = function(list, fn) {
    const newList = [];
    // returns a new array with the results of the provided function
    each(list, (...args) => newList.push(fn(...args)));
    return newList;
};
