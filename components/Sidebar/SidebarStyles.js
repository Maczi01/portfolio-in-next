import styled from "styled-components";
import letter from '../../assets/letter.svg'

export const Wrapper = styled.nav`
      position: fixed;
      left: 0;
      top: 0;
      padding: 25px 0;
      margin-left: 10px;
      width: 50px;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 999;
      //background-color: ${({theme}) => theme.colors.background1};
      background-color: transparent;
`;

export const StyledLinksList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    list-style: none;
    height: 40%;
`;
