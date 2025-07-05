export interface ReadingCard {
  id: number;
  text: string;
  level: number;
}

export interface MathProblem {
  question: string;
  answer: number;
  options: number[];
}

export type MathType = 'addition' | 'subtraction';

export type Section = 'home' | 'reading' | 'math';

export interface ReadingLevel {
  level: number;
  title: string;
  description: string;
  cards: ReadingCard[];
}
