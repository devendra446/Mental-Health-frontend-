import axios from 'axios';

const API_BASE_URL = 'http://localhost:9090/api/analyze';

// Mock API response for demonstration
const mockAnalyzeResponse = (data) => {
  const moodMap = {
    '😀': 'happy',
    '😔': 'sad', 
    '😡': 'angry',
    '😟': 'worried',
    '😴': 'tired',
    '😐': 'neutral'
  };

  // Simple sentiment analysis based on keywords
  const text = data.text.toLowerCase();
  let detectedMood = 'neutral';
  let confidence = 0.7;

  if (text.includes('happy') || text.includes('great') || text.includes('wonderful')) {
    detectedMood = 'happy';
    confidence = 0.9;
  } else if (text.includes('sad') || text.includes('down') || text.includes('depressed')) {
    detectedMood = 'sad';
    confidence = 0.85;
  } else if (text.includes('angry') || text.includes('mad') || text.includes('frustrated')) {
    detectedMood = 'angry';
    confidence = 0.8;
  } else if (text.includes('worried') || text.includes('anxious') || text.includes('stressed')) {
    detectedMood = 'worried';
    confidence = 0.9;
  } else if (text.includes('tired') || text.includes('exhausted') || text.includes('sleepy')) {
    detectedMood = 'tired';
    confidence = 0.8;
  }

  // Use emoji mood if provided
  if (data.emojiMood && moodMap[data.emojiMood]) {
    detectedMood = moodMap[data.emojiMood];
    confidence = Math.min(confidence + 0.1, 0.95);
  }

  const suggestions = {
    happy: "Keep up the positive energy! Consider sharing your joy with others or engaging in activities you love.",
    sad: "It's okay to feel sad sometimes. Try gentle exercise, talking to a friend, or practicing self-compassion.",
    angry: "Take deep breaths and step away from triggers. Try physical exercise or journaling to release tension.",
    worried: "Try the 4-7-8 breathing technique: inhale for 4, hold for 7, exhale for 8. Practice mindfulness meditation.",
    tired: "Prioritize rest and good sleep hygiene. Consider a short walk in nature or gentle stretching.",
    neutral: "A balanced mood is healthy. Consider trying something new or connecting with friends today."
  };

  const quotes = {
    happy: "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    sad: "You've survived 100% of your bad days. Keep going! You're stronger than you think.",
    angry: "Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.",
    worried: "Worry does not take away tomorrow's troubles, it takes away today's peace. - Randy Armstrong",
    tired: "Rest when you're weary. Refresh and renew yourself, your body, your mind, your spirit.",
    neutral: "Every day is a fresh start. What will you create today?"
  };

  return {
    mood: detectedMood,
    confidence: confidence,
    suggestion: suggestions[detectedMood],
    quote: quotes[detectedMood]
  };
};

export const analyzeMood = async (data) => {
  try {
    // For now, use mock response. Replace with actual API call:
    // const response = await axios.post(`${API_BASE_URL}/analyze`, data);
    // return response.data;
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return mockAnalyzeResponse(data);
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Unable to analyze mood. Please try again.');
  }
};