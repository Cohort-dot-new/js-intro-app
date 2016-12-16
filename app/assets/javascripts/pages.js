var numClicks = 0;
var colors = ['red', 'yellow', 'green', 'blue', 'purple'];

function jackhammer(boxObject) {
  boxObject.style["background-color"] = colors[numClicks];
  numClicks++;
  if (numClicks === 5) {
    console.log("You win!!!!!!");
  }
}
