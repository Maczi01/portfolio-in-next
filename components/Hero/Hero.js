import React from 'react';
import {Section, Subtitle, Title} from "../../styles/GlobalComponents";
import {HeroLink, HeroLinksList, HeroWrapper, PageWrapper} from "./HeroStyles";
import Image from 'next/image'
import svg from "../../assets/svg.svg"
const Hero = () => (
    <PageWrapper>
        <Section>
            <HeroWrapper>
                <Title>
                    Hi! I'm Mati.
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
        <Image
            alt="Mountains"
            src={svg}
            layout="fill"
            objectFit="cover"
            quality={100}
        />    </PageWrapper>
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
