import { useEffect } from "react";

export default function CursorTrail() {
  useEffect(() => {
    const handleMove = (e) => {
      const star = document.createElement("div");
      star.className = "cursor-star";
      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY}px`;
      document.body.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 1000); // remove after animation
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
}
