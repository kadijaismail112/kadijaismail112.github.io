import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-red-50 text-red-600 p-6 rounded-lg max-w-md text-center">
        <h2 className="text-lg font-semibold mb-2">Error</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;