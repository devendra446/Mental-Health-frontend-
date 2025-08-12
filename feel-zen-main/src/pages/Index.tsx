import React, { useState } from 'react';
import { Heart, Sparkles, Brain, Activity, Zap, Shield, Moon, Sun } from 'lucide-react';
import InputForm from '../components/InputForm';
import ResultDisplay from '../components/ResultDisplay';
import Loader from '../components/Loader';
import { analyzeMood } from '../services/api';
import { useToast } from '../hooks/use-toast';

const Index = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await analyzeMood(formData);
      setResult(response);
      toast({
        title: "Analysis Complete! 🎉",
        description: `We detected a ${response.mood} mood with ${(response.confidence * 100).toFixed(1)}% confidence.`,
      });
    } catch (err) {
      setError(err.message);
      toast({
        title: "Analysis Failed",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        {/* Floating Health Icons Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-float opacity-20">
            <Heart className="w-8 h-8 text-healing" />
          </div>
          <div className="absolute top-40 right-20 animate-float opacity-15" style={{ animationDelay: '2s' }}>
            <Activity className="w-10 h-10 text-wellness" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float opacity-10" style={{ animationDelay: '4s' }}>
            <Zap className="w-6 h-6 text-energy" />
          </div>
          <div className="absolute bottom-60 right-10 animate-float opacity-15" style={{ animationDelay: '1s' }}>
            <Shield className="w-7 h-7 text-calm" />
          </div>
        </div>

        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6 py-4 sm:py-8 md:py-10 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 text-primary">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative">
                <Brain className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 animate-gentle-pulse" />
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-glow"></div>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-healing via-primary to-wellness bg-clip-text text-transparent">
                MindfulMoods
              </h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 animate-gentle-pulse text-hope" />
              <Activity className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 animate-gentle-pulse text-healing" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-6">
            Understand your emotions with AI-powered sentiment analysis. 
            Share your thoughts and receive personalized insights for better mental wellness.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-primary/80 px-4">
            <div className="flex items-center space-x-2 bg-card/50 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-border/50 hover-lift">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-healing" />
              <span className="text-xs sm:text-sm font-medium">Emotional Wellness</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-border/50 hover-lift">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-calm" />
              <span className="text-xs sm:text-sm font-medium">Safe Space</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-border/50 hover-lift">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-energy" />
              <span className="text-xs sm:text-sm font-medium">AI Insights</span>
            </div>
          </div>
        </div>

        {/* Input Form */}
        <div className="relative z-10">
          <InputForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="glass rounded-2xl shadow-2xl border border-border/50 animate-scale-in">
            <Loader message="Analyzing your mood and emotions..." />
          </div>
        )}

        {/* Results or Error */}
        {(result || error) && !isLoading && (
          <div className="relative z-10">
            <ResultDisplay result={result} error={error} />
          </div>
        )}

        {/* Footer */}
        <div className="text-center py-6 sm:py-8 border-t border-border/30 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-muted-foreground text-sm">
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-healing animate-gentle-pulse" />
              <span>Built with care for mental health awareness</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground/50 rounded-full"></div>
            <span className="text-primary font-medium">Remember: You are not alone 💙</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
