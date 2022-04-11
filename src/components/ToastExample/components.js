import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 200px;
`;

export const Button = styled.button`
  min-width: 250px;
  min-height: 75px;
  margin: 20px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;
