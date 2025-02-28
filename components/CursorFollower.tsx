"use client";

import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export function CursorFollower() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

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
      const dx = mousePosition.x - position.x;
      const dy = mousePosition.y - position.y;

      setPosition({
        x: position.x + dx * 0.2,
        y: position.y + dy * 0.2,
      });

      animationFrameId = requestAnimationFrame(animateCircle);
    };

    animationFrameId = requestAnimationFrame(animateCircle);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition, position]);

  return (
    <div
      className={`fixed w-6 h-6 rounded-full bg-pink-400/50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-opacity duration-700 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
