import styled from 'styled-components';

import animation from './animation';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${(props) => props.config.width}px;
  height: ${(props) => props.config.height}px;
  padding: 10px;
  margin: 30px 10px 5px 10px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 2px rgba(11, 11, 11, 0.3);
  background-color: ${(props) => props.config.color};
  animation-name: ${(props) =>
    props.config.isAnimated
      ? animation(props.config.animationName, props.position)
      : 'none'};
  animation-duration: ${(props) => props.config.animationDuration}s;
  color: ${(props) => props.config.textColor};
`;

export const Icon = styled.div`
  width: ${(props) => props.iconSize}px;
  height: ${(props) => props.iconSize}px;
  background-image: url(${(props) => props.icon});
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.textSize}px;
`;

export const Title = styled.div`
  position: absolute;
  top: -20px;
  left: 0;
  font-size: ${(props) => props.textSize / 1.5}px;
  color: black;
`;

export const CancelButton = styled.button`
  justify-self: end;
  align-self: start;
  background: none;
  border: none;
  background-image: url(${(props) => props.icon});
  &:hover {
    cursor: pointer;
  }
`;
