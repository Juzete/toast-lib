import React from 'react';

import Toast from '@/components/Toast';
import { ToastProvider } from '@/contexts/ToastContext';
import ToastGenerator from '@/utils/ToastGenerator';
import { defaultSizes } from '../presets/toastsDefaultProperties';

export default {
  title: 'Custom',
  component: Toast,
  argTypes: {
    type: {
      defaultValue: 'info',
      control: {
        type: 'select',
        options: ['info', 'warning', 'error', 'success'],
      },
    },
    text: {
      defaultValue: 'Text',
      control: { type: 'text' },
    },
    title: {
      defaultValue: 'Title',
      control: { type: 'text' },
    },
    color: {
      defaultValue: 'black',
      control: { type: 'color' },
    },
    textColor: {
      defaultValue: 'white',
      control: { type: 'color' },
    },
    spacing: {
      defaultValue: [10, 10, 10, 10],
      control: { type: 'array' },
    },
  },
};

export const Edit = (args) => {
  const toast = new ToastGenerator(args.type, args.text, args);
  toast.isAnimated = false;
  return (
    <ToastProvider>
      <Toast properties={toast} />
    </ToastProvider>
  );
};

Edit.args = {
  textColor: 'white',
  fontSize: defaultSizes.fontSize,
  iconSize: defaultSizes.iconSize,
};
