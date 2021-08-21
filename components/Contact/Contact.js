import styled from "styled-components";
import {Section, Subtitle, Title} from "../../styles/GlobalComponents";
import {HeroLink, HeroLinksList, HeroWrapper} from "../Hero/HeroStyles";
import ContactForm from "./ContactForm";
import React from "react";
import {ContactSubitle, ContactTitle} from "./ContactStyles";

const Contact = () => (
    <Section>
        <ContactTitle>
            Skontaktuj się ze mną
        </ContactTitle>
        <ContactSubitle>
            Pytania, współpraca, oferta pracy, a może luźna pogawędka o ostatnim meczu? Pisz śmiało, odpisuje
            na każdy email
        </ContactSubitle>
        <ContactForm/>
    </Section>
);

export default Contact;

