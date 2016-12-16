var numClicks = 0;

function jackhammer() {
  numClicks++;
  if (numClicks === 5) {
    console.log("You win!");
  }
}
