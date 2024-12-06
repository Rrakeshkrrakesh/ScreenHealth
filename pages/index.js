import { useState } from 'react';
import AgeBlock from '../components/AgeBlock';
import Recommendations from '../components/Recommendations';
import recommendationsData from '../utils/recommendationsData'; // Corrected import
import styles from '../styles/Index.module.css'; // Assuming you renamed this


const ageRanges = ['20-30', '30-40', '40-50', '50+'];
const country = 'india';

export default function Home() {
  const [selectedRange, setSelectedRange] = useState(null);


  const handleAgeSelect = (range) => {
    setSelectedRange(range);
  };

  const recommendations = selectedRange
    ? recommendationsData.india[selectedRange] || ['No specific recommendations for this age range. Consult your doctor.']
    : [];

    const references = selectedRange
    ? recommendationsData.references.india[selectedRange] || []
    : [];

  return (
    <div className={styles.container}>
      {/* Header and navigation */}

      <section className={styles.hero}>
        {/* ... hero section content */}
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

      {selectedRange && ( // Pass recommendations and references to the component
        <Recommendations recommendations={recommendations} references={references} />
      )}
    </div>
  );
}
