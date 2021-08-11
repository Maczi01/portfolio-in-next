import styled from "styled-components";
import React from "react";
import {StyledLinksList, StyledLogoLink, Wrapper} from "./SidebarStyles";
import {ButtonIcon} from "../../styles/GlobalComponents/ButtonIcon";
import githubico from "/assets/githubico.svg"
import linkedin from "/assets/linkedin.svg"
import facebook from "/assets/facebook.svg"
import instagram from "/assets/instagram.svg"
import {FlagsWrapper, StyledFlag} from "../Navbar/NavbarStyles";
// import githubico from "../../public/githubico.svg";
import pl from "../../public/pl.svg";

export const Sidebar = () => (
    <Wrapper>
        <StyledLinksList>
            <li>
                <StyledFlag src={githubico}
                            width={40}
                            height={40}
                />

            </li>
            <li>
                <StyledFlag src={linkedin}
                            width={40}
                            height={40}
                />
            </li>
            <li>
                <StyledFlag src={facebook}
                            width={40}
                            height={40}
                />

            </li>
            <li>
                <StyledFlag src={instagram}
                            width={40}
                            height={40}
                />

            </li>
        </StyledLinksList>
    </Wrapper>
);
