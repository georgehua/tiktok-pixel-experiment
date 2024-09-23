import { useState, useEffect } from 'react';

export default function Snackbar({ message, show, duration = 3000 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timeout = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [show, duration]);

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-lg transition-opacity ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDuration: '300ms' }}
    >
      {message}
    </div>
  );
}
