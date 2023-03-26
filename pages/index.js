import React from "react";
import Layout from "/components/Layout/Layout"
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import ReactPageScroller from "react-page-scroller";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Theme from "../styles/Theme";
import {Navbar} from "../components/Navbar/Navbar";
import {Content} from "../components/Layout/LayoutStyles";

export default function Home() {
    return (
        <>
            <Layout>
                <Navbar/>
                <ReactPageScroller>
                    <Hero/>
                    <About/>
                    <Projects/>
                    <Contact/>
                </ReactPageScroller>
            </Layout>
        </>
    )
}
