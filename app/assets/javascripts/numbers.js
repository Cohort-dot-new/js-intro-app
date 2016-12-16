var boxNumbersClicked = [];

function clickSquare(boxNumber) {
  boxNumbersClicked.push(boxNumber);
  console.log("boxNumbersClicked is ", boxNumbersClicked);
  if (boxNumbersClicked[0] === 1 && boxNumbersClicked[1] === 2 && boxNumbersClicked[2] === 3) {
    console.log("You win!!!");
  }
}
