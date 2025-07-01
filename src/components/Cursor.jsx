import { useEffect, useState } from "react";

export default function CustomCursor() { 
  const [position, setPosition] = useState({ y: window.innerHeight/2, x: window.innerWidth/2 - 200 });

  useEffect(() => {
    const move = (mouse) => {
      setPosition({ x: mouse.clientX, y: mouse.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  
  return (
    <div 
        className="customCursor"
        style={{
            top: (position.y),
            left: (position.x),
        }}
    ></div>
  );
}