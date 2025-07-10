import { useEffect } from "react";
import "./RippleEffect.css";
export default function RippleEffect() {
  useEffect(() => {
    const handleClick = (e) => {
      const ripple = document.createElement("span");
      ripple.className = "global-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);

      // Remove it after animation
      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return null;
}
