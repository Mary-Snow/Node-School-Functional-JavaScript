// Implement a function that takes a function as its first argument,
// a number as its second argument, then executes the passed in
// function num times


// Basic Solution

 function repeat(operation, num) {
      for(var i = 0; i <num; i++){
        if(i !== num){
          return operation;
        }
      }

    }

    // Do not remove the line below
    module.exports = repeat

