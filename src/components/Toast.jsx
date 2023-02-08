import React, { useState } from 'react';

const Toast = ({ message }) => {
  const [showToast, setShowToast] = useState(true);

  return (
    showToast && (
      <div
        className="fixed bottom-0 left-0 right-0 m-auto py-4 px-6 bg-green-500 text-white rounded-lg shadow-lg"
        style={{ maxWidth: '400px' }}
      >
        {message}
        <button
          className="ml-2 p-1 bg-green-500 text-white rounded-full hover:bg-white hover:text-green-500"
          onClick={() => setShowToast(false)}
        >
          ✖️
        </button>
      </div>
    )
  );
};

export default Toast;