import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-coral-500 border-t-transparent"></div>
    </div>
  );
};

export default LoadingSpinner;