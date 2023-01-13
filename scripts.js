// * GREEN
// TODO
// ! ALARM
// ? BLUE
/**
 * MULTI
 * LINE
 * COMMENT
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
               if (checkIfCapital(wordsToConvertArray[i])) {
                    wordsToConvertArray[i] = "O";
               } else {
                    wordsToConvertArray[i] = "o";
               }
          } else {
               if (checkIfCapital(wordsToConvertArray[i])) {
                    //* Strings are immutable in Javascript so have to do it this way
                    let firstChar = "G";
                    let middleChars = wordsToConvertArray[i].substring(1, wordsToConvertArray[i].length - 1);
                    let lastChar = "";

                    // ! Switch - doesn't work?
                    // switch (checkIfCapital(wordsToConvertArray[i].substring(wordsToConvertArray[i].length - 1))) {
                    //      case true:
                    //           lastChar = "R";
                    //      case false:
                    //           lastChar = "r";
                    // }

                    // ! If - works?
                    if (checkIfCapital(wordsToConvertArray[i].substring(wordsToConvertArray[i].length - 1))) {
                         lastChar = "R";
                    } else {
                         lastChar = "r";
                    }

                    wordsToConvertArray[i] = firstChar + middleChars + lastChar;
               } else {
                    let firstChar = "g";
                    let middleChars = wordsToConvertArray[i].substring(1, wordsToConvertArray[i].length - 1);
                    let lastChar = "";

                    if (checkIfCapital(wordsToConvertArray[i].substring(wordsToConvertArray[i].length - 1))) {
                         lastChar = "R";
                    } else {
                         lastChar = "r";
                    }

                    wordsToConvertArray[i] = firstChar + middleChars + lastChar;
               }
          }

          convertedString += wordsToConvertArray[i] + " ";
     }

     return convertedString;
}

function displayConversion() {
     // Prevents Enter key from refreshing page
     event.preventDefault();

     // Display string on screen
     document.getElementById("output").innerHTML = convertInputToGordonSpeak();
}

function checkIfCapital(string) {
     return string.charAt(0) === string.charAt(0).toUpperCase();
}
