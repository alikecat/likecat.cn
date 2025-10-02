import React from 'react';
import { ColorType, getCardColorClasses } from '@/app/colorConfig';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  color?: ColorType;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hoverEffect = true,
  color = 'default'
}) => {
  const colorClasses = getCardColorClasses(color, hoverEffect);
  
  return (
    <div 
      className={`${colorClasses} ${className}`}
    >
      {children}
    </div>
  );
};