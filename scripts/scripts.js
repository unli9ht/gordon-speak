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
     const textInputArray = textInputValue.split(" ");

     // Create string to display on screen
     let convertedString = "";
     for (let i = 0; i < textInputArray.length; i++) {
          // If the element is only one letter
          if (textInputArray[i].length == 1) {
               if (checkIfCapital(textInputArray[i])) {
                    textInputArray[i] = "O";
               } else {
                    textInputArray[i] = "o";
               }
          } else {
               if (checkIfCapital(textInputArray[i])) {
                    //* Strings are immutable in Javascript so have to do it this way
                    let firstChar = "G";
                    let middleChars = textInputArray[i].substring(1, textInputArray[i].length - 1);
                    let lastChar = "";

                    // ! Switch - doesn't work?
                    // switch (checkIfCapital(textInputArray[i].substring(textInputArray[i].length - 1))) {
                    //      case true:
                    //           lastChar = "R";
                    //      case false:
                    //           lastChar = "r";
                    // }

                    // ! If - works?
                    if (checkIfCapital(textInputArray[i].substring(textInputArray[i].length - 1))) {
                         lastChar = "R";
                    } else {
                         lastChar = "r";
                    }

                    textInputArray[i] = firstChar + middleChars + lastChar;
               } else {
                    let firstChar = "g";
                    let middleChars = textInputArray[i].substring(1, textInputArray[i].length - 1);
                    let lastChar = "";

                    if (checkIfCapital(textInputArray[i].substring(textInputArray[i].length - 1))) {
                         lastChar = "R";
                    } else {
                         lastChar = "r";
                    }

                    textInputArray[i] = firstChar + middleChars + lastChar;
               }
          }

          convertedString += textInputArray[i] + " ";
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

let test = "pokemon";
console.log(test.charAt(0));
console.log(test.substring(1, test.length - 1));
console.log(test.charAt(test.length - 1));
