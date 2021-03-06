import styled from "styled-components";
import Image from "next/dist/client/image";

export const AboutTitle = styled.div`
    justify-content: flex-start;
    font-size: 8rem; 
    display: flex;
    padding: 20px;
    margin: 20px;
    font-weight: bold;
    color: ${({color, theme}) => color === "yellow" ? theme.colors.background2 : theme.colors.text};
           &::after {
               content: '.';
               color: ${({theme}) => theme.colors.background2};
               margin-right: 10px;
           }
`;

export const AboutSection = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex"};
  // flex-direction: ${(props) => props.row ? "row" : "column"};
  flex-direction: column;
  // padding: ${(props) => props.nopadding ? "0" : "32px 48px 0"} ;
  padding: 32px 48px;
  margin: 0 auto;
  //max-width: 1040px;
  //width: 100vh;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  background-color: ${({theme}) => theme.colors.background} ;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`

export const ImageWrapper = styled(Image)`
   position: absolute;
  top:0;
  z-index: -99;
`

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 30px;
  padding: 30px;
  //justify-content: space-around;
`

export const SkillsTable = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 3px solid ${({theme}) => theme.colors.background2};
  margin: 10px;
  width: 500px;
`


export const SkillsList = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
`

export const SkillsItem = styled.li`
    ::before {
    content: "•"; 
    color: ${({theme}) => theme.colors.background2};
    margin-left: -1em}
`

export const SkillsTitle = styled.p`
  justify-content: center;
  align-items: center;
    font-size: 4rem;
    display: flex;
    padding: 10px;
    margin: 20px
`

