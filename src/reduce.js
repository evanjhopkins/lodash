const each = require('./each');
module.exports = function reduce(list, fn, accumulator) {
    each(list, (...args) => {
        accumulator = fn(accumulator, ...args)
    });
    return accumulator;
};
