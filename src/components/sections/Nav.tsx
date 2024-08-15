import React, { useState, useEffect } from "react";

type Props = {};

const Nav = (props: Props) => {
    const navItems = ["About", "Experience", "Projects"];
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.7,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <ul className="mt-16 w-max">
            {navItems.map((item) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                    <li key={item}>
                        <a
                            className={`group flex items-center py-3 ${
                                isActive ? "active" : ""
                            }`}
                            href={`#${item.toLowerCase()}`}
                        >
                            <span
                                className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
                                    isActive
                                        ? "w-16 bg-slate-200"
                                        : "group-hover:w-16 group-hover:bg-slate-200"
                                }`}
                            ></span>
                            <span
                                className={`nav-text text-xs font-bold uppercase tracking-widest ${
                                    isActive
                                        ? "text-slate-200"
                                        : "text-slate-500 group-hover:text-slate-200"
                                }`}
                            >
                                {item}
                            </span>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default Nav;
