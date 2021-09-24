    // Only change code below this line
      function rangeOfNumbers (startN , endN){
          if (endN - startN < 0) {
              return "The starting number will always be less than  or equal to the ending number"
          }
          if (endN - startN === 0){
              return [startN];

          } else {
              var numbers = rangeOfNumbers(startN , endN -1);
              numbers.push(endN);
              return numbers;
          }
      }


// Only change code above this line
console.log (rangeOfNumbers(7,7));
module.exports = rangeOfNumbers;