import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 200px;
`;

export const Button = styled.button`
  min-width: 250px;
  min-height: 75px;
  margin: ${({ theme }) => theme.spaces[6]}px;
  border: none;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize[1]}px;
  &:hover {
    cursor: pointer;
  }
`;
