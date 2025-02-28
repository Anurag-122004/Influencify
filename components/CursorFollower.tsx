"use client";

import { useEffect, useState, useRef } from "react";

interface Position {
  x: number;
  y: number;
}

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const position = useRef<Position>({ x: 0, y: 0 }); // ✅ Use ref to store position
  const [, forceRender] = useState({}); // To trigger occasional re-renders

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const animateCircle = () => {
      const dx = mousePosition.x - position.current.x;
      const dy = mousePosition.y - position.current.y;

      position.current = {
        x: position.current.x + dx * 0.2,
        y: position.current.y + dy * 0.2,
      };

      forceRender({}); // ✅ Only trigger occasional re-renders

      animationFrameId = requestAnimationFrame(animateCircle);
    };

    animationFrameId = requestAnimationFrame(animateCircle);

    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition]); // ✅ Remove `position` dependency

  return (
    <div
      className={`fixed w-6 h-6 rounded-full bg-pink-400/50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-opacity duration-700 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${position.current.x}px`,
        top: `${position.current.y}px`,
      }}
    />
  );
}
