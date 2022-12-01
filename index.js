// Your code here
const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = '#FF69B4';

// document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }
//     else if (e.key === "ArrowRight") {
//         moveDodgerRight();
//     }
//   });

// function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       dodger.style.left = `${left - 1}px`;
//     }
//   }
// function moveDodgerRight() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
//     if (left < 400 - 40) {
//         dodger.style.left = `${left + 1}px`;
//     }
//  }
function MoveDodger() {
    const body = document.querySelector("body");
    const game = body.querySelector("#game");
    
    //game.addEventListener("onmousemove", () => dodger.style.left = `${e.x}px `)
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    window.onmousemove = (e) => dodger.style.left = `${clamp((game.clientWidth / body.clientWidth)* e.x)}px`;
    return dodger.style.left;
}
const clamp = (val, min = 0, max = 360) => Math.max(min, Math.min(max, val));
MoveDodger();
