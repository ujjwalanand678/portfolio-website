// src/Components/BlobCursor.jsx
import { useEffect, useRef } from "react";

export default function BlobCursor() {
  const blob = useRef(null);
  const requestRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos = useRef({ x: mouse.current.x, y: mouse.current.y });

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", move);

    const animate = () => {
      // Smooth follow
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      blob.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      ref={blob}
      className="fixed top-0 left-0 pointer-events-none w-32 h-32 rounded-full bg-blue-500 opacity-40 mix-blend-lighten blur-2xl z-[9999]"
      style={{
        transform: "translate3d(0,0,0)",
        willChange: "transform",
      }}
    ></div>
  );
}
