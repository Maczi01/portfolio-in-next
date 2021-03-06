import styled from 'styled-components'

export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex"};
  flex-direction: ${(props) => props.row ? "row" : "column"};
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0"} ;
  margin: 0 auto;
  //max-width: 1040px;
  width: 100vh;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  background-color: ${({theme}) => theme.colors.background} ;
`

export const LeftSection = styled.div`
  width: 100%;
`

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '65px' : '56px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};
     color: ${({theme}) => theme.colors.text};

`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
      color: ${({theme}) => theme.colors.text};

`

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) => props.colorAlt ?
    'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
    'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
    margin: ${(props) => props.divider ? "4rem 0" : ""};
`

export const Title = styled.div`
    justify-content: flex-start;
    font-size: 8rem; 
    display: flex;
    padding: 20px;
    margin: 20px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.text};
`;


export const Subtitle = styled.div`
    justify-content: flex-start;
    font-size: 3rem;
    display: flex;
    padding: 10px;
    margin: 20px;
    font-weight: normal;
    color: ${({theme}) => theme.colors.text};
`;

