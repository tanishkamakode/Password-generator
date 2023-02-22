// Selected elements by their IDs
const result = document.getElementById("result");
const copy = document.getElementById("copy");
const lengths = document.getElementById("length");
const btn = document.getElementById("btn");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("number");
const symbols = document.getElementById("symbol");

// Event handler for click event on generate password button
btn.addEventListener("click", function (e) {
  e.preventDefault();
  result.textContent = "Hello";
  let lower = lowercase.checked;
  let upper = uppercase.checked;
  let number = numbers.checked;
  let symbol = symbols.checked;
  let length = lengths.value;
  // Calls a function which actually genrates a password
  generatePassword(lower, upper, number, symbol, length);
});

// Function generating password
function generatePassword(lower, upper, number, symbol, length) {
  // Calculates the numbers of checkboxes checked
  let ticks = +lower + +upper + +number + +symbol;

  // Calculates number of password character for each type
  let individual = Math.floor(length / ticks);

  // Calculates remaining character after dividing total equally
  let extra = Math.floor(length % ticks);

  // Initializing string for storing password
  let result = "";

  if (extra) result += randomSymbol(extra);

  if (lower) result += randomLower(individual);

  if (upper) result += randomUpper(individual);

  if (number) result += randomNumber(individual);

  if (symbol) result += randomSymbol(individual);

  console.log(result);

  // Randmoly arranges created individual passwords
  let finalResult = "";
  for (let i = 0; i < result.length; i++)
    finalResult += result[Math.floor(Math.random() * result.length)];

  console.log(finalResult);
  // Places password in resultbox
  // document.getElementById("result").innerText = finalResult;
  return finalResult;
}

function randomLower(length) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++)
    result += lower[Math.floor(Math.random() * length)];

  return result;
}

function randomUpper(length) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < length; i++)
    result += upper[Math.floor(Math.random() * length)];

  return result;
}

function randomNumber(length) {
  const number = "0123456789";
  let result = "";
  for (let i = 0; i < length; i++)
    result += number[Math.floor(Math.random() * length)];

  return result;
}

function randomSymbol(length) {
  const symbol = "!@#$%^&*_+-=";
  let result = "";
  for (let i = 0; i < length; i++)
    result += symbol[Math.floor(Math.random() * length)];

  return result;
}
