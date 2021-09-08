import {Section, Subtitle, Title} from "../../styles/GlobalComponents";
import React from "react";
import {
    AboutTitle,
    AboutSection,
    ImageWrapper,
    SkillsWrapper,
    SkillsTable,
    SkillsTitle,
    SkillsList,
    SkillsItem, AboutWrapper
} from "./AboutStyles";
import {PageWrapper} from "../Hero/HeroStyles";
import bkg2 from "../../assets/bkg2.svg";
import Image from "next/dist/client/image";
import vectorpaint from "../../assets/vectorpaint.svg";
import {
    ReactLogo,
    Bootstrap
} from '@styled-icons/boxicons-logos';

import {
    Css3,
    Javascript,
    StyledComponents,
    Sass,
    Wordpress,
    Figma,
    Html5,
    Woo
} from '@styled-icons/simple-icons';
import {SkillsSvgWrapper} from "./SkillsSvgWrapper";


const About = () => {

    const skills = [
        {name: "html", icon: <Html5/>, color: "#e34c26"},
        {name: "css3", icon: <Css3/>, color: "#2965f1"},
        {name: "javascript", icon: <Javascript/>, color: "#f0db4f"},
        {name: "sass", icon: <Sass/>, color: "#c69"},
        {name: "bootstrap", icon: <Bootstrap/>, color: "#563d7c"},
        // {name: "rwd", icon: <PhoneDesktop/>, color: "#e75a7c"},
        {name: "react", icon: <ReactLogo/>, color: "#61dbfb"},
        {name: "styled components", icon: <StyledComponents/>, color: "#fff"},
        {name: "wordpress", icon: <Wordpress/>, color: "#21759b"},
        {name: "Woocommerce", icon: <Woo/>, color: "#764abc"},
        // {name: "git", icon: <Github/>, color: "#fff"},
        {name: "figma", icon: <Figma/>, color: "#dac9ba"}
    ];


    return (


        <PageWrapper>

            <AboutSection>

                <AboutTitle>
                    Cześć
                </AboutTitle>

                <AboutWrapper>


                    <Subtitle>
                        Mam na imię Mateusz i mieszkam w Irlandii. Studiowałem we Wrocławiu Inżynierię mechaniczną,
                        którą
                        ukończyłem
                        z tytułem magistra. Poza zamiłowaniem do mechaniki i konstrukcji, jestem wielkim fanem
                        programowania, w
                        szczególności tworzenia aplikacji i stron internetowych. Własnie w tym kierunku chce się
                        rozwijać.
                        Stawiam na ciągły
                        rozwój, poznawanie nowych technologii i tworzenie projektów.
                    </Subtitle>
                    {/*<AboutTitle color="yellow">*/}
                    {/*    Szukam pracy jako Fullstack lub Frontend developer*/}
                    {/*</AboutTitle>*/}

                    <SkillsWrapper>
                        <SkillsTable>
                            <SkillsTitle>
                                Skills
                            </SkillsTitle>

                            {/*<SkillsList>*/}
                            {/*    {*/}
                            {/*        skills.map((skill, index) =>*/}
                            {/*            <SkillsSvgWrapper color={skill.color}>*/}
                            {/*                {*/}
                            {/*                    skill.icon*/}
                            {/*                }*/}
                            {/*            </SkillsSvgWrapper>*/}
                            {/*        )*/}
                            {/*    }*/}
                            {/*</SkillsList>*/}


                        </SkillsTable>
                    </SkillsWrapper>

                </AboutWrapper>
            </AboutSection>
            <ImageWrapper
                alt="Mountains"
                src={vectorpaint}
                layout="fill"
                objectFit="cover"
                quality={100}
            />

        </PageWrapper>
    );
}
export default About;

{/*<Title>Nauka</Title>*/
}
{/*<Subtitle>*/
}
{/*    Programowanie interesowało mnie od zawsze. Tworzenie stron internetowych, proste programy w C++ czy różne*/
}
{/*    programy używane w grach. 3 lata temu na ponownie podszedłem do nauki Javy, programowania obiektowego, baz*/
}
{/*    danych, co pozwoliło mi nauczyć się Springa. Następnie chcąc zwiększać swoją wiedzę, uczyłem się*/
}
{/*    Javascriptu.*/
}
{/*    Po dość długiej nauce postanowiłem przejść do Reacta, którego bardzo lubię.*/
}
{/*</Subtitle>*/
}
{/*<Title>Charakter</Title>*/
}
{/*<Subtitle>*/
}
{/*    Jestem spokojną i miłą osobą. Lubię rozmawiać z ludźmi, współpracować i znajdować rozwiązania. Jestem*/
}
{/*    ambitny, stawiam sobie cele i realizuję je. Nie lubię stać w miejscu. Nie boję się zmian.*/
}
{/*</Subtitle>*/
}
{/*<Title>Doświadczenie</Title>*/
}
{/*<Subtitle>*/
}
{/*    Mam doświadczenie w wielu branżach, największe w swoim wyuczonym zawodzie. Jako Inżynier mechanik w*/
}
{/*    specjalności Konstrukcja i eksploatacja pracowałem w branży samochodowej i branży maszyn ciężkich.*/
}
{/*    Projektowałem i konstruowałem elementy maszyn dla lini produkcyjnych. Sporządzałem setki rysunków*/
}
{/*    technicznych elementów z wykorzystaniem programów CAD. Praca ta wymagała dokładności, analitycznego myślenia*/
}
{/*    i umiejętności rozwiązywania problemów.*/
}
{/*    Przez ponad 5 lat pracowałem dorywczo w w agencji organizacji imprez, gdzie zajmowałem się przygotowywaniem*/
}
{/*    imprez, koncertów, targów i konferencji od strony technicznej - elektryka, montaż, obsługa komputerów i*/
}
{/*    innego sprzętu elektronicznego. W tej pracy musiałem korzystać z dobrej organizacji, kreatywności i dobrej*/
}
{/*    współpracy z ludźmi. Miałem okazję poznać dużo znanych osób i pracować dla znanych marek z wielu branż*/
}
{/*    (Shell, Toyota, Dell, Volkswagen).*/
}
{/*</Subtitle>*/
}