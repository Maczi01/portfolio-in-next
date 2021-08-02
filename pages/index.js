import React from "react";
import Layout from "/components/Layout/Layout"
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";

export default function Home() {
    return (
        <div>
            <Layout>
                <Hero/>
                <About/>
            </Layout>
        </div>
    )
}
