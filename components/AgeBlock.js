import React from 'react';
import styles from './AgeBlock.module.css';

const AgeBlock = ({ range, onClick, isSelected }) => {
  return (
    <div
      className={`${styles.ageBlock} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
    >
      {range}
    </div>
  );
};

export default AgeBlock;
