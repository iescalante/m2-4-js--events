// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimeout is your friend.
// - You'll need a variable to keep track of whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------
let body = document.querySelector("body");
body.style.height = "100vw";
let result = document.querySelector("#result");

let win = false;

function clickResult() {
  win = true;
  console.log("WINNER! PEW PEW PEW");

  body.removeEventListener("click", clickResult);
}

setTimeout(function () {
  if (!win) {
    console.log("LOSER! !>.<!");

    body.removeEventListener("click", clickResult);
  }
}, 3000);

body.addEventListener("click", clickResult);
