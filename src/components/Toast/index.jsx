import React, { useContext, useEffect, useState } from 'react';

import { ToastContext } from '@/contexts/ToastContext';

import { ToastContainer, Icon, Text, Title, Cancel } from './components';

const Toast = ({ properties }) => {
  const { removeToast, position } = useContext(ToastContext);

  const [offsetX, setOffsetX] = useState(0);

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

  const onDragStartHandler = (e) => {
    const parent = e.target.parentNode.getBoundingClientRect();
    setOffsetX(e.pageX - parent.left);
  };

  const onDragHandler = (e) => {
    const parent = e.target.parentNode.getBoundingClientRect();
    const event_offsetX = e.pageX - parent.left;
    if (event_offsetX - offsetX === 100) remove();
  };

  return (
    <ToastContainer
      config={properties}
      position={position}
      draggable={true}
      onDrag={onDragHandler}
      onDragStart={onDragStartHandler}
    >
      <Title>{title}</Title>
      <Icon icon={icon} iconSize={iconSize}></Icon>
      <Text fontSize={fontSize}>{text}</Text>
      <Cancel onClick={remove}>X</Cancel>
    </ToastContainer>
  );
};

export default Toast;
