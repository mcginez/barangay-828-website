import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    const systemPrompt = `Ikaw ay isang Barangay Assistant na tumutulong sa mga residente ng Barangay 828. 
    Ang iyong mga tungkulin ay:
    1. Sagutin ang mga katanungan tungkol sa barangay services at procedures
    2. Magbigay ng impormasyon tungkol sa mga dokumento at requirements
    3. Magbigay ng gabay sa mga residente kung saan sila pupunta para sa iba't ibang serbisyo
    4. Magbigay ng impormasyon tungkol sa mga programa at aktibidad ng barangay
    5. Magbigay ng emergency contact numbers kung kinakailangan

    Lagi mong gamitin ang wikang Tagalog sa iyong mga sagot. Maging magalang at propesyonal sa pakikipag-usap.
    Kung hindi mo alam ang sagot, sabihin mo na hindi ka sigurado at imungkahi na pumunta sa barangay hall para sa tamang impormasyon.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${systemPrompt}\n\nUser: ${message}\n\nAssistant:`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API Error:', data);
      return res.status(500).json({ 
        message: "Pasensya na po, may problema sa aming sistema. Pakisubukan po muli mamaya." 
      });
    }

    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || 
      "Pasensya na po, hindi ko maintindihan ang inyong katanungan. Pakisubukan po muli.";

    return res.status(200).json({ message: generatedText });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      message: "Pasensya na po, may problema sa aming sistema. Pakisubukan po muli mamaya." 
    });
  }
} 