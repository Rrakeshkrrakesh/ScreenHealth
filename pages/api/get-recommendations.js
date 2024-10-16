export default function handler(req, res) {
  const { age, country } = req.body;
  let recommendations = [];

  if (age >= 50) {
    recommendations.push('Colon Cancer Screening');
  }
  if (age >= 45) {
    recommendations.push('Diabetes Screening');
  }
  if (country === 'USA') {
    recommendations.push('Cholesterol Check');
  }
  // Add more logic for other countries and ages...

  res.status(200).json(recommendations);
}
