import {StyledFlag, Wrapper} from "./NavbarStyles";
import React from "react";
import pl from '../../public/pl.svg'
import uk from '../../public/uk.svg'
import {StyledLogoLink} from "../Sidebar/SidebarStyles";

export const Navbar = () => (
    <Wrapper>
        <StyledLogoLink to="/"/>
        <StyledFlag src={uk}
                    width={40}
                    height={40}
        />
        <StyledFlag src={pl}
                    width={40}
                    height={40}
        />
    </Wrapper>
);
