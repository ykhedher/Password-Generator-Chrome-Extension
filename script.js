let uppercase = document.getElementById('uppercase'),
  lowercase = document.getElementById('lowercase'),
  numbers = document.getElementById('numbers'),
  specials = document.getElementById('specials'),
  button = document.getElementById("btn__click");
/* Get the text field */
let result = document.getElementById("result");

let range = document.getElementById("range");

let init = (value) => {
  document.getElementById("range__label").innerHTML = value;
}
let updateValue = (value) => {
  document.getElementById("range__label").innerHTML = value;
}

init(range.value);
range.addEventListener("input", () => {
  updateValue(range.value);
});

function copyText() {

  /* Select the text field */
  result.select();
  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  if (result.value.length > 0) {
    document.getElementById('message').innerHTML = "Password copied &#9986&#10004";
  }
}

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
}
const generatePassword = () => {
  document.getElementById('message').innerHTML = "Click above to copy &#x261d&#9986 ";
  let generatedPassword = "";
  let userCase = [];
  let uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  let specialsArray = ['$', '#', '/', '!', '%', '\'', '"', '&', '(', ')', '^', ']', '[', '_', '-', '{', '}', '+', '=', '?', ';', '*', '~', '@'];

  if (uppercase.checked) {
    userCase.push(...uppercaseArray);
  }
  if (lowercase.checked) {
    userCase.push(...lowercaseArray);
  }
  if (numbers.checked) {
    userCase.push(...numbersArray);
  }
  if (specials.checked) {
    userCase.push(...specialsArray);
  }
  shuffle(userCase)
  for (let i = 0; i < range.value - 3; i++) {
    generatedPassword += userCase[Math.floor(Math.random() * userCase.length)];
  }
  console.log(generatedPassword);
  //at least one lower/upper letter and one special character
  generatedPassword += uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)];
  generatedPassword += lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)];
  generatedPassword += numbersArray[Math.floor(Math.random() * numbersArray.length)];
  result.value = generatedPassword;
}




// enable button
const enableButton = () => {
  if (numbers.checked || specials.checked || uppercase.checked || lowercase.checked) {
    button.disabled = false;
  }
  else {
    button.disabled = true;
  }
}



document.addEventListener('DOMContentLoaded', function () {
  button.addEventListener('click', generatePassword);
  numbers.addEventListener('click', enableButton);
  uppercase.addEventListener('click', enableButton);
  lowercase.addEventListener('click', enableButton);
  specials.addEventListener('click', enableButton);
  result.addEventListener('click', copyText)
});




// uppercase.addEventListener('click', enableButton());
// lowercase.addEventListener('click', enableButton());
// specials.addEventListener('click', enableButton());

