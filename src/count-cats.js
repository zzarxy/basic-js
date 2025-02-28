const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(matrix) {
    matrix = matrix.flat()
    let cats = 0;
    for (const element in matrix) {
        if (matrix[element] == '^^') { cats += 1; }
    }
    return cats
}

module.exports = {
    countCats
};
