import { MathProblem, MathType } from '@/types';

export const generateMathProblems = (type: MathType): MathProblem[] => {
  const problems: MathProblem[] = [];
  
  for (let i = 0; i < 10; i++) {
    let num1: number;
    let num2: number;
    let answer: number;
    
    if (type === 'addition') {
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      answer = num1 + num2;
      problems.push({
        question: `${num1} + ${num2} = ?`,
        answer: answer,
        options: generateOptions(answer)
      });
    } else {
      num1 = Math.floor(Math.random() * 10) + 5;
      num2 = Math.floor(Math.random() * num1) + 1;
      answer = num1 - num2;
      problems.push({
        question: `${num1} - ${num2} = ?`,
        answer: answer,
        options: generateOptions(answer)
      });
    }
  }
  
  return problems;
};

export const generateOptions = (correctAnswer: number): number[] => {
  const options = [correctAnswer];
  
  while (options.length < 4) {
    const offset = Math.floor(Math.random() * 6) - 3;
    const wrongAnswer = correctAnswer + offset;
    if (wrongAnswer >= 0 && wrongAnswer !== correctAnswer && !options.includes(wrongAnswer)) {
      options.push(wrongAnswer);
    }
  }
  
  return options.sort(() => Math.random() - 0.5);
};
