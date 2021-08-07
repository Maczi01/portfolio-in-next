import {StyledFlag, Wrapper} from "./NavbarStyles";
import React, {useRef, useState} from "react";
import pl from '../../public/pl.svg'
import uk from '../../public/uk.svg'
import {Burger} from "./Burger";

export const Navbar = () => {

    const [open, setOpen] = useState(false);
    const node = useRef();

    return (
        <Wrapper>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen}/>
            </div>
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
}

