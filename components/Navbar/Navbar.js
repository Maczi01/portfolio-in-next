import styled from "styled-components";
import {StyledFlag, Wrapper} from "./NavbarStyles";
import React from "react";
import pl from '../../assets/pl.svg'
import uk from '../../assets/uk.svg'

export const Navbar = () => (
    <Wrapper>
        <StyledFlag src={uk}/>
        <StyledFlag src={pl}/>
    </Wrapper>
);
