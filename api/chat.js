import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req, res) {
  // Hanya menerima metode POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { message } = req.body;
    console.log('Local GEMINI_API_KEY present:', Boolean(process.env.GEMINI_API_KEY));

    if (!process.env.GEMINI_API_KEY) {
      return res.status(200).json({ reply: 'AI Assistant belum dikonfigurasi di local. Silakan set GEMINI_API_KEY atau deploy di Vercel untuk mengaktifkan fitur ini.' });
    }

    // Inisialisasi Gemini API menggunakan key dari environment
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // PERBAIKAN FINAL: Gunakan model generasi terbaru (Gemini 2.5) yang aktif
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Ini adalah 'Otak' AI kamu. Silakan edit sesuai profilmu!
    const systemPrompt = `You are a friendly AI Assistant named "Yusri's AI Assistant" on Yusri's portfolio website. 
    Your task is to answer visitors' questions about Yusri's experience, projects, and skills in the field of Data Analytics, Data Science, or Web Development.
    Answer politely, enthusiastically, and concisely in English.
    
    Visitor's question: "${message}"`;

    // Minta AI menghasilkan jawaban
    const result = await model.generateContent(systemPrompt);
    const response = await result.response.text();

    // Kirim jawaban kembali ke frontend
    return res.status(200).json({ reply: response });
    
  } catch (error) {
    console.error("Error AI:", error);
    const isDev = process.env.NODE_ENV !== 'production';
    const errorMessage = isDev
      ? `AI error: ${error.message}${error.status ? ` (status ${error.status})` : ''}`
      : 'Sorry, I encountered an error. Please try again later.';
    return res.status(500).json({ message: errorMessage });
  }
}