/**
 * @description Adds two numbers
 * @param x {number}
 * @param y {number}
 */
const add = (x, y) => {
    if (typeof (x) !== 'number' || typeof(y) !== 'number') {
        throw new Error();
    }

    return x - y;
};

module.exports = add;