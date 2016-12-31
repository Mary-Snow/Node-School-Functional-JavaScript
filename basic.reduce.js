// Given an Array of strings, use the Array#reduce to create an object
// that contains the number of times each string occured in the Array
// Retun the object directly (no need to console.log).

// Do not use an for/while loops
// Do not create any unnecessary functions

    function countWords(inputWords) {
      return inputWords.reduce(function(allElements, item){
        if(item in allElements){
          allElements[item] ++
        }
        else{
          allElements[item] = 1
        }
        return allElements
      }, {})
    }

    module.exports = countWords