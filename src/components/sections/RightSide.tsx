import React from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import About from "./About";

type Props = {};

const RightSide = (props: Props) => {
    return (
        <>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        </>
    );
};

export default RightSide;
