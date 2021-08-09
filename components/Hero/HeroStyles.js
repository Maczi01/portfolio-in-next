import styled from "styled-components";

export const PageWrapper = styled.div`
 position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -10;
`

export const HeroWrapper = styled.div`
     height: 100%;
     //width: 89vw; 
     min-height:100vh;       
     display: flex;
     flex-direction: column;
     margin: 0 auto;
     align-items: center;
     color: ${({theme}) => theme.colors.text};
`;

export const HeroLinksList = styled.div`
    justify-content: flex-start;
    font-size: 3rem;
    display: flex;
    padding: 10px;
    margin: 20px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.text};
`;

export const HeroLink = styled.a`
    justify-content: flex-start;
    font-size: 3rem;
    display: flex;
    font-weight: bold;
    color: ${({theme}) => theme.colors.text};
`;
