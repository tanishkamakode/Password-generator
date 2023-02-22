"use strict";

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
  let count = 0;

  // Takes every alternate character from result
  for (let i = 0; i < result.length; i += 2) {
    finalResult += result[count];
    count = count + 2;
  }

  count = 1;
  for (let j = 1; j < result.length; j += 2) {
    finalResult += result[count];
    count = count + 2;
  }

  console.log(finalResult);

  // Places password in resultbox by maipulating value attribute
  document.getElementById("result").value = finalResult;
}

// Copy to the clipboard
copy.addEventListener("click", function () {
  const textarea = document.createElement("textarea");
  const password = result.value;
  // console.log(password);

  if (!password) return;

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard!");
});

function randomLower(length) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++)
    result += lower[Math.floor(Math.random() * lower.length)];

  return result;
}

function randomUpper(length) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < length; i++)
    result += upper[Math.floor(Math.random() * upper.length)];

  return result;
}

function randomNumber(length) {
  const number = "0123456789";
  let result = "";
  for (let i = 0; i < length; i++)
    result += number[Math.floor(Math.random() * number.length)];

  return result;
}

function randomSymbol(length) {
  const symbol = "!@#$%^&*_+-=";
  let result = "";
  for (let i = 0; i < length; i++)
    result += symbol[Math.floor(Math.random() * symbol.length)];

  return result;
}
