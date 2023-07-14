var correctAdditionAnswer;
var correctSubtractionAnswer;
var correctMultiplicationAnswer;

var correctAdditionCount = 0;
var wrongAdditionCount = 0;

var correctSubtractionCount = 0;
var wrongSubtractionCount = 0;

var correctMultiplicationCount = 0;
var wrongMultiplicationCount = 0;

function generateNumbers() {
  var num1 = Math.floor(Math.random() * 20) - 10;
  var num2 = Math.floor(Math.random() * 20) - 10;

  document.getElementById('numbers').innerHTML = (num1 >= 0 ? "+" : "-") + Math.abs(num1) + " + " + (num2 >= 0 ? "+" : "-") + Math.abs(num2) + " = ?";

  var sum = num1 + num2;
  if (sum > 0) {
    correctAdditionAnswer = "+";
  } else if (sum < 0) {
    correctAdditionAnswer = "-";
  } else {
    correctAdditionAnswer = "0";
  }
}

function generateSubtractionNumbers() {
  var num1 = Math.floor(Math.random() * 20) - 10;
  var num2 = Math.floor(Math.random() * 20) - 10;

  document.getElementById('subtractionNumbers').innerHTML = (num1 >= 0 ? "+" : "-") + Math.abs(num1) + " - " + (num2 >= 0 ? "+" : "-") + Math.abs(num2) + " = ?";

  var diff = num1 - num2;
  if (diff > 0) {
    correctSubtractionAnswer = "+";
  } else if (diff < 0) {
    correctSubtractionAnswer = "-";
  } else {
    correctSubtractionAnswer = "0";
  }
}

function generateMultiplicationNumbers() {
  var num1 = Math.floor(Math.random() * 20) - 10;
  var num2 = Math.floor(Math.random() * 20) - 10;

  document.getElementById('multiplicationNumbers').innerHTML = (num1 >= 0 ? "+" : "-") + Math.abs(num1) + " × " + (num2 >= 0 ? "+" : "-") + Math.abs(num2) + " = ?";

  var product = num1 * num2;
  if (product > 0) {
    correctMultiplicationAnswer = "+";
  } else if (product < 0) {
    correctMultiplicationAnswer = "-";
  } else {
    correctMultiplicationAnswer = "0";
  }
}

function checkAdditionAnswer(userAnswer) {
  if (userAnswer == correctAdditionAnswer) {
    document.getElementById('additionResult').innerHTML = "正解です！";
    correctAdditionCount++;
  } else {
    document.getElementById('additionResult').innerHTML = "不正解です。正解は " + correctAdditionAnswer + " でした。";
    wrongAdditionCount++;
  }
  setTimeout(() => document.getElementById('additionResult').innerHTML = "", 2000);
  generateNumbers();
  document.getElementById('additionScore').innerHTML = "正解: " + correctAdditionCount + " 不正解: " + wrongAdditionCount;
}

function checkSubtractionAnswer(userAnswer) {
  if (userAnswer == correctSubtractionAnswer) {
    document.getElementById('subtractionResult').innerHTML = "正解です！";
    correctSubtractionCount++;
  } else {
    document.getElementById('subtractionResult').innerHTML = "不正解です。正解は " + correctSubtractionAnswer + " でした。";
    wrongSubtractionCount++;
  }
  setTimeout(() => document.getElementById('subtractionResult').innerHTML = "", 2000);
  generateSubtractionNumbers();
  document.getElementById('subtractionScore').innerHTML = "正解: " + correctSubtractionCount + " 不正解: " + wrongSubtractionCount;
}

function checkMultiplicationAnswer(userAnswer) {
  if (userAnswer == correctMultiplicationAnswer) {
    document.getElementById('multiplicationResult').innerHTML = "正解です！";
    correctMultiplicationCount++;
  } else {
    document.getElementById('multiplicationResult').innerHTML = "不正解です。正解は " + correctMultiplicationAnswer + " でした。";
    wrongMultiplicationCount++;
  }
  setTimeout(() => document.getElementById('multiplicationResult').innerHTML = "", 2000);
  generateMultiplicationNumbers();
  document.getElementById('multiplicationScore').innerHTML = "正解: " + correctMultiplicationCount + " 不正解: " + wrongMultiplicationCount;
}

window.onload = function() {
  generateNumbers();
  generateSubtractionNumbers();
  generateMultiplicationNumbers();
}
