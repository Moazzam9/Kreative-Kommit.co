'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

const funFacts = [
  "We've optimized over 500 websites for speed and performance!",
  "Our team collectively drinks 50+ cups of coffee per week ☕",
  "We speak 12 different programming languages fluently",
  "Our designs have helped businesses increase conversions by up to 300%",
  "We've worked with clients from over 25 countries worldwide 🌍",
  "Our fastest website loads in under 0.8 seconds!",
  "We've written over 100,000 lines of clean, optimized code",
  "Our team has a combined 40+ years of web development experience"
];

export default function RandomFactGenerator() {
  const [randomFact, setRandomFact] = useState(funFacts[0]);

  const showRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    setRandomFact(funFacts[randomIndex]);
  };

  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold mb-4">Fun Fact Generator</h3>
      <div className="bg-primary-50 dark:bg-slate-700 p-6 rounded-lg mb-6">
        <p className="text-lg font-medium text-primary-800 dark:text-primary-200">
          {randomFact}
        </p>
      </div>
      <Button 
        size="sm" 
        className="bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700" 
        onClick={showRandomFact}
      >
        Show Another Fun Fact! 🎉
      </Button>
    </div>
  );
}