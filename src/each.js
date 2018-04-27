module.exports = function(list, fn) {
    let keys, values;

    // normalize objects/array to lists of keys/values
    // maybe abstract this bit so it can be reused
    if (typeof list === 'object') {
        keys = Object.keys(list);
        values = Object.values(list);
    } else {
        // creates an orders list 0...N where n is the length of the provided array
        keys = [...Array(list.length).keys()];
        values = list;
    }

    // for every key/value pair, execute the provided function with the key/value as arguments
    for (let i=0; i<keys.length; i++) {
        const key = keys[i];
        const value = values[i];
        fn(value, key);
    }
};
