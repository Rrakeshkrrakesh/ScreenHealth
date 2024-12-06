export default function handler(req, res) {
  const { age, country } = req.body;
  let recommendations = [];

  // Validate input
  if (typeof age !== 'number' || typeof country !== 'string') {
    return res.status(400).json({ error: 'Invalid input data.' });
  }

  // Define screenings with criteria and source reference
  const screenings = [
    {
      name: 'Colon Cancer Screening',
      age: 50,
      country: 'all',
      source: 'Health Screening Guidelines for Women 50 to 64 - Health Encyclopedia - University of Rochester Medical Center.pdf'
    },
    {
      name: 'Diabetes Screening',
      age: 45,
      country: 'all',
      source: 'Health Screening Guidelines for Women 50 to 64 - Health Encyclopedia - University of Rochester Medical Center.pdf'
    },
    // Add more screenings from the PDF and other sources here
    // Example:
    // {
    //   name: 'Mammogram',
    //   age: 50,
    //   country: 'all',
    //   source: 'Health Screening Guidelines for Women 50 to 64 - Health Encyclopedia - University of Rochester Medical Center.pdf'
    // }
  ];

  // Filter recommendations based on age and country
  screenings.forEach(screening => {
    if (age >= screening.age && (screening.country === 'all' || screening.country === country)) {
      recommendations.push({
        name: screening.name,
        source: screening.source
      });
    }
  });

  // Send response
  if (recommendations.length > 0) {
    res.status(200).json(recommendations);
  } else {
    res.status(200).json({ message: 'No recommendations available for the given input.' });
  }
}
