import React from 'react';

import { GlobalStyle } from '@/globalStyle';
import { ToastProvider } from '@/contexts/ToastContext';

import ToastExample from '@/components/ToastExample';

export default {
  title: 'Examples',
  component: ToastExample,
  argTypes: {
    position: {
      defaultValue: 'bottom-right',
      control: {
        type: 'select',
        options: [
          'bottom-right',
          'bottom-left',
          'bottom-middle',
          'top-right',
          'top-left',
          'top-middle',
        ],
      },
    },
    animationName: {
      defaultValue: 'side-push',
      control: {
        type: 'select',
        options: ['side-push', 'transparency'],
      },
    },
    animationDuration: {
      defaultValue: 1,
      control: { type: 'number' },
    },
    showDuration: {
      defaultValue: 0,
      control: { type: 'number' },
    },
  },
};

export const Toasts = (args) => {
  const { maxCount, position } = args;
  return (
    <ToastProvider position={position} maxCount={maxCount}>
      <GlobalStyle />
      <ToastExample config={args} />
    </ToastProvider>
  );
};
