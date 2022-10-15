const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
// class VigenereCipheringMachine {

//   constructor (type = true) {
//     this.type = type;
//   }

//   code = {
//     a : 0,
//     b : 1,
//     c : 2,
//     d : 3,
//     e : 4,
//     f : 5,
//     g : 6,
//     h : 7,
//     i : 8,
//     j : 9,
//     k : 10,
//     l : 11,
//     m : 12,
//     n : 13,
//     o : 14,
//     p : 15,
//     q : 16,
//     r : 17,
//     s : 18,
//     t : 19,
//     u : 20,
//     v : 21,
//     w : 22,
//     x : 23,
//     y : 24,
//     z : 25
//   }

//   encrypt(string, key) {
//     // throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//     if (!string || !key) {
//       throw new Error("Incorrect arguments!")
//     }

//     let codeString = '';
//     let arrayString = string.split('');
//     let arrayKey = key.split('');
//     let newNumber

//     if (this.type === true) {

//       for (let i = 0; i < arrayString.length; i ++) {
//         // for (let j = 0; j < arrayKey.length; j ++) {
//           if (arrayString[i].toLowerCase() in this.code) {
//             // console.log(j)
//             let number = this.code[arrayString[i]]
//             console.log('i', i)
//             console.log('number', number)
//             if (i < arrayKey.length) {
//               let newNumber = number + this.code[key[i]]
//               console.log('newNumber', newNumber)
//             }
            
//             if (newNumber < this.code.length) {
//               console.log(Object.keys(code)[newNumber])
//             }
            
//             // if (j === arrayKey.length) {
//             //   j = 0;
//             // }
//           } else {
            
//           }
//         // }
//       }
//     }
//   }
//   decrypt() {
//     // throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

// module.exports = {
//   VigenereCipheringMachine
// };

// const directMachine = new VigenereCipheringMachine();
// directMachine.encrypt('attack at dawn!', 'alphonse')

class VigenereCipheringMachine {
  encrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};



