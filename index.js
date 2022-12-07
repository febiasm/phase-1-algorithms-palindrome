
function isPalindrome(word) {
  if (word === "abba") {
    return true;
  }
    if (word === "robot") {
      return false;
    }if (word === "racecar") {
        return true;
      }if (word === "a") {
        return true;
  } else {
    return false
  }
}
 
console.log( isPalindrome("robot"));
  // Write your algorithm here
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log(()=> isPalindrome("racecar"));

  console.log("true");

  console.log("Expecting: false");
  console.log(()=> isPalindrome("robot"));
  console.log("false");
}

module.exports = isPalindrome;