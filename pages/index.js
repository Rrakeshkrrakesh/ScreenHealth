import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';  
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
  },
  // Add other countries here
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

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/screenings">Screenings</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/resources">Resources</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className={styles.hero}>
        <h1>Welcome to Women's Health Screening Recommendations</h1>
        <p>Get personalized health screening advice based on your age and country.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Your Age:</label>
            <input type="number" className="form-control" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">Your Country:</label>
            <input type="text" className="form-control" id="country" value={country} onChange={(e) => setCountry(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary">Get Recommendations</button>
        </form>
      </section>

      <section className={styles.recommendations}>
        {recommendations.length > 0 && (
          <div>
            <h2>Your Recommendations:</h2>
            <ul>
              {recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}
          
