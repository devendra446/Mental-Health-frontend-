export const moodColors = {
  happy: {
    bg: 'bg-green-100',
    border: 'border-green-300',
    text: 'text-green-800',
    icon: 'text-green-600'
  },
  sad: {
    bg: 'bg-blue-100',
    border: 'border-blue-300', 
    text: 'text-blue-800',
    icon: 'text-blue-600'
  },
  angry: {
    bg: 'bg-red-100',
    border: 'border-red-300',
    text: 'text-red-800', 
    icon: 'text-red-600'
  },
  worried: {
    bg: 'bg-orange-100',
    border: 'border-orange-300',
    text: 'text-orange-800',
    icon: 'text-orange-600'
  },
  tired: {
    bg: 'bg-purple-100',
    border: 'border-purple-300',
    text: 'text-purple-800',
    icon: 'text-purple-600'
  },
  neutral: {
    bg: 'bg-gray-100',
    border: 'border-gray-300',
    text: 'text-gray-800',
    icon: 'text-gray-600'
  }
};

export const getMoodColor = (mood) => {
  return moodColors[mood] || moodColors.neutral;
};