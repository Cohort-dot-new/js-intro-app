function computeSum(inputNumber) {
  var currentSum = parseInt(document.getElementById("sum").innerHTML);
  var newSum = currentSum + inputNumber;
  document.getElementById("sum").innerHTML = newSum;
}
