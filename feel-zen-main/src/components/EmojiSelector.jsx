import React from 'react';

const EmojiSelector = ({ selectedEmoji, onEmojiSelect }) => {
  const emojis = [
    { emoji: '😀', label: 'Happy', name: 'happy' },
    { emoji: '😔', label: 'Sad', name: 'sad' },
    { emoji: '😡', label: 'Angry', name: 'angry' },
    { emoji: '😟', label: 'Worried', name: 'worried' },
    { emoji: '😴', label: 'Tired', name: 'tired' },
    { emoji: '😐', label: 'Neutral', name: 'neutral' }
  ];

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-foreground">
        How would you describe your mood? (Optional)
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
        {emojis.map(({ emoji, label, name }) => (
          <button
            key={emoji}
            type="button"
            onClick={() => onEmojiSelect(selectedEmoji === emoji ? null : emoji)}
            className={`
              flex flex-col items-center p-3 sm:p-4 rounded-xl border-2 transition-bounce
              hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50
              hover-lift group
              ${selectedEmoji === emoji
                ? 'border-primary bg-primary-soft shadow-xl animate-glow'
                : 'border-border glass hover:border-primary/50'
              }
            `}
            title={label}
          >
            <span className="text-2xl sm:text-3xl mb-1 group-hover:animate-bounce">{emoji}</span>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-smooth">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmojiSelector;