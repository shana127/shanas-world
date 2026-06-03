// NAVIGATION (only used if you have buttons linking pages dynamically)
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => {
    p.style.display = "none";
  });

  document.getElementById(pageId).style.display = "block";
}

// CONFETTI 🎀
function createConfetti() {
  for (let i = 0; i < 80; i++) {
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.background =
      ["#ff69b4", "#ffb6d9", "#ffffff", "#ff4f94"][Math.floor(Math.random() * 4)];

    confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

// 🐱 CAT GAME CHECK
function checkCats() {
  const correctAnswers = {
    img1: "sushi",
    img2: "sushi",
    img3: "pepper",
    img4: "pepper"
  };

  let score = 0;

  for (let key in correctAnswers) {
    let selected = document.querySelector(`input[name="${key}"]:checked`);

    if (selected && selected.value === correctAnswers[key]) {
      score++;
    }
  }

  if (score === 4) {
    createConfetti();
    alert("🎀 Perfect! You got them all right!");
  } else {
    alert("Try again! You got " + score + "/4 correct 💕");
  }
}
