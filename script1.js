let num = 266219;
let arr = Array.from(String(num), Number);
let str = (arr.reduce((sum, current) => sum * current));
let result = str ** 3;

console.log(str);
console.log(String(result).substr(0,2));
