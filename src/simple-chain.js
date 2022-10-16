const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

//let links = [];
const chainMaker = {
    links: [],
    chain: '',
    getLength() {
        return this.links.length
    },
    addLink(value) {
        if (value === undefined) { this.links.push('( ) '); return this }
        this.links.push(`${value} `);
        return this
    },
    removeLink(position) {
        if (this.links[position - 1] == undefined) {
            this.links.length = 0
            throw new Error("You can't remove incorrect link!")
        }
        this.links.splice(position - 1, 1)
    },
    reverseChain() {
        this.links.reverse()
        return this
    },
    finishChain() {
        for (let link in this.links) {
            if (link != 0) { this.chain += '~~' }
            else { this.chain = '' }
            this.chain += `( ${this.links[link]})`
        }
        this.links.length = 0
        return this.chain
    }
};

console.log(chainMaker.addLink().finishChain())

module.exports = {
    chainMaker
};
