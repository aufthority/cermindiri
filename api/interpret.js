export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    age, sex, weight, height, waist,
    bmi, bmiCategory, waistCategory,
    whtRatio, whtCategory
  } = req.body;

  const waistThreshold = sex === 'male' ? 90 : 80;

  const prompt = `You are a compassionate, evidence-based health advisor specialising in Southeast Asian and Malaysian population health. A user has submitted their body measurements. Give them a warm, honest, and actionable health interpretation.

User profile:
- Age: ${age} years old
- Sex: ${sex}
- Weight: ${weight} kg, Height: ${height} cm
- Waist circumference: ${waist} cm (WHO Asian threshold for ${sex}s: ${waistThreshold} cm)

Calculated metrics:
- BMI: ${bmi} → ${bmiCategory} (WHO Asia-Pacific cutoffs: healthy = 18.5–22.9, overweight = 23–27.4, obese ≥ 27.5)
- Waist circumference risk: ${waistCategory}
- Waist-to-Height Ratio: ${whtRatio} → ${whtCategory} (threshold: 0.5)

Write 3 short paragraphs:
1. A clear, honest summary of their overall health risk profile based on all three metrics together. Be direct but kind. Reference Malaysian or SEA population context where relevant.
2. The most important lifestyle changes they should focus on. Be specific and culturally relevant — mention local Malaysian foods (e.g. nasi lemak, teh tarik, roti canai, kuih), portion strategies, and realistic activity options.
3. A motivating closing paragraph that acknowledges their effort in checking their numbers and encourages next steps, including seeing a doctor if risk is moderate or high.

Keep each paragraph to 3–4 sentences. Write in plain English, conversational but authoritative. Do not use bullet points or headers. Do not repeat the raw numbers back to them.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 600,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Anthropic API error:', data);
      return res.status(500).json({ error: 'API error', details: data });
    }

    const interpretation = data.content?.[0]?.text || '';
    return res.status(200).json({ interpretation });

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
