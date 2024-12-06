import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const recommendationsData = {
  india: {
    '20-30': [
      'Pap smear and HPV test every 3-5 years.',
      'Breast self-exams.',
      'STD screenings for sexually active women.'
    ],
    '30-40': [
      'Pap smear and HPV tests every 3-5 years.',
      'Mammogram and breast self-examination.',
      'Thyroid function test.',
      'Blood pressure and cholesterol tests.',
      'Blood glucose test annually.',
      'Bone density test.',
      'Eye check-up every 2 years.',
      'Cancer screenings based on risk factors.'
    ],
    '40-50': [
      'Continue Pap smear and HPV tests.',
      'Mammogram annually.',
      'Diabetes screening.',
      'Bone density test.',
      'Cardiovascular health screening.',
      'Cancer screenings based on risk factors.'
    ],
    '50+': [
      'Mammogram annually.',
      'Bone density test.',
      'Colorectal cancer screening.',
      'Heart health tests (cholesterol, blood pressure, glucose).',
      'Regular eye and dental exams.',
      'Pelvic exams, Pap smears, and ultrasounds for cancer screenings.'
    ]
  }
};

function getAgeRange(age) {
  if (age >= 20 && age <= 30) return '20-30';
  else if (age >= 30 && age <= 40) return '30-40';
  else if (age >= 40 && age <= 50) return '40-50';
  else if (age > 50) return '50+';
  else return 'invalid';
}

export default function Home() {
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();
  const numericAge = parseInt(age, 10);
  if (isNaN(numericAge)) {
    setError('Please enter a valid numeric age.');
    return;
  }
  if (numericAge < 20 || numericAge > 100) {
    setError('Please enter an age between 20 and 100.');
    return;
  }
  const ageRange = getAgeRange(numericAge);
  if (ageRange === 'invalid') {
    setError('Please enter a valid age range.');
    return;
  }
  const countryKey = country.toLowerCase();
  if (recommendationsData[countryKey] && recommendationsData[countryKey][ageRange]) {
    setRecommendations(recommendationsData[countryKey][ageRange]);
  } else {
    setError('Recommendations for this country and age range are not available.');
  }
  };

  const countries = ['India', 'USA', 'Canada', 'UK'];

  return (
    <div className="container mt-5">
      <h1 className="text-center">Women's Health Screening Recommendations</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        {/* Form inputs with validation */}
      </form>
      {recommendations.length > 0 && (
        <div className="mt-4">
          <h3 className="text-center">Your Recommendations</h3>
          <ul>
            {recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
      )}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
}
