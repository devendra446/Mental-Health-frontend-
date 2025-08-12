import React from 'react';
import { Activity, Heart, Brain } from 'lucide-react';

const Loader = ({ message = "Analyzing mood..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 sm:py-12 space-y-6">
      <div className="relative">
        <div className="flex space-x-2">
          <Brain className="w-8 h-8 text-primary animate-bounce" />
          <Activity className="w-8 h-8 text-healing animate-bounce" style={{ animationDelay: '0.1s' }} />
          <Heart className="w-8 h-8 text-hope animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-glow"></div>
      </div>
      
      <div className="text-center space-y-3">
        <p className="text-muted-foreground text-sm sm:text-base font-medium">{message}</p>
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-healing rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-wellness rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
      
      <div className="w-16 h-1 bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-primary via-healing to-wellness animate-shimmer"></div>
      </div>
    </div>
  );
};

export default Loader;