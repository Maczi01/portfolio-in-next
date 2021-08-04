import React from "react";
import Layout from "/components/Layout/Layout"
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import ReactPageScroller from "react-page-scroller";
import Projects from "../components/Projects/Projects";

export default function Home() {
    return (
        <>
            <Layout>
                {/*<ReactPageScroller>*/}
                {/*    <Hero/>*/}
                {/*    <About/>*/}
                    <Projects/>
                {/*</ReactPageScroller>*/}
            </Layout>
        </>
    )
}
