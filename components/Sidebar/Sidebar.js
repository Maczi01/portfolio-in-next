import styled from "styled-components";
import React from "react";
import {StyledLinksList, StyledLogoLink} from "./SidebarStyles";
import {ButtonIcon} from "../../styles/GlobalComponents/ButtonIcon";

export const Sidebar = () => (
<Wrapper>
        <StyledLogoLink to="/"/>
        <StyledLinksList>
            <li>
                <ButtonIcon as={a} to="/notes" icon={githubico} activeclass="active"/>
            </li>
            <li>
                <ButtonIcon as={a} to="/notes" icon={linkedin} activeclass="active"/>
            </li>
            <li>
                <ButtonIcon as={a} to="/notes" icon={githubico} activeclass="active"/>
            </li>
        </StyledLinksList>
</Wrapper>
);

export default $Title$;