// Return a function that takes a list of valid users, and returns a
// function that returns true if all of the supplied users exist in
// the original list of users.

// Do not use any for/while loops for Array#forEach
// Do not create any unnecessary functions e.g. helpers.

    function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
       return submittedUsers.every(function(submittedUser){
          return goodUsers.some(function(goodUser){
            return goodUser.id === submittedUser.id
          })
        })
    }
  }

    module.exports = checkUsersValid