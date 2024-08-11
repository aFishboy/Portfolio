// src/components/sections/Hero.jsx
import React, { useState, useEffect } from 'react';

const navDelay = 1000; // Example delay time in milliseconds (adjust as needed)

// Custom hook to check if user prefers reduced motion
const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
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

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Sam Howard.</h2>;
  const three = <h3 className="big-heading">I build things for the web.</h3>;
  const four = (
    <>
      <p>
        I’m a software engineer specializing in building (and occasionally designing) exceptional
        digital experiences. Currently, I’m focused on building accessible, human-centered products.
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="https://github.com/aFishboy"
      target="_blank"
      rel="noreferrer">
      Check out my GitHub!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <div className="hero">
      {isMounted && items.map((item, i) => (
        <div className='text-slate-50' key={i} style={{ transitionDelay: `${i * 100}ms` }}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Hero;
