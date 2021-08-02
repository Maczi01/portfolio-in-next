import {StyledFlag, Wrapper} from "./NavbarStyles";
import React from "react";
import pl from '../../public/pl.svg'
import uk from '../../public/uk.svg'

export const Navbar = () => (
    <Wrapper>
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
