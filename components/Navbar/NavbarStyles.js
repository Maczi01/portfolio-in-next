import styled from "styled-components";
import Image from 'next/image'

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 70px;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  padding-right: 20px;
  background-color: ${({theme}) => theme.colors.background2};
`;

export const FlagsWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  margin: 0 20px;
  padding: 0;
  //padding-right: 20px;
  color: ${({theme}) => theme.colors.background1};
  background-color: ${({theme}) => theme.colors.background2};
`;

export const StyledFlag = styled(Image)`
    justify-content: center;
    width: 40px;
    height: 40px;
    margin: 0 20px;
`;