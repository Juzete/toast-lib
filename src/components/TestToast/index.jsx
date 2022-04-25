import React from 'react';
import { getToast } from '../../utils/getToast';
import ToastContainer from '../ToastContainer';
const TestToast = () => {
  return (
    <ToastContainer maxCount={3} position={'bottom-right'}>
      <button
        onClick={() => {
          getToast('success', 'success', { maxCount, position });
        }}
      >
        click
      </button>
    </ToastContainer>
  );
};

export { TestToast };
