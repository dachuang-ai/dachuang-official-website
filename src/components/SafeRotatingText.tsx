import { useEffect, useState } from 'react';
import './SafeRotatingText.css';

interface SafeRotatingTextProps {
  words: string[];
  interval?: number;
}

export default function SafeRotatingText({
  words,
  interval = 2200,
}: SafeRotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive(false);

      window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setActive(true);
      }, 280);
    }, interval);

    return () => window.clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="safe-rotating-shell">
      <span className={`safe-rotating-text ${active ? 'is-active' : 'is-exit'}`}>
        {words[index]}
      </span>
    </span>
  );
}