const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!Array.isArray(arr)) { throw new Error("'arr' parameter must be an instance of the Array!") }
    console.log(arr)
    //arr = arr.slice(0)
    for (let element in arr) {
        if (!Number(arr[element])) {
            switch (arr[element]) {
                case '--discard-next':
                    arr[element] = null
                    arr[Number(element) + 1] = null;
                    continue;
                case '--discard-prev':
                    arr[element] = null
                    arr[Number(element) - 1] = null;
                    continue;
                case '--double-next':
                    arr[element] = null
                    if (arr[Number(element) + 1] !== undefined) {
                        arr[element] = arr[Number(element) + 1];
                    }
                    //if (typeof arr[Number(element) + 1] != 'number'){
                    //    arr[element] = '--double-next'
                    //}
                    continue;
                case '--double-prev':
                    arr[element] = null
                    if (arr[Number(element) - 1] !== undefined) {
                        arr[element] = arr[Number(element) - 1];
                    }
                    //if (typeof arr[Number(element) - 1] != 'number') {
                    //    arr[element] = '--double-prev'
                    //}
                    continue;
            }
        }
    }
    console.log(arr)
    let result = [];
    for (let element in arr) {
        if (arr[element] !== null) {
            result.push(arr[element])
        }
    }
    
    console.log(result)
    return result
}

transform(['--discard-prev', 1, 2, 3])

module.exports = {
    transform
};
