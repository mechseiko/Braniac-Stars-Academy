import { useEffect, useState } from "react";

export default function CustomCursor() { 
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (mouse) => {
      setPosition({ x: mouse.clientX, y: mouse.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  
  return (
    <div 
      className="cursors"
      style={{
        position: "fixed",
        top: (position.y),
        left: (position.x),
        width: "25px",
        height: "25px",
        borderRadius: "40%",
        backgroundColor: hovering ? "black" : "purple",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
    </div>
  );
}