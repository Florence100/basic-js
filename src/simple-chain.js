const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {

  arr: [],

  getLength() {
    return this.arr.length
  },
  
  addLink(value) {
    this.arr.push(value);
    return this
  },
  
  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!")
    }
    
    position--;

    if (position < 0 || position >= this.arr.length) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");   
    }

    let index = this.reversed ? this.arr.length - position - 1: position;
    this.arr.splice(index, 1);
    return this
  },

  reverseChain() {
    this.arr.reverse();
    return this
  },
  
  finishChain() {
    let resultChain = this.arr.map(x => `( ${x} )`).join("~~");
    this.arr = [];
    return resultChain
  }
};

module.exports = {
  chainMaker
};

// console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain())

// console.log(chainMaker.getLength())
