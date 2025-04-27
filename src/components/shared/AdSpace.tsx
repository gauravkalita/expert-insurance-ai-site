
import React from 'react';

interface AdSpaceProps {
  location: 'top' | 'sidebar' | 'in-content';
  className?: string;
}

export const AdSpace = ({ location, className = '' }: AdSpaceProps) => {
  return (
    <div className={`p-6 bg-gray-100 border border-gray-200 rounded-lg text-center ${className}`}>
      <div className="flex items-center justify-center h-[120px]">
        <p className="text-gray-500 font-medium">Advertisement Space ({location})</p>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        This content is clearly labeled for transparency.
        All advertisements are reviewed to ensure relevance to our audience.
      </p>
    </div>
  );
};
