import styled from "styled-components";
import React from "react";
import {StyledLinksList, StyledLogoLink, Wrapper} from "./SidebarStyles";
import {ButtonIcon} from "../../styles/GlobalComponents/ButtonIcon";
import githubico from "/assets/githubico.svg"

export const Sidebar = () => (
    <Wrapper>
        <StyledLogoLink to="/"/>
        <StyledLinksList>
            <li>
                <ButtonIcon to="/notes" icon={githubico} activeclass="active"/>
            </li>
            <li>
                <ButtonIcon to="/notes" icon={githubico} activeclass="active"/>
            </li>
            <li>
                <ButtonIcon to="/notes" icon={githubico} activeclass="active"/>
            </li>
        </StyledLinksList>
    </Wrapper>
);
