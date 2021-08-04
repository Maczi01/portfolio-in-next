import styled from "styled-components";
import Image from 'next/image'

export const ProjectsSection = styled.section`
    //display: ${(props) => props.grid ? "grid" : "flex"};
    display: flex;
    flex-direction: ${(props) => props.row ? "row" : "column"};
    padding: ${(props) => props.nopadding ? "0" : "32px 48px 0"} ;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
    //width: 100vh;
    box-sizing: content-box;
    position: relative;
    overflow: hidden;
    //grid-template-columns: 1fr 1fr 1fr;
    background-color: ${({theme}) => theme.colors.background} ;
`

export const GridContainer = styled.section`
    display: grid;
    //width: 100vh;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    grid-template-rows: 500px;
    //grid-auto-rows: 200px;
    //padding: 3rem;
    //place-items: center;
    column-gap: 2rem;
    row-gap: 2rem;
`


export const Img = styled(Image)`
  //width:200px;
  //height:200px;
  width:100%;
  height:100%;
  //object-fit: cover;
  overflow: hidden;
`

export const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  max-width: 400px;
  border: 2px black solid;
  overflow: hidden;
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  line-height: 24px;
  text-align: justify;
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`