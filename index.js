const _ = require('./src');

const shortList = ['audi', 'bmw', 'mercedes', 'honda', 'toyota', 'ford', 'scion', 'volvo', 'chevy', 'gm'];
const object = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};

function appendX(str) {
    return str + 'x';
}

function stringifyKeyValue(value, key) {
    return key + value;
}


const newArr = [];
_.each(shortList, x => {
    newArr.push(x + 'x');
});
// console.log('each', newArr);


const eachedArr = [];
_.each(object, (value, key) => {
    eachedArr.push(key + value);
});
// console.log('eached object', eachedArr);

//
// const mapArr = _.map(shortList, appendX);
// console.log('map', mapArr);
// const mapObj = _.map(object, stringifyKeyValue);
// console.log('mapObj', mapObj);

console.log(_.reduce([1, 2, 3, 4, 5, 6, 7, 8, 9], (sum, n) => {
    return sum + n;
}, 0));