import React, { useContext, useEffect, useState } from 'react';
import { toastContext } from '../../contexts/toastContext';

import { Wrapper, Icon, Text, Title, CancelButton } from './components';

export default ToastItem = ({ properties }) => {
  const { removeToast, position } = useContext(toastContext);

  const { title, icon, text, id, fontSize, iconSize } = properties;

  let upX = 0;
  let downX = 0;

  useEffect(() => {
    const timerId = obj.timer(remove);
    return () => clearTimeout(timerId);
  }, []);

  const remove = () => {
    obj.remove(() => removeToast(id));
  };

  const down = (e) => {
    downX = e.clientX;
  };

  const up = (e) => {
    upX = e.clientX;
    if (upX - downX > 100) {
      remove();
    }
  };

  return (
    <Wrapper
      config={configuration}
      position={position}
      onPointerDown={down}
      onPointerUp={up}
    >
      <Title>{title}</Title>
      <Icon icon={icon} iconSize={iconSize}></Icon>
      <Text fontSize={fontSize}>{text}</Text>
      <CancelButton onClick={remove}>X</CancelButton>
    </Wrapper>
  );
};
