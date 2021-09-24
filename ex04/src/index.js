// Only change code below this line
function sumFibonacci(num) {
    if (num <= 0 ){
        return 0;
    }
    let fibs = [1, 1];
    let count = 0;
    let fibNums;
  
    while (num > count) {
      fibNums = fibs[count] + fibs[count + 1];
      
      if (fibNums <= num) {
        fibs.push(fibNums);
      }
  
      count++;
    }
  
    return fibs.filter(n => n % 2 !== 0).reduce((a,b) => a + b);
  
  }
  

// Only change code above this line
console.log (sumFibonacci(-5));
module.exports = sumFibonacci;