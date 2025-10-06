const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 1. Inisialisasi
let player = { x: 50, y: 50, speed: 5 };
let keys = {};

// 2. Input
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

// 3. Update + Render
function gameLoop() {
  // Update posisi player
  if (keys["ArrowUp"]) player.y -= player.speed;
  if (keys["ArrowDown"]) player.y += player.speed;
  if (keys["ArrowLeft"]) player.x -= player.speed;
  if (keys["ArrowRight"]) player.x += player.speed;

  // Render
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "lime";
  ctx.fillRect(player.x, player.y, 50, 50);

  requestAnimationFrame(gameLoop); // loop terus
}

// 4. Jalankan
gameLoop();