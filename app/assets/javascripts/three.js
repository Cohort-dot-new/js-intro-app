var boxNumbersClicked = [];

function clickBox(boxNumber) {
  boxNumbersClicked.push(boxNumber);
  
  var didClickBoxOne = boxNumbersClicked.indexOf(1) !== -1;
  var didClickBoxTwo = boxNumbersClicked.indexOf(2) !== -1;
  var didClickBoxThree = boxNumbersClicked.indexOf(3) !== -1;

  if (didClickBoxOne && didClickBoxTwo && didClickBoxThree) {
    console.log("You win!");
  }
}
