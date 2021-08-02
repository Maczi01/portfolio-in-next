import styled from "styled-components";
import Image from 'next/image'

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 70px;
  margin: 0 auto;
  padding: 0;
  width: 100vw;
  padding-right: 20px;
  background-color: ${({theme}) => theme.colors.background2};
`;
export const StyledFlag = styled(Image)`
    justify-content: center;
    width: 40px;
    height: 40px;
    
    margin-left: 10px;
    margin-right: 10px;
`;