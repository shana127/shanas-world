function createConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.background =
      ["#ff69b4", "#ffb6d9", "#ffffff", "#ff4f94"][Math.floor(Math.random() * 4)];

    confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

function checkCats() {
  const answers = {
    img1: "sushi",
    img2: "sushi",
    img3: "pepper",
    img4: "pepper"
  };

  let score = 0;

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  if (score === 4) {
    createConfetti();
    alert("🎀 Perfect! You got them all right!");
  } else {
    alert("You got " + score + "/4 correct 💕 Try again!");
  }
}
