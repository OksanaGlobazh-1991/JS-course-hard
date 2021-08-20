'use strict';


let arr = ['347', '2356', '5678', '43678', '2789', '45690', '5623'];
arr.forEach(function(item) {
  if(item[0] === '2' || item[0] === '4') {
    console.log(item);
  }
});

let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
  }
console.log(`Делители ${i}: 1 и ${i}`);
}
  
