// src/components/CustomCursor.jsx
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    const hoverTargets = document.querySelectorAll(".bg-hover");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div className="cursors"
      style={{
        position: "fixed",
        top: (position.y),
        left: (position.x),
        transform: "translate(-50%, -50%)",
        width: "20px",
        height: "20px",
        borderRadius: "40%",
        border: "2px solid cyan",
        backgroundColor: hovering ? "black" : "purple",
        pointerEvents: "none",
        transition: "background-color 0.2s ease",
        zIndex: 9999,
      }}
    />
  );
}