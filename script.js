function showMessage() {
  var message = document.getElementById("special-message");
  if (message.classList.contains("hidden")) {
    message.classList.remove("hidden");
  } else {
    message.classList.add("hidden");
  }
}

function checkPassword() {
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");
  if (password === "oncom") {
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("main-container").classList.remove("hidden");
    playBirthdaySong();
    scatterHearts();
  } else {
    errorMessage.classList.remove("hidden");
  }
}

function playBirthdaySong() {
  var birthdaySong = document.getElementById("birthday-song");
  birthdaySong.play();
}

function scatterHearts() {
  const container = document.getElementById("hearts-container");
  const heartIcons = ["fa-heart"];
  const totalHearts = 30; // Number of hearts to scatter

  for (let i = 0; i < totalHearts; i++) {
    const heart = document.createElement("i");
    heart.classList.add("fas", "heart", heartIcons[0]);

    // Set random position
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";

    heart.addEventListener("click", explodeHeart);

    // Set random direction and speed
    const directionX = Math.random() < 0.5 ? 1 : -1;
    const directionY = Math.random() < 0.5 ? 1 : -1;
    const duration = Math.random() * 5 + 5;

    heart.style.animation = `moveRandomly ${duration}s linear infinite`;
    heart.style.setProperty("--directionX", directionX);
    heart.style.setProperty("--directionY", directionY);

    container.appendChild(heart);
  }
}

function explodeHeart(event) {
  const heart = event.target;
  heart.style.transition = "transform 0.5s, opacity 0.5s";
  heart.style.transform = "scale(2)";
  heart.style.opacity = "0";
  setTimeout(() => {
    heart.remove();
  }, 500);
}

function toggleMessage() {
  const envelope = document.querySelector(".envelope");
  envelope.classList.toggle("envelope-open");
  const message = document.getElementById("special-message");
  message.classList.toggle("hidden");
}

let lastIndexDisplayed = 0;

document.getElementById("love-arrow").addEventListener("click", function () {
  // Get main-container
  const mainContainer = document.getElementById("main-container");

  // Define array of possible messages
  const messages = [
    "Selamat ulang tahun yang ke-21, sayang! Semoga hari ini menjadi hari yang spesial dan penuh kebahagiaan.",
    "Semoga makin bahagia di usia baru.ya sayang ",
    "Semua cita citanya tercapai ",
    "Dipermudah segala urusannya",
    "Makin banyak rejekinya dan diberikan kesehatan",
    "Makin sayang ke keluarga sama pacarnya yah :D ",
    "<a href='foto.html'>Klik temukan kadonya!</a>",
  ];

  // Jika sudah mencapai akhir array, kembali ke awal
  if (lastIndexDisplayed >= messages.length) {
    lastIndexDisplayed = 0;
  }

  // Mengambil pesan sesuai dengan indeks terakhir yang ditampilkan
  const currentMessage = messages[lastIndexDisplayed];

  // Update konten utama
  const mainContent = mainContainer.querySelector("p");
  mainContent.innerHTML = currentMessage;
  lastIndexDisplayed++;
});
