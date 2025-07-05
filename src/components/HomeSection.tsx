import { Section } from '@/types';
import styles from './HomeSection.module.css';

interface HomeSectionProps {
  onSectionChange: (section: Section) => void;
}

export default function HomeSection({ onSectionChange }: HomeSectionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.homeScreen}>
        <div className={styles.levelTile} onClick={() => onSectionChange('reading')}>
          <h2>📖 Reading</h2>
          <p>Learn to read!</p>
        </div>
        <div className={styles.mathTile} onClick={() => onSectionChange('math')}>
          <h2>➕➖ Math</h2>
          <p>Practice numbers!</p>
        </div>
      </div>
    </div>
  );
}
