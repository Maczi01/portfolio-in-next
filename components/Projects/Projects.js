import styled from "styled-components";
import {Section, SectionDivider, SectionTitle, Subtitle, Title} from "../../styles/GlobalComponents";
import {HeroLink, HeroLinksList, HeroWrapper} from "../Hero/HeroStyles";
import coon from '../../assets/coon.png'

import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr, Img, ProjectsSection, Tag,
    TagList,
    TitleContent,
    UtilityList
} from "./ProjectsStyles";
import React from "react";

const Projects = () => (
    <ProjectsSection nopadding id="projects">
        <Title>Projekty</Title>
        <GridContainer>
            <BlogCard>
                <Img src={coon}/>
                <TitleContent>
                    <HeaderThree title>Pogoda</HeaderThree>
                    <Hr/>
                </TitleContent>
                <CardInfo className="card-info">Jakiś krótki i konkretny opis</CardInfo>

                <UtilityList>
                    <ExternalLinks href="www.google.pl">Code</ExternalLinks>
                    <ExternalLinks href="www.google.pl">Source</ExternalLinks>
                </UtilityList>
            </BlogCard>
            <BlogCard>
                <Img src={coon}/>
                <TitleContent>
                    <HeaderThree title>Atenntion control</HeaderThree>
                    <Hr/>
                </TitleContent>
                <CardInfo className="card-info">Jakiś krótki i konkretny opis</CardInfo>

                <UtilityList>
                    <ExternalLinks href="www.google.pl">Code</ExternalLinks>
                    <ExternalLinks href="www.google.pl">Source</ExternalLinks>
                </UtilityList>
            </BlogCard>
            <BlogCard>
                <Img src={coon}/>
                <TitleContent>
                    <HeaderThree title>Biblioteka</HeaderThree>
                    <Hr/>
                </TitleContent>
                <CardInfo className="card-info">Jakiś krótki i konkretny opis</CardInfo>

                <UtilityList>
                    <ExternalLinks href="www.google.pl">Code</ExternalLinks>
                    <ExternalLinks href="www.google.pl">Source</ExternalLinks>
                </UtilityList>
            </BlogCard>
            <BlogCard>
                <Img src={coon}/>
                <TitleContent>
                    <HeaderThree title>Shopping List</HeaderThree>
                    <Hr/>
                </TitleContent>
                <CardInfo className="card-info">Jakiś krótki i konkretny opis</CardInfo>

                <UtilityList>
                    <ExternalLinks href="www.google.pl">Code</ExternalLinks>
                    <ExternalLinks href="www.google.pl">Source</ExternalLinks>
                </UtilityList>
            </BlogCard>
            <BlogCard>
                <Img src={coon}/>
                <TitleContent>
                    <HeaderThree title>Tytuł projektu</HeaderThree>
                    <Hr/>
                </TitleContent>
                <CardInfo className="card-info">Jakiś krótki i konkretny opis</CardInfo>

                <UtilityList>
                    <ExternalLinks href="www.google.pl">Code</ExternalLinks>
                    <ExternalLinks href="www.google.pl">Source</ExternalLinks>
                </UtilityList>
            </BlogCard>
            <BlogCard>
                <Img src={coon}/>
                <TitleContent>
                    <HeaderThree title>Tytuł projektu</HeaderThree>
                    <Hr/>
                </TitleContent>
                <CardInfo className="card-info">Jakiś krótki i konkretny opis</CardInfo>

                <UtilityList>
                    <ExternalLinks href="www.google.pl">Code</ExternalLinks>
                    <ExternalLinks href="www.google.pl">Source</ExternalLinks>
                </UtilityList>
            </BlogCard>
        </GridContainer>
    </ProjectsSection>
);

export default Projects;