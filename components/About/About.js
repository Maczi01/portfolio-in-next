import {Section, Subtitle, Title} from "../../styles/GlobalComponents";
import React from "react";
import {AboutTitle} from "./AboutStyles";

const About = () => (
    <Section>
        <AboutTitle>
            O mnie
        </AboutTitle>
        <Subtitle>
            Mam na imię Mateusz, mieszkam w Irlandii. Studiowałem we Wrocławiu Inżynierię mechaniczną, którą ukończyłem
            z tytułem magistra. Jestem wielkim fanem programowania, w szczególności tworzenia aplikacji internetowych.
            Moje ulubione jeżyki to Java i JavaScript. Najbardziej lubię tworzyć aplikacje z użyciem Reacta.
        </Subtitle>
        <Title>Nauka</Title>
        <Subtitle>
            Programowanie interesowało mnie od zawsze. Tworzenie stron internetowych, proste programy w C++ czy różne
            programy używane w grach. 3 lata temu na ponownie podszedłem do nauki Javy, programowania obiektowego, baz
            danych, co pozwoliło mi nauczyć się Springa. Następnie chcąc zwiększać swoją wiedzę, uczyłem się
            Javascriptu.
            Po dość długiej nauce postanowiłem przejść do Reacta, którego bardzo lubię.
        </Subtitle>
        <Title>Charakter</Title>
        <Subtitle>
            Jestem spokojną i miłą osobą. Lubię rozmawiać z ludźmi, współpracować i znajdować rozwiązania. Jestem
            ambitny, stawiam sobie cele i realizuję je. Nie lubię stać w miejscu. Nie boję się zmian.
        </Subtitle>
        <Title>Doświadczenie</Title>
        <Subtitle>
            Mam doświadczenie w wielu branżach, największe w swoim wyuczonym zawodzie. Jako Inżynier mechanik w
            specjalności Konstrukcja i eksploatacja pracowałem w branży samochodowej i branży maszyn ciężkich.
            Projektowałem i konstruowałem elementy maszyn dla lini produkcyjnych. Sporządzałem setki rysunków
            technicznych elementów z wykorzystaniem programów CAD. Praca ta wymagała dokładności, analitycznego myślenia
            i umiejętności rozwiązywania problemów.
            Przez ponad 5 lat pracowałem dorywczo w w agencji organizacji imprez, gdzie zajmowałem się przygotowywaniem
            imprez, koncertów, targów i konferencji od strony technicznej - elektryka, montaż, obsługa komputerów i
            innego sprzętu elektronicznego. W tej pracy musiałem korzystać z dobrej organizacji, kreatywności i dobrej
            współpracy z ludźmi. Miałem okazję poznać dużo znanych osób i pracować dla znanych marek z wielu branż
            (Shell, Toyota, Dell, Volkswagen).
        </Subtitle>
    </Section>
);

export default About;