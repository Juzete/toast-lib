import styled from 'styled-components';

import animation from './animation';

export const ToastContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 18% 72% 10%;
  align-items: center;
  width: ${(props) => props.config.width}px;
  height: ${(props) => props.config.height}px;
  padding: 10px;
  margin: 25px 10px 10px 10px;
  border-radius: 7px;
  box-shadow: 3px 3px 6px 2px rgba(11, 11, 11, 0.15);
  background-color: ${(props) => props.config.backgroundColor};
  animation-name: ${(props) =>
    props.config.isAnimated
      ? animation(props.config.animationName, props.position)
      : 'none'};
  animation-duration: ${(props) => props.config.animationDuration}s;
  color: ${(props) => props.config.color};
`;

export const Icon = styled.div`
  background-image: url(${(props) => props.icon});
  width: ${(props) => props.iconSize}px;
  height: ${(props) => props.iconSize}px;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  font-family: helvetica;
  font-size: ${(props) => props.fontSize}px;
`;

export const Title = styled.div`
  position: absolute;
  top: -20px;
  left: 5px;
  font-size: ${(props) => props.textSize / 1.5}px;
  color: gray;
`;

export const Cancel = styled.button`
  background-image: url(${(props) => props.icon});
  justify-self: end;
  align-self: start;
  background: none;
  border: none;
  font-size: 18px;
  color: inherit;
  &:hover {
    cursor: pointer;
  }
`;
