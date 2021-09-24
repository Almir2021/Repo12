  // Only change code below this line
  function myCounter (n){
      return n< 1 ? [ ] : [n].concat(myCounter(n-1));
   }
   // Only change code above this line

   console.log (myCounter(5));

   module.exports = myCounter;