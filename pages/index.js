import React, { useState } from 'react';
import AgeBlock from '../components/AgeBlock';
import { useSpring, animated } from '@react-spring/web';
import recommendationsData from '../api/recommendations';
import styles from '../styles/home.module.css';

const ageRanges = ['20-30', '30-40', '40-50', '50+'];
const country = 'india'; // Hardcoded for now

export default function Home() {
  const [selectedRange, setSelectedRange] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const handleAgeSelect = (range) => {
    setSelectedRange(range);
    setRecommendations(recommendationsData[country][range] || []);
  };

  const props = useSpring({
    rotate: recommendations.length ? 360 : 0,
    config: { duration: 1000 },
  });

  return (
    <div className={styles.container}>
      {/* Header and navigation */}
      <section className={styles.hero}>
        {/* Hero section content */}
        <div className={styles.ageBlocks}>
          {ageRanges.map((range) => (
            <AgeBlock
              key={range}
              range={range}
              onClick={() => handleAgeSelect(range)}
              isSelected={selectedRange === range}
            />
          ))}
        </div>
      </section>

      {recommendations.length > 0 && (
        <animated.div style={props} className={styles.recommendations}>
          <h2>Your Recommendations:</h2>
          <ul>
            {recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </animated.div>
      )}

      <section className={styles.references}>
        <h3>References</h3>
        <p>
          Recommendations sourced from:
          <a href="https://example.com/source-document">
            Health Screening Guidelines for Women 50 to 64 - Health Encyclopedia - University of Rochester Medical Center
          </a>
        </p>
      </section>
    </div>
  );
}
