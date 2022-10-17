const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */


const chainMaker = {
    links: [],
    chain: '',
    getLength() {
        return this.links.length
    },
    addLink(value) {
        if (value === undefined) {
            value = '';
        }
        this.links.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (this.links[position - 1] == undefined) {
            this.links.length = 0
            throw new Error("You can't remove incorrect link!")
        }
        this.links.splice(position - 1, 1)
        return this;
    },
    reverseChain() {
        this.links.reverse()
        return this;
    },
    finishChain() {
        console.log(this.links)
        this.chain = this.links.join('~~')
        this.links.length = 0
        return this.chain;
    }
};

console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain())

module.exports = {
    chainMaker
};
