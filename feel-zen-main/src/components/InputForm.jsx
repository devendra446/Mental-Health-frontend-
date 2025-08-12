import React, { useState } from 'react';
import { Heart, Sparkles, Send, MessageCircle, Activity } from 'lucide-react';
import SliderInput from './SliderInput';

const InputForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    text: '',
    sleepQuality: null,
    energyLevel: null,
    stressLevel: null
  });

  const [charCount, setCharCount] = useState(0);
  const maxChars = 1000;

  const handleTextChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxChars) {
      setFormData(prev => ({ ...prev, text }));
      setCharCount(text.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.text.trim()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="glass rounded-2xl shadow-2xl border border-border/50 p-4 sm:p-6 lg:p-8 space-y-6 hover-glow animate-scale-in">
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center space-x-3 text-primary">
          <div className="relative">
            <Heart className="w-6 h-6 sm:w-7 sm:h-7 animate-gentle-pulse" />
            <div className="absolute inset-0 bg-healing/20 rounded-full animate-glow"></div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-healing to-wellness bg-clip-text text-transparent">
            How are you feeling today?
          </h2>
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-hope animate-gentle-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        <p className="text-muted-foreground text-sm sm:text-base">
          Share your thoughts and let us help you understand your emotional state
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Journal Text Input */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-4 h-4 text-primary" />
            <label className="block text-sm font-medium text-foreground">
              Journal Entry <span className="text-destructive">*</span>
            </label>
          </div>
          <div className="relative group">
            <textarea
              value={formData.text}
              onChange={handleTextChange}
              placeholder="Write a few lines about your day or mood... Share what's on your mind, how you're feeling, or what's been happening in your life."
              className="
                w-full min-h-[120px] sm:min-h-[140px] md:min-h-[160px] p-4 rounded-xl border border-input bg-white 
                resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 
                focus:border-primary transition-smooth text-gray-900 font-medium
                placeholder:text-gray-400 backdrop-blur-sm
                group-hover:border-primary/30 text-base leading-relaxed
              "
              style={{ color: '#1f2937' }}
              required
            />
            <div className="absolute bottom-3 right-3 flex items-center space-x-2">
              <Activity className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                {charCount}/{maxChars}
              </span>
            </div>
          </div>
        </div>


        {/* Slider Inputs */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-wellness" />
            <h3 className="text-lg font-semibold text-foreground">
              Additional Details (Optional)
            </h3>
          </div>
          
          <div className="grid gap-4 sm:gap-6">
            <SliderInput
              label="Sleep Quality Last Night"
              value={formData.sleepQuality}
              onChange={(value) => setFormData(prev => ({ ...prev, sleepQuality: value }))}
            />
            
            <SliderInput
              label="Energy Level Today"
              value={formData.energyLevel}
              onChange={(value) => setFormData(prev => ({ ...prev, energyLevel: value }))}
            />
            
            <SliderInput
              label="Stress Level Today"
              value={formData.stressLevel}
              onChange={(value) => setFormData(prev => ({ ...prev, stressLevel: value }))}
            />
          </div>
        </div>

        {/* Analysis Info */}
        <div className="text-center space-y-2 py-2">
          <p className="text-sm text-muted-foreground">
            Ready to analyze your mood and emotions?
          </p>
          <p className="text-xs text-muted-foreground/80">
            Our AI will provide personalized insights based on your journal entry
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!formData.text.trim() || isLoading}
          className="
            w-full py-3 sm:py-4 md:py-5 px-6 relative overflow-hidden
            rounded-xl font-bold text-base sm:text-lg md:text-xl shadow-lg
            hover:shadow-2xl hover:scale-[1.02] focus:outline-none 
            focus:ring-2 focus:ring-primary/50 transition-smooth
            disabled:opacity-50 disabled:cursor-not-allowed 
            disabled:hover:scale-100 disabled:hover:shadow-lg
            bg-gradient-to-r from-healing to-wellness text-white
            hover-glow group
          "
        >
          {isLoading ? (
            <span className="flex items-center justify-center space-x-2 text-white drop-shadow-lg">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span className="font-bold text-lg">Analyzing...</span>
            </span>
          ) : (
            <span className="flex items-center justify-center space-x-2 text-white drop-shadow-lg">
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform drop-shadow-lg" />
              <span className="font-bold text-lg tracking-wide" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>ANALYZE</span>
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </button>
      </form>
    </div>
  );
};

export default InputForm;