'use client';

import { useState, useRef } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HomeSection from '@/components/HomeSection';
import ReadingSection from '@/components/ReadingSection';
import MathSection from '@/components/MathSection';
import StarEffect from '@/components/StarEffect';
import { Section } from '@/types';

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const starEffectRef = useRef<any>(null);

  const triggerStarEffect = () => {
    if (typeof window !== 'undefined' && (window as any).createStars) {
      (window as any).createStars();
    }
  };

  return (
    <>
      <Header />
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      
      {currentSection === 'home' && <HomeSection onSectionChange={setCurrentSection} />}
      {currentSection === 'reading' && <ReadingSection />}
      {currentSection === 'math' && <MathSection onStarEffect={triggerStarEffect} />}
      
      <StarEffect />
    </>
  );
}
