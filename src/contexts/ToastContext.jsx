import React, { useEffect, useState } from 'react';

import ToastList from '@/components/ToastList';
import usePortal from '@/hooks/usePortal';
import ToastGenerator from '@/utils/ToastGenerator';
import ErrorBoundary from '@/components/ErrorBoundary';

export const ToastContext = React.createContext();

export const ToastProvider = (props) => {
  const { children, position = 'bottom-right', maxCount = 4 } = props;
  const [toastList, setToastList] = useState([]);
  usePortal(position);

  const removeToast = (id) => {
    setToastList((prevList) => {
      return prevList.filter((item) => {
        return item.id !== id;
      });
    });
  };

  const addToast = (type, text, config) => {
    setToastList((prevList) => {
      if (prevList.length < 3) {
        return [new ToastGenerator(type, text, config || {}), ...prevList];
      } else if (prevList.length === 3) {
        const newList = [
          new ToastGenerator(type, text, config || {}),
          ...prevList,
        ];
        return newList.slice(0, -1);
      }
    });
  };

  return (
    <ToastContext.Provider
      value={{ addToast, removeToast, position }}
      {...props}
    >
      <ErrorBoundary>
        <ToastList toastList={toastList} setToastList={setToastList} />
        {children}
      </ErrorBoundary>
    </ToastContext.Provider>
  );
};
