import styled from "styled-components";
import Image from 'next/image'

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  padding-right: 20px;
  background-color: ${({theme}) => theme.colors.background1};
  z-index: 9;
`

export const FlagsWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  // height: 70px;
  width: 8vw;
  margin: 0 20px;
  padding: 0;
  //padding-right: 20px;
  color: ${({theme}) => theme.colors.background1};
  // background-color: ${({theme}) => theme.colors.background2};
  background-color: transparent;
`;

export const StyledFlag = styled(Image)`
    justify-content: center;
    width: 40px;
    height: 40px;
    margin: 0 20px;
`;