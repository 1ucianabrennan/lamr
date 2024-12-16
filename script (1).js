const boxImage = document.getElementById("bah");
const thoughtBubble2 = document.getElementById("no2");
const sequences = [
  ["up", "right", "down", "left"], // Sequence 1
  ["down", "left", "up", "right", "down"], // Sequence 2
  ["right", "up", "down", "left", "up", "right"], // Sequence 3
  ["left", "down-left", "up-right", "right", "left", "down-right", "up"], // Sequence 4 with diagonals
];
let userInput = [];
let currentSequenceIndex = 0;
const thoughtBubbles = [];
let sequenceStarted = true;
// Initialize thought bubbles dynamically
function initializeThoughtBubbles() {
  const bubbleData = [
    { modalContent: "images/d.png", top: 310, left: 1620 },
    { modalContent: "images/g1.png", top: 555, left: 100 },
    { modalContent: "images/p1.png", top: 670, left: 1630 },
    { modalContent: "images/r1.png", top: 450, left: 1600 },
  ];
  bubbleData.forEach((data, index) => {
    const bubble = createThoughtBubble(
      "images/inactiveThought.png", // Default to inactive image
      data.modalContent,
      data.top,
      data.left
    );
    // Add the first bubble with "clickable" class (active)
    if (index === 0) {
      bubble.classList.add("clickable");
      bubble.src = "images/thought.png"; // Active bubble image
    }
    // Attach click event
    bubble.onclick = () => handleThoughtBubbleClick(index);
    // Append to the DOM and store for reference
    document.body.appendChild(bubble);
    thoughtBubbles.push({ element: bubble, modalContent: data.modalContent });
  });
}
// Create a single thought bubble
function createThoughtBubble(imgSrc, modalContent, top, left) {
  const bubble = document.createElement("img");
  bubble.src = imgSrc;
  bubble.classList.add("img", "thoughtBubble");
  bubble.style.position = "absolute";
  bubble.style.top = `${top}px`;
  bubble.style.left = `${left}px`;
  return bubble;
}
function handleThoughtBubbleClick(index) {
  // Close existing modal if open
  const existingModal = document.querySelector(".intro-modal");
  if (existingModal) {
    existingModal.style.display = "none";
    document.body.removeChild(existingModal);
  }
  // Open the new modal
  showModal(thoughtBubbles[index].modalContent);
}
// Show modal
function showModal(contentSrc) {
  const modal = document.createElement("div");
  modal.classList.add("intro-modal");
  modal.style.display = "block";
  const modalContent = document.createElement("div");
  modalContent.classList.add("intro-modal-content");
  const img = document.createElement("img");
  img.src = contentSrc;
  img.classList.add("modal-image");
  modalContent.appendChild(img);
  const closeButton = document.createElement("button");
  closeButton.classList.add("intro-modal-close");
  closeButton.innerText = "X";
  closeButton.onclick = () => closeModal(modal);
  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}
// Close modal
function closeModal(modal) {
  modal.style.display = "none";
  document.body.removeChild(modal);
}
// Handle arrow input
function handleArrowClick(direction) {
  if (!sequenceStarted) return;
  userInput.push(direction);
  const currentSequence = sequences[currentSequenceIndex];
  // Check if the user input matches the current sequence so far
  if (
    userInput.join("") === currentSequence.slice(0, userInput.length).join("")
  ) {
    if (userInput.length === currentSequence.length) {
      alert("Sequence complete!");
      moveToNextSequence();
    }
  } else {
    // If incorrect, reset user input and shake the arrows
    console.log("Incorrect! Try again.");
    shakeArrows();
    userInput = [];
  }
}
function moveToNextSequence() {
  userInput = [];
  currentSequenceIndex++;
  if (currentSequenceIndex >= sequences.length) {
    alert("Congratulations! You've completed all sequences!");
    sequenceStarted = false;
    window.location.href = "4.html";
    return;
  }
  updateClickableBubble(currentSequenceIndex);
}
function updateClickableBubble(index) {
  thoughtBubbles.forEach((bubble, i) => {
    if (i === index) {
      bubble.element.classList.add("clickable");
      bubble.element.src = "images/thought.png";
    } else {
      bubble.element.classList.remove("clickable");
      bubble.element.src = "images/inactiveThought.png";
    }
  });
}
// Shake
function shakeArrows() {
  [
    "up",
    "right",
    "down",
    "left",
    "up-right",
    "up-left",
    "down-right",
    "down-left",
  ].forEach((direction) => {
    const arrow = document.getElementById(direction);
    arrow.classList.add("shake");
    arrow.classList.add("pink");
    setTimeout(() => arrow.classList.remove("shake"), 500);
    setTimeout(() => arrow.classList.remove("pink"), 500);
  });
}
// Event listeners
[
  "up",
  "right",
  "down",
  "left",
  "up-right",
  "up-left",
  "down-right",
  "down-left",
].forEach((direction) => {
  document.getElementById(direction).onclick = () =>
    handleArrowClick(direction);
});
initializeThoughtBubbles();
const backgroundMusic = new Audio("audio/background.mp3");
backgroundMusic.loop = true;
const playbackState = getCookie("musicPlaybackState");
if (playbackState === "playing") {
  const currentTime = parseFloat(getCookie("musicCurrentTime"));
  backgroundMusic.currentTime = currentTime;
  backgroundMusic.play();
} else {
  backgroundMusic.play();
}
window.addEventListener("beforeunload", () => {
  setCookie(
    "musicPlaybackState",
    backgroundMusic.paused ? "paused" : "playing"
  );
  setCookie("musicCurrentTime", backgroundMusic.currentTime);
});
// Cookie utility functions
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}
function getCookie(name) {
  const match = document.cookie.match(new RegExp(`${name}=([^;]+)`));
  return match ? match[1] : null;
}
function next() {
  window.location.href = "1.html";
}
function pauseBackgroundMusic() {
  backgroundMusic.pause();
  setCookie("musicPlaybackState", "paused");
  setCookie("musicCurrentTime", backgroundMusic.currentTime);
}
function hideModals(modalId) {
  document.getElementById(modalId).style.display = "none";
}
function showModal2() {
  document.getElementById("myModal2").style.display = "flex";
}
function hideModal2() {
  document.getElementById("myModal2").style.display = "none";
  document.getElementById("inve").style.display = "flex";
  window.location.href = "https://skelyan.github.io/final/";
}

//////////////////////////////////////////////
function changeBack() {
  document.getElementById("myDiv").style.backgroundImage =
    "url(images/ALEX/1.png)";
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/2.png)";
  }, 100);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/3.png)";
  }, 200);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/4.png)";
  }, 300);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/5.png)";
  }, 400);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/6.png)";
  }, 500);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/7.png)";
  }, 600);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/8.png)";
  }, 700);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/9.png)";
  }, 800);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/10.png)";
  }, 900);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/11.png)";
  }, 1000);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/12.png)";
  }, 1100);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/13.png)";
  }, 1200);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/14.png)";
  }, 1300);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/15.png)";
  }, 1400);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/16.png)";
  }, 1500);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/17.png)";
  }, 1600);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/18.png)";
  }, 1700);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/19.png)";
  }, 1800);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/20.png)";
  }, 1900);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/21.png)";
  }, 2000);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/22.png)";
  }, 2100);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/23.png)";
  }, 2200);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/ALEX/24.png)";
  }, 2300);
  setTimeout(function () {
    showModal2();
  }, 4000);
}

function showModal3() {
  document.getElementById("myModal3").style.display = "flex";
}
function hideModal3() {
  document.getElementById("myModal3").style.display = "none";
  document.getElementById("inve").style.display = "flex";
  window.location.href = "2.html";
}
function me() {
  document.getElementById("myDiv").style.backgroundImage =
    "url(images/HOLLY/s1.png)";
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s2.png)";
  }, 100);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s3.png)";
  }, 200);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s4.png)";
  }, 300);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s4.png)";
  }, 400);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s6.png)";
  }, 500);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s7.png)";
  }, 1000);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s8.png)";
  }, 2000);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s9.png)";
  }, 3500);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s10.png)";
  }, 5000);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s11.png)";
  }, 6000);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s12.png)";
  }, 8000);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s13.png)";
  }, 10000);
  !setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s14.png)";
  }, 11099);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s15.png)";
  }, 11100);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s16.png)";
  }, 11200);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s17.png)";
  }, 11300);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s18.png)";
  }, 11400);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s19.png)";
  }, 11500);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s20.png)";
  }, 11600);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s21.png)";
  }, 11700);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s22.png)";
  }, 11800);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s23.png)";
  }, 11900);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s24.png)";
  }, 12000);
  setTimeout(function () {
    document.getElementById("myDiv").style.backgroundImage =
      "url(images/HOLLY/s25.png)";
  }, 12100);
  setTimeout(function () {
    showModal3();
  }, 13000);
}
