import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { uid } from 'uid';
import Toast from '../Toast';

const ToastList = ({ toastList }) => {
  const [toasts, setToasts] = useState([]);

  const editToastList = () => {
    if (toastList.length > toasts.length) {
      setToasts((prevToast) => [
        ...prevToast,
        <Toast properties={toastList[0]} key={uid()} />,
      ]);
    } else if (toastList.length < toasts.length) {
      const listIds = toastList.map((item) => item.id);

      const newToasts = toasts.filter((item) => {
        return listIds.includes(item.props.properties.id);
      });
      setTimeout(() => {
        setToasts(newToasts);
      }, 700);

      return newToasts;
    }
  };

  useEffect(() => {
    editToastList();
    console.log({ toasts });
    console.log({ toastList });
  }, [toastList]);

  return (
    <React.Fragment>
      {ReactDOM.createPortal(toasts, document.getElementById('portal'))}
    </React.Fragment>
  );
};

export default ToastList;
