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
let result;

class VigenereCipheringMachine {

  constructor (type = true) {
    this.type = type;
    // this.result = '';
  }

  code = {
    a : 0, b : 1, c : 2, d : 3, e : 4,
    f : 5, g : 6, h : 7, i : 8, j : 9,
    k : 10, l : 11, m : 12, n : 13, o : 14, 
    p : 15, q : 16, r : 17, s : 18, t : 19, 
    u : 20, v : 21, w : 22, x : 23, y : 24, 
    z : 25
  }

  code2 = {
    0: 'a', 1: 'b', 2 : 'c', 3 : 'd', 4 : 'e',
    5 : 'f', 6 : 'g', 7 : 'h', 8 : 'i', 9 : 'j',
    10 : 'k', 11 : 'l', 12 : 'm', 13 : 'n', 14 : 'o', 
    15 : 'p', 16 : 'q', 17 : 'r', 18 : 's', 19 : 't', 
    20 : 'u', 21 : 'v', 22 : 'w', 23 : 'x', 24 : 'y', 
    25 : 'z'
  }


  encrypt(string, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!string || !key) {
      throw new Error("Incorrect arguments!")
    }

    string = string.toLowerCase();
    key = key.toLowerCase();

    let arrayString = string.split('');
    let arrayKey = key.split('');
    let newNumerArr = [];
    const pledge = [];

    for (let i = 0; i < arrayKey.length; i ++) {
      if (arrayKey[i].toLowerCase() in this.code) {
        pledge.push(this.code[arrayKey[i]])
      }        
    } 

    let count = 0;
    // console.log(arrayString[0].toLowerCase() === 'e')
    // console.log(this.code['e'])
    // // console.log(this.code[arrayString[0]])

    for (let i = 0; i < arrayString.length; i ++) {
      if (arrayString[i].toLowerCase() in this.code) {
        
        let number = this.code[arrayString[i].toLowerCase()]
        // console.log(number)
        
        if (count < arrayKey.length) {
          let newNumber = number + pledge[count];
          if (newNumber < 26) {
            newNumerArr.push(newNumber);
          } else {
            while (newNumber > 25) {
              newNumber = newNumber - 26;
            }
            newNumerArr.push(newNumber);
          }
          
          count++;
        } else {
          let k = count;
          while (k > arrayKey.length - 1) {
            k = k - arrayKey.length;
          }
          let newNumber = number + pledge[k];
          if (newNumber < 26) {
            newNumerArr.push(newNumber);
          } else {
            while (newNumber > 25) {
              newNumber = newNumber - 26;
            }
            newNumerArr.push(newNumber);
          }
          k = i;
          count++;
        }
      } else { 
        newNumerArr.push(arrayString[i]);          
      }
    }

    result = '';

    // console.log(newNumerArr)

    for (let i = 0; i < newNumerArr.length; i++) {
      if (typeof(newNumerArr[i]) === 'number') {
        result = result + (this.code2[(newNumerArr)[i]]).toUpperCase();
        // result = result + (this.code2[(newNumerArr)[i]]);
      } else {
        result = result + newNumerArr[i]
      }
    }

    // console.log(result)

    if (this.type === true) {
      return result
    } else {
      return (result.split('').reverse().join(''));
    }


    // const promise = new Promise((resolve, reject) => {
    //   // const randomNumber = Math.random();
      
    //   if(this.type === true) {
    //     return resolve(result);
    //   } else {
    //     return reject(result.split('').reverse().join(''));
    //   }
    // });
    // promise.then((data) => {
    //   return ('ok')
    //   },
    //   (error) => {
      
    //   }
    // );
  }


  decrypt(string, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!string || !key) {
      throw new Error("Incorrect arguments!")
    }

    string = string.toLowerCase();
    key = key.toLowerCase();

    let arrayString = string.split('');
    let arrayKey = key.split('');
    let newNumerArr = [];
    const pledge = [];

    for (let i = 0; i < arrayKey.length; i ++) {
      if (arrayKey[i].toLowerCase() in this.code) {
        pledge.push(this.code[arrayKey[i]])
      }        
    }

    let count = 0;

    for (let i = 0; i < arrayString.length; i ++) {
      if (arrayString[i].toLowerCase() in this.code) {
        
        let number = this.code[arrayString[i].toLowerCase()]
        
        if (count < arrayKey.length) {
          let newNumber = number + 26 - pledge[count];
          if (newNumber < 26) {
            newNumerArr.push(newNumber);
          } else {
            while (newNumber > 25) {
              newNumber = newNumber - 26;
            }
            newNumerArr.push(newNumber);
          }
          
          count++;
        } else {
          let k = count;
          while (k > arrayKey.length - 1) {
            k = k - arrayKey.length;
          }
          let newNumber = number + 26 - pledge[k];
          if (newNumber < 26) {
            newNumerArr.push(newNumber);
          } else {
            while (newNumber > 25) {
              newNumber = newNumber - 26;
            }
            newNumerArr.push(newNumber);
          }
          k = i;
          count++;
        }
      } else { 
        newNumerArr.push(arrayString[i]);          
      }
    }


    let result = '';

    for (let i = 0; i < newNumerArr.length; i++) {
      if (typeof(newNumerArr[i]) === 'number') {
        result = result + (this.code2[(newNumerArr)[i]]).toUpperCase();
      } else {
        result = result + newNumerArr[i]
      }
    }

    if (this.type === true) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }
}

const directMachine = new VigenereCipheringMachine();
console.log(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'));
// console.log(directMachine.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey'));
// console.log(directMachine.encrypt('cryptography', 'verylongkeyword'));
// console.log(directMachine.encrypt('Samelengthkey', 'Samelengthkey'));
// console.log(directMachine.encrypt('Same length key', 'Samelengthkey'));

module.exports = {
  VigenereCipheringMachine
};








// const directMachine = new VigenereCipheringMachine();
// directMachine.encrypt('attack at dawn!', 'alphonse')

// class VigenereCipheringMachine {
//   encrypt() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
//   decrypt() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

// module.exports = {
//   VigenereCipheringMachine
// };



