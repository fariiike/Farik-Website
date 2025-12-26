export default function Background() {
  const bgHTML = `
<canvas id="starfield" class="absolute top-0 left-0 w-full h-full -z-10"></canvas>
    <style>
      body { margin: 0; }
      #starfield { display: block; }
    </style>
  `;
  setTimeout(() => {
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    let stars = [];
    const numStars = 150;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        d: Math.random() * 0.5
      });
    }

    function drawStars() {
      ctx.fillStyle = '#0b0f2d'; // خلفية داكنة
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'white';
      ctx.beginPath();
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        ctx.moveTo(s.x, s.y);
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      }
      ctx.fill();

      moveStars();
      requestAnimationFrame(drawStars);
    }

    function moveStars() {
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.y += s.d;
        if (s.y > canvas.height) {
          s.y = 0;
          s.x = Math.random() * canvas.width;
        }
      }
    }

    drawStars();
  }, 50);
  return bgHTML;
}
