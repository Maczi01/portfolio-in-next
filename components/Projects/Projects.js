import styled from "styled-components";
import {Section, SectionDivider, SectionTitle, Subtitle, Title} from "../../styles/GlobalComponents";
import {HeroLink, HeroLinksList, HeroWrapper} from "../Hero/HeroStyles";
import {
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    TagList,
    TitleContent,
    UtilityList
} from "./ProjectsStyles";
import React from "react";

const Projects = () => (
    <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
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
    </Section>
);

export default Projects;