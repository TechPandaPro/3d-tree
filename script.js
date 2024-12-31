const instructionText = document.getElementById("instructionText");
const scene = document.querySelector(".scene");

let rotationX = 0;
let rotationY = 20;

document.addEventListener("DOMContentLoaded", () => {
  updateSceneRotation();
});

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "ArrowLeft") {
    rotationY += 10;
    instructionText.remove();
    updateSceneRotation();
  } else if (e.key === "ArrowRight") {
    rotationY -= 10;
    instructionText.remove();
    updateSceneRotation();
  } else if (e.key === "ArrowDown") {
    rotationX += 10;
    instructionText.remove();
    updateSceneRotation();
  } else if (e.key === "ArrowUp") {
    rotationX -= 10;
    instructionText.remove();
    updateSceneRotation();
  }
});

function updateSceneRotation() {
  scene.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}

console.log("amogis");
