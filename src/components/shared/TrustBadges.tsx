
import React from 'react';
import { Award, Clock, Shield } from 'lucide-react';

export const TrustBadges = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 border border-primary-100 rounded-full text-sm text-primary">
        <Award size={16} />
        <span>Expert-Reviewed Content</span>
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-100 rounded-full text-sm text-green-600">
        <Clock size={16} />
        <span>Updated for 2025</span>
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-sm text-blue-600">
        <Shield size={16} />
        <span>Trusted Insurance Resource</span>
      </div>
    </div>
  );
};
