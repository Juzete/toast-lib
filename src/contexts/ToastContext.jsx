import React, { useState } from 'react';

import ToastList from '@/components/ToastList';
import usePortal from '@/hooks/usePortal';
import ToastGenerator from '@/utils/ToastGenerator';
import ErrorBoundary from '@/components/ErrorBoundary';

export const ToastContext = React.createContext();

export const ToastProvider = (props) => {
  const { children, position = 'bottom-right', maxCount = 3 } = props;
  const [toastList, setToastList] = useState([]);
  usePortal(position);

  const addToast = (type, text, config) => {
    setToastList((prevList) => {
      if (prevList.length < maxCount) {
        return [new ToastGenerator(type, text, config || {}), ...prevList];
      } else {
        return prevList;
      }
    });
  };

  const removeToast = (id) => {
    setToastList((prevList) => {
      return prevList.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <ToastContext.Provider
      value={{ addToast, removeToast, position }}
      {...props}
    >
      <ErrorBoundary>
        <ToastList toastList={toastList} />
        {children}
      </ErrorBoundary>
    </ToastContext.Provider>
  );
};
