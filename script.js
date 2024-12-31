const instructionText = document.getElementById("instructionText");
const snowContainer = document.querySelector(".snowContainer");
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

setInterval(() => {
  const snowSize = getRandomIntInclusive(4, 8);
  const transitionDuration = getRandomIntInclusive(10, 12);

  const snow = document.createElement("div");
  snow.classList.add("snow");
  snow.style.width = `${snowSize}px`;
  snow.style.height = `${snowSize}px`;
  snow.style.transition = `top ${transitionDuration}s, left ${transitionDuration}s`;
  snow.addEventListener("transitionend", () => snow.remove());
  snowContainer.append(snow);

  let posTop = -snow.offsetHeight;
  let posLeft = -snow.offsetWidth;

  if (getRandomIntInclusive(0, 1) === 0)
    posLeft = getRandomIntInclusive(0, window.innerWidth);
  else posTop = getRandomIntInclusive(0, window.innerHeight);

  snow.style.top = `${posTop}px`;
  snow.style.left = `${posLeft}px`;

  document.body.offsetWidth;
  snow.style.top = `${posTop + window.innerHeight}px`;
  snow.style.left = `${posLeft + window.innerWidth}px`;
}, 100);

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
