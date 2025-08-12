import React from 'react';
import { Brain, Lightbulb, Quote, Heart, TrendingUp, Zap, Shield } from 'lucide-react';
import { getMoodColor } from '../utils/moodColors';

const ResultDisplay = ({ result, error }) => {
  if (error) {
    return (
      <div className="glass border border-destructive/20 rounded-2xl p-6 text-center animate-slide-up hover-lift">
        <div className="text-destructive text-4xl mb-3">⚠️</div>
        <h3 className="text-lg font-semibold text-destructive mb-2">Something went wrong</h3>
        <p className="text-destructive/80">{error}</p>
      </div>
    );
  }

  if (!result) return null;

  const { mood, confidence, suggestion, quote } = result;
  const moodColor = getMoodColor(mood);
  const confidencePercentage = (confidence * 100).toFixed(1);

  const moodEmojis = {
    happy: '😊',
    sad: '😔',
    angry: '😠',
    worried: '😟',
    tired: '😴',
    neutral: '😐'
  };

  return (
    <div className="space-y-4 sm:space-y-6 animate-slide-up">
      {/* Mood Detection Card */}
      <div className="glass rounded-2xl shadow-2xl border border-border/50 p-4 sm:p-6 lg:p-8 hover-glow">
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="relative group">
              <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-gentle-pulse" />
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-glow"></div>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">Mood Analysis</h2>
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-healing animate-gentle-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <div className="space-y-4">
            <div className="text-5xl sm:text-6xl lg:text-7xl mb-4 animate-scale-in">
              {moodEmojis[mood] || '😐'}
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-healing via-primary to-wellness bg-clip-text text-transparent capitalize">
                {mood}
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-gentle-pulse"></div>
                  <p className="text-muted-foreground font-medium text-sm sm:text-base">
                    Confidence: <span className="text-primary font-bold">{confidencePercentage}%</span>
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <Zap className="w-4 h-4 text-energy" />
                  <span className="text-xs text-energy font-medium">AI Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suggestion Card */}
      <div className="glass border border-accent/30 rounded-2xl p-4 sm:p-6 lg:p-8 hover-lift">
        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent to-wellness rounded-full flex items-center justify-center hover-glow">
            <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-white animate-gentle-pulse" />
          </div>
          <div className="space-y-2 flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg sm:text-xl font-semibold text-accent-foreground">
                Personalized Suggestion
              </h3>
              <Shield className="w-4 h-4 text-calm" />
            </div>
            <p className="text-accent-foreground/90 leading-relaxed text-sm sm:text-base">
              {suggestion}
            </p>
          </div>
        </div>
      </div>

      {/* Motivational Quote Card */}
      <div className="glass border border-primary/20 rounded-2xl p-4 sm:p-6 lg:p-8 hover-lift">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
            <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <h3 className="text-lg sm:text-xl font-semibold text-primary text-center sm:text-left">
              A Message for You
            </h3>
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-hope animate-gentle-pulse" />
          </div>
          <blockquote className="text-primary/90 text-base sm:text-lg leading-relaxed italic text-center sm:text-left">
            "{quote}"
          </blockquote>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-muted-foreground text-sm">
          <div className="flex items-center space-x-2">
            <Heart className="w-4 h-4 text-healing animate-gentle-pulse" />
            <span>Remember, it's okay to feel all emotions</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-muted-foreground/50 rounded-full"></div>
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-calm" />
            <span className="text-primary font-medium">Take care of yourself today 💙</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;