import styled from 'styled-components';

export const ButtonIcon = styled.a`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({icon}) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  border: none;
  background-color: ${({theme}) => theme.colors.background1};
  &.active {
    background-color: white;
  }
`;