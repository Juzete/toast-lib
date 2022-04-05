import React, { useContext, useEffect, useState } from 'react';

import { ToastContext } from '@/contexts/ToastContext';

import { ToastContainer, Icon, Text, Title, Cancel } from './components';

const Toast = ({ properties }) => {
  const { removeToast, position } = useContext(ToastContext);

  const { title, icon, text, id, fontSize, iconSize } = properties;
  console.log({ properties });

  useEffect(() => {
    const timerId = properties.timer(remove);
    return () => clearTimeout(timerId);
  }, []);

  const remove = () => {
    console.log('rem', id);
    properties.remove(() => removeToast(id));
  };

  return (
    <ToastContainer config={properties} position={position}>
      <Title>{title}</Title>
      <Icon icon={icon} iconSize={iconSize}></Icon>
      <Text fontSize={fontSize}>{text}</Text>
      <Cancel onClick={remove}>X</Cancel>
    </ToastContainer>
  );
};

export default Toast;
