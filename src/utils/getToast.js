import { useContext } from 'react';
import { ToastContext } from '@/contexts/ToastContext';

export const getToast = ({ type, text, config }) => {
  const { addToast } = useContext(ToastContext);

  return addToast(type, text, config);
};
