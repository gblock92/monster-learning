'use client';

import { useState } from 'react';
import { readingLevels } from '../data/readingContent';
import { ReadingCard } from '../types';
import styles from './ReadingSection.module.css';

export default function ReadingSection() {
  const [currentLevel, setCurrentLevel] = useState<number | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentCards, setCurrentCards] = useState<ReadingCard[]>([]);

  const startReading = (level: number) => {
    const levelData = readingLevels.find(l => l.level === level);
    if (levelData) {
      setCurrentLevel(level);
      setCurrentCards(levelData.cards);
      setCurrentCardIndex(0);
    }
  };

  const nextCard = () => {
    if (currentCardIndex < currentCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const previousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const backToLevels = () => {
    setCurrentLevel(null);
    setCurrentCards([]);
    setCurrentCardIndex(0);
  };

  if (currentLevel === null) {
    return (
      <div className={styles.container}>
        <div className={styles.homeScreen}>
          {readingLevels.map((level) => (
            <div
              key={level.level}
              className={`${styles.levelTile} ${styles[`level${level.level}`]}`}
              onClick={() => startReading(level.level)}
            >
              <h2>{level.title}</h2>
              <p>{level.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={backToLevels}>
        ← Back to Levels
      </button>
      <div className={styles.progress}>
        Card {currentCardIndex + 1} of {currentCards.length}
      </div>
      <div className={styles.flashcardContainer}>
        <div className={styles.flashcard} key={currentCardIndex}>
          {currentCards[currentCardIndex]?.text}
        </div>
        <div className={styles.cardControls}>
          <button
            className={styles.controlBtn}
            onClick={previousCard}
            disabled={currentCardIndex === 0}
          >
            ← Previous
          </button>
          <button
            className={styles.controlBtn}
            onClick={nextCard}
            disabled={currentCardIndex === currentCards.length - 1}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
