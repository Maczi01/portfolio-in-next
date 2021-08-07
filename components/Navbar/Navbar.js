import {FlagsWrapper, StyledFlag, Wrapper} from "./NavbarStyles";
import React, {useState, useRef} from "react";
import pl from '../../public/pl.svg'
import uk from '../../public/uk.svg'
import {StyledLogoLink} from "../Sidebar/SidebarStyles";
import {Burger} from "./Burger";

export const Navbar = () => {

    const [open, setOpen] = useState(true);
    const node = useRef()

    return (
        <Wrapper>
            {/*<StyledFlag src={pl}*/}
            {/*            width={40}*/}
            {/*            height={40}*/}
            {/*/>*/}
            <div ref={node}>

                <Burger open={open} setOpen={setOpen}/>
            </div>

            {/*<StyledLogoLink to="/">*/}
            {/*XXX*/}
            {/*</StyledLogoLink>*/}
            <FlagsWrapper>
                <StyledFlag src={uk}
                            width={40}
                            height={40}
                />
                <StyledFlag src={pl}
                            width={40}
                            height={40}
                />
            </FlagsWrapper>
        </Wrapper>
    );
}

