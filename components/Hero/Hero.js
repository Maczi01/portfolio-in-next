import React from 'react';
import {Section, Subtitle, Title} from "../../styles/GlobalComponents";
import {HeroLink, HeroLinksList, HeroWrapper} from "./HeroStyles";

const Hero = () => (
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

export default Hero;
{/*<LeftSection>*/
}
{/*    <SectionTitle>*/
}
{/*        Hello*/
}
{/*    </SectionTitle>*/
}
{/*    <SectionText>*/
}
{/*        Lorem ipsum Lorem ipsum Lorem ipsum*/
}
{/*    </SectionText>*/
}
{/*</LeftSection>*/
}
