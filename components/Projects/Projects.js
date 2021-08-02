import styled from "styled-components";
import {Section, Subtitle, Title} from "../../styles/GlobalComponents";
import {HeroLink, HeroLinksList, HeroWrapper} from "../Hero/HeroStyles";

const Projects = () => (
    <Section>
        <HeroWrapper>
            <Title>
                Hi! I am Mati.
            </Title>
            <Subtitle>
                Junior Fullstack Developer
            </Subtitle>
            <HeroLinksList>
                <HeroLink to="/notes"> ABOUT </HeroLink> /
                <HeroLink to="/notes"> PROJECTS </HeroLink> /
                <HeroLink to="/notes"> CONTACT </HeroLink>
            </HeroLinksList>
        </HeroWrapper>
    </Section>
);

export default Projects;