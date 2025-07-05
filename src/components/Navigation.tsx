import { Section } from '@/types';
import styles from './Navigation.module.css';

interface NavigationProps {
  currentSection: Section;
  onSectionChange: (section: Section) => void;
}

export default function Navigation({ currentSection, onSectionChange }: NavigationProps) {
  return (
    <div className={styles.navButtons}>
      <button 
        className={`${styles.navBtn} ${currentSection === 'home' ? styles.active : ''}`}
        onClick={() => onSectionChange('home')}
      >
        🏠 Home
      </button>
      <button 
        className={`${styles.navBtn} ${currentSection === 'reading' ? styles.active : ''}`}
        onClick={() => onSectionChange('reading')}
      >
        📚 Reading
      </button>
      <button 
        className={`${styles.navBtn} ${currentSection === 'math' ? styles.active : ''}`}
        onClick={() => onSectionChange('math')}
      >
        🔢 Math
      </button>
    </div>
  );
}
