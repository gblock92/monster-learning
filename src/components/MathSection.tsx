'use client';

import { useState, useEffect } from 'react';
import { generateMathProblems } from '../data/mathUtils';
import { MathProblem, MathType } from '../types';
import styles from './MathSection.module.css';

interface MathSectionProps {
  onStarEffect?: () => void;
}

export default function MathSection({ onStarEffect }: MathSectionProps) {
  const [mathType, setMathType] = useState<MathType | null>(null);
  const [problems, setProblems] = useState<MathProblem[]>([]);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const startMath = (type: MathType) => {
    setMathType(type);
    const newProblems = generateMathProblems(type);
    setProblems(newProblems);
    setCurrentProblemIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const checkAnswer = (answer: number) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    const isCorrect = answer === problems[currentProblemIndex].answer;
    if (isCorrect && onStarEffect) {
      onStarEffect();
    }

    setTimeout(() => {
      if (currentProblemIndex < problems.length - 1) {
        setCurrentProblemIndex(currentProblemIndex + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        alert('Great job! You completed all the problems! 🎉');
        backToMathTypes();
      }
    }, 2000);
  };

  const backToMathTypes = () => {
    setMathType(null);
    setProblems([]);
    setCurrentProblemIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  if (mathType === null) {
    return (
      <div className={styles.container}>
        <div className={styles.homeScreen}>
          <div
            className={`${styles.mathTile} ${styles.mathAddition}`}
            onClick={() => startMath('addition')}
          >
            <h2>➕ Addition</h2>
            <p>Add numbers!</p>
          </div>
          <div
            className={`${styles.mathTile} ${styles.mathSubtraction}`}
            onClick={() => startMath('subtraction')}
          >
            <h2>➖ Subtraction</h2>
            <p>Take away!</p>
          </div>
        </div>
      </div>
    );
  }

  const currentProblem = problems[currentProblemIndex];

  return (
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={backToMathTypes}>
        ← Back to Math
      </button>
      <div className={styles.progress}>
        Problem {currentProblemIndex + 1} of {problems.length}
      </div>
      <div className={styles.flashcardContainer}>
        <div className={styles.flashcard}>
          <div>
            <div className={styles.mathProblem}>{currentProblem.question}</div>
            <div className={styles.answerOptions}>
              {currentProblem.options.map((option) => {
                let buttonClass = styles.answerBtn;
                
                if (showResult && selectedAnswer === option) {
                  buttonClass += option === currentProblem.answer 
                    ? ` ${styles.correct}` 
                    : ` ${styles.incorrect}`;
                } else if (showResult && option === currentProblem.answer) {
                  buttonClass += ` ${styles.correct}`;
                }

                return (
                  <button
                    key={option}
                    className={buttonClass}
                    onClick={() => !showResult && checkAnswer(option)}
                    disabled={showResult}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
