import styled from "styled-components";
import {Section, SectionDivider, SectionTitle, Subtitle, Title} from "../../styles/GlobalComponents";
import {HeroLink, HeroLinksList, HeroWrapper} from "../Hero/HeroStyles";
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
import {projects} from "./constans";

const Projects = () => (
    <ProjectsSection nopadding id="projects">
        <Title main>Projekty</Title>
        <GridContainer>
            {projects.map((p, i) => {
                return (
                    <BlogCard key={i}>
                        <Img src={p.image} />
                        <TitleContent>
                            <HeaderThree title>{p.title}</HeaderThree>
                            <Hr />
                        </TitleContent>
                        <CardInfo className="card-info">{p.description}</CardInfo>
                        <div>
                            <TitleContent>Stack</TitleContent>
                            <TagList>
                                {p.tags.map((t, i) => {
                                    return <Tag key={i}>{t}</Tag>;
                                })}
                            </TagList>
                        </div>
                        <UtilityList>
                            <ExternalLinks href={p.visit}>Code</ExternalLinks>
                            <ExternalLinks href={p.source}>Source</ExternalLinks>
                        </UtilityList>
                    </BlogCard>
                );
            })}
        </GridContainer>
    </ProjectsSection>
);

export default Projects;