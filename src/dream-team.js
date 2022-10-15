const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (!Array.isArray(members)) {return false}
    for (let i = 0; i < members.length; i++) { 
        if (typeof (members[i]) != 'string') { continue } 
        members[i] = members[i].split(' ').join('')
        members[i] = members[i].toUpperCase();
    }
    members.sort()
    console.log(members)
    let result = '';
    for (let i = 0; i < members.length; i++){
        if (typeof (members[i]) != 'string') { continue } 
        if (Number.isInteger(Number(members[i][0]))) { continue }
        result += members[i][0].toUpperCase()
  }
    
    console.log(result)
    return result
}

module.exports = {
  createDreamTeam
};
