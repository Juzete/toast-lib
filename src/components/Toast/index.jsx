import React, { useContext, useEffect, useState } from 'react';

import { ToastContext } from '@/contexts/ToastContext';

import { ToastContainer, Icon, Text, Title, Cancel } from './components';

const Toast = ({ properties }) => {
  const { removeToast, position } = useContext(ToastContext);

  const [offsetX, setOffsetX] = useState(0);

  const { title, icon, text, id, fontSize, iconSize } = properties;

  useEffect(() => {
    const timerId = properties.timer(remove);
    return () => clearTimeout(timerId);
  }, []);

  const remove = () => {
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
      <Text fontSize={fontSize} data-test-id={`toastText${properties.title}`}>
        {text}
      </Text>
      <Cancel onClick={remove} data-test-id={`toastClose${properties.title}`}>
        X
      </Cancel>
    </ToastContainer>
  );
};

export default Toast;
