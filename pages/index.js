import { useState } from 'react';

export default function Home() {
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [recommendations, setRecommendations] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/get-recommendations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ age, country }),
    });
    const data = await res.json();
    setRecommendations(data);
  };

  return (
    <div>
      <h1>Health Screening Recommendations</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter your country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <button type="submit">Get Recommendations</button>
      </form>
      {recommendations && (
        <div>
          <h2>Recommended Screenings:</h2>
          <ul>
            {recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
