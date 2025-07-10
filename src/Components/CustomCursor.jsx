import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const circle = circleRef.current;

    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;

    const speed = 0.15; // Lower = smoother trailing

    const updatePosition = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      circleX += (mouseX - circleX) * speed;
      circleY += (mouseY - circleY) * speed;

      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      circle.style.transform = `translate(${circleX}px, ${circleY}px)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", updatePosition);
    animate();

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
      ></div>
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9999]"
      ></div>
    </>
  );
}
