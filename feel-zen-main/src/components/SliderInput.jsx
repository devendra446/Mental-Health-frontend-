import React from 'react';

const SliderInput = ({ label, value, onChange, min = 1, max = 10, step = 1 }) => {
  return (
    <div className="space-y-3 group">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <span className="text-sm font-semibold text-primary px-3 py-1 bg-primary-soft rounded-full border border-primary/20 group-hover:animate-gentle-pulse">
          {value || min}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value || min}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="
            w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-primary/50
            hover:h-4 transition-all duration-200
          "
          style={{
            background: `linear-gradient(to right, 
              hsl(var(--primary)) 0%, 
              hsl(var(--primary)) ${((value || min) - min) / (max - min) * 100}%, 
              hsl(var(--muted)) ${((value || min) - min) / (max - min) * 100}%, 
              hsl(var(--muted)) 100%)`
          }}
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span className="group-hover:text-primary transition-smooth">{min}</span>
          <span className="group-hover:text-primary transition-smooth">{max}</span>
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div 
            className="absolute w-1 h-1 bg-primary rounded-full shadow-lg animate-gentle-pulse"
            style={{
              left: `${((value || min) - min) / (max - min) * 100}%`,
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderInput;