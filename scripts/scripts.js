/**
 * Converts normal text into Gordon Speak
 * @returns
 */
function convertInputToGordonSpeak() {
     // Grabs text from input
     let textInputValue = document.getElementById("text-input").value;

     // Splits input into an array, delimited by spaces
     const wordsToConvertArray = textInputValue.split(" ");

     // Create string to display on screen
     let convertedString = "";
     for (let i = 0; i < wordsToConvertArray.length; i++) {
          // If the element is only one letter
          if (wordsToConvertArray[i].length == 1) {
               capCheck(wordsToConvertArray[i]) ? (wordsToConvertArray[1] = "O") : (wordsToConvertArray[i] = "o");
          } else {
               wordsToConvertArray[i] = replaceFirstAndLastLetterInAWord(wordsToConvertArray[i]);
          }

          convertedString += wordsToConvertArray[i] + " ";
     }

     return convertedString;
}

/**
 * Displays the output on screen
 */
function displayConversion() {
     // Prevents Enter key from refreshing page
     event.preventDefault();

     // Display string on screen
     document.getElementById("output").innerHTML = convertInputToGordonSpeak();
}

/**
 * Expects a singular char for our usage
 * @param {*} c
 * @returns
 */
function capCheck(c) {
     return c == c.toUpperCase();
}

/**
 * Replaces the first letter of a word with the firstCharParam, and the last letter with either a capital "R" or lowercase "r"
 * @param {*} firstCharParam The letter to replace the first letter with
 * @param {*} word The word to manipulate
 * @returns The word with replaced letter
 */
//* Strings are immutable in Javascript so have to do it this way
function replaceFirstAndLastLetterInAWord(word) {
     let first = capCheck(word[0]) ? "G" : "g";
     let middle = word.substring(1, word.length - 1);
     let last = capCheck(word[word.length - 1]) ? "R" : "r";

     return first + middle + last;
}
