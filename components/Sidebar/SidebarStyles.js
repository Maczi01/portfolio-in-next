import styled from "styled-components";
import letter from '../../assets/letter.svg'

export const Wrapper = styled.nav`
      position: fixed;
      left: 0;
      top: 0;
      padding: 25px 0;
      width: 100px;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      //z-index: 99;
      background-color: ${({theme}) => theme.colors.background2};
`;

export const StyledLinksList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;
