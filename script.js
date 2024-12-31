const scene = document.querySelector(".scene");

let rotation = 0;

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "ArrowLeft") {
    rotation += 30;
    updateSceneRotation();
  } else if (e.key === "ArrowRight") {
    rotation -= 30;
    updateSceneRotation();
  }
});

function updateSceneRotation() {
  scene.style.transform = `rotateY(${rotation}deg)`;
}

console.log("amogis");
