import styled from "styled-components";
import {Section, Subtitle, Title} from "../../styles/GlobalComponents";
import {HeroLink, HeroLinksList, HeroWrapper} from "../Hero/HeroStyles";
import ContactForm from "./ContactForm";

const Hero = () => (
    <Section>
            <Title>
                Skontaktuj się ze mną
            </Title>
            <Subtitle>
                Pytania, współpraca, oferta pracy, a może luźna pogawędka o ostatnim meczu? Pisz śmiało, odpisuje
                na każdy email
            </Subtitle>
        <ContactForm/>
    </Section>
);

export default Hero;

