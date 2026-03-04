'use client';

import { useEffect, useState } from "react";

interface Star {
  id: string;
  top: string;
  left: string;
  duration: string;
}

export default function Stars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 100 }).map(() => ({
        id: crypto.randomUUID(),
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        duration: `${Math.random() * 2 + 1}s`,
      }))
    );
  }, []);

  return (
    <div className="stars">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}