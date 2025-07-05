'use client';

import { useState, useEffect } from 'react';
import styles from './StarEffect.module.css';

interface Star {
  id: number;
}

export default function StarEffect() {
  const [stars, setStars] = useState<Star[]>([]);

  const createStars = () => {
    const newStars: Star[] = [];
    
    for (let i = 0; i < 10; i++) {
      newStars.push({
        id: Date.now() + i
      });
    }
    
    setStars(newStars);
    
    // Clean up stars after animation
    setTimeout(() => {
      setStars([]);
    }, 5000);
  };

  // Expose the createStars function globally for other components to use
  useEffect(() => {
    (window as any).createStars = createStars;
    
    return () => {
      delete (window as any).createStars;
    };
  }, []);

  return (
    <div className={styles.stars}>
      {stars.map((star, index) => (
        <div
          key={star.id}
          className={styles.star}
          data-index={index}
        >
          ⭐
        </div>
      ))}
    </div>
  );
}
