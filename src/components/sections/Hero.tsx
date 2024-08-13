// src/components/sections/Hero.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'

const navDelay = 1000; // Example delay time in milliseconds (adjust as needed)

// Custom hook to check if user prefers reduced motion
const usePrefersReducedMotion = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );
        setPrefersReducedMotion(mediaQuery.matches);

        const handler = () => setPrefersReducedMotion(mediaQuery.matches);
        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return prefersReducedMotion;
};

const Hero = () => {
    const [isMounted, setIsMounted] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    }, [prefersReducedMotion]);

    const one = (
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <NavLink to="/">Sam Howard</NavLink>
        </h1>
    );
    const two = <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Software Engineer</h2>;
    const three = (
        <h3 className="mt-4 max-w-xs leading-normal">
            I build pixel-perfect, engaging, and accessible digital experiences.
        </h3>
    );
    
    

    const items = [one, two, three];

    return (
        <div className="hero">
            {isMounted &&
                items.map((item, i) => (
                    <div
                        key={i}
                        style={{ transitionDelay: `${i * 100}ms` }}
                    >
                        {item}
                    </div>
                ))}
        </div>
    );
};

export default Hero;
