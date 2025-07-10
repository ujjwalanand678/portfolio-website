import { useEffect, useRef } from "react";

export default function RocketTrail() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const hue = useRef(0);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const isMoving = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Resize to full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      isMoving.current = true;

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        isMoving.current = false;
      }, 100);
    };
    window.addEventListener("mousemove", handleMouseMove);

    class Particle {
      constructor(x, y, hue) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 6 + 2;
        this.hue = hue;
        this.alpha = 1;
        this.velocityX = (Math.random() - 0.5) * 2;
        this.velocityY = (Math.random() - 0.5) * 2;
      }
      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.alpha -= 0.02;
      }
      draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, ${this.alpha})`;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const animate = () => {
  // Clear to transparent — this does NOT draw any color
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (isMoving.current) {
    hue.current += 2;
    particles.current.push(new Particle(mouse.current.x, mouse.current.y, hue.current));
  }

  particles.current.forEach((p, index) => {
    p.update();
    p.draw(ctx);
    if (p.alpha <= 0) {
      particles.current.splice(index, 1);
    }
  });

  requestAnimationFrame(animate);
};

    //  Start the animation loop!
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    />
  );
}
