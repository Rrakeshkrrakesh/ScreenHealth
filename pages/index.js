// pages/index.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add Bootstrap for styling

export default function Home() {
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [recommendations, setRecommendations] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to provide recommendations based on age and country
    if (country.toLowerCase() === 'india') {
      if (age >= 20 && age <= 30) {
        setRecommendations(`
          **Tests for Women in their 20s**:
          - Pap smear and HPV test every 3-5 years.
          - Breast self-exams.
          - STD screenings for sexually active women.
        `);
      } else if (age >= 30 && age <= 40) {
        setRecommendations(`
          **Tests for Women in their 30s**:
          1. Pap smear and HPV tests every 3-5 years.
          2. Mammogram and breast self-examination.
          3. Thyroid function test.
          4. Blood pressure and cholesterol tests.
          5. Blood glucose test annually.
          6. Bone density test.
          7. Eye check-up every 2 years.
          8. Cancer screenings based on risk factors.
        `);
      } else if (age >= 40 && age <= 50) {
        setRecommendations(`
          **Tests for Women in their 40s**:
          1. Continue Pap smear and HPV tests.
          2. Mammogram annually.
          3. Diabetes screening.
          4. Bone density test.
          5. Cardiovascular health screening.
          6. Cancer screenings based on risk factors.
        `);
      } else if (age > 50) {
        setRecommendations(`
          **Tests for Women 50+**:
          1. Mammogram annually.
          2. Bone density test.
          3. Colorectal cancer screening.
          4. Heart health tests (cholesterol, blood pressure, glucose).
          5. Regular eye and dental exams.
          6. Pelvic exams, Pap smears, and ultrasounds for cancer screenings.
        `);
      }
    } else {
      setRecommendations("Please enter a valid country.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Women's Health Screening Recommendations</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label>Enter Your Age:</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Enter Your Country:</label>
          <input
            type="text"
            className="form-control"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Get Recommendations</button>
      </form>
      {recommendations && (
        <div className="mt-4">
          <h3 className="text-center">Your Recommendations</h3>
          <p>{recommendations}</p>
        </div>
      )}
    </div>
  );
}
