
let word = "NEGIE1"

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 2; i >= 0; i--) {
        newString += str[i];
    }
    newString += str[str.length-1];
    return newString;
}

let word2 = reverseString(word)
console.log("Original: ",word)
console.log("Reversed: ", word2);