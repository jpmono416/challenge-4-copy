import { useState, useEffect } from 'react';

const useAlert = (initialState = { message: '', variant: 'success', show: false }) => {
  const [alert, setAlert] = useState(initialState);

  const showAlert = (message, variant = 'success', duration = 3000) => {
    setAlert({ message, variant, show: true });
    setTimeout(() => setAlert({ ...alert, show: false }), duration);
  };

  return [alert, showAlert];
};

export default useAlert;