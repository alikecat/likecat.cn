import React from 'react';
import { getBadgeColorClass, type ColorType } from '@/app/colorConfig';

interface BadgesProps {
  items: string[];
  color?: ColorType;
  className?: string;
}

export const Badges: React.FC<BadgesProps> = ({ 
  items, 
  color = 'blue',
  className = '' 
}) => {
  const badgeColorClass = getBadgeColorClass(color);

  return (
    <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {items.map((item, index) => (
        <span
          key={index}
          className={`
            px-3 py-1 rounded-full text-xs border 
            ${badgeColorClass}
            hover:bg-opacity-40 transition-all duration-300
          `}
        >
          {item}
        </span>
      ))}
    </div>
  );
};