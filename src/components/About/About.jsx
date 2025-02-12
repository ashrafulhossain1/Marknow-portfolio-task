import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import tailwind from "../../assets/Tailwind_CSS.png"; // Local Tailwind CSS image
import daisyui from "../../assets/daisyUI.png"; // Local DaisyUI image

const frontendSkills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Tailwind CSS", icon: tailwind }, // Use local Tailwind CSS image
    { name: "DaisyUI", icon: daisyui }, // Use local DaisyUI image
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
];

const backendSkills = [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
];

const tools = [
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Vercel", icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
];

const About = () => {
    const title = "About Myself";
    const description =
        "I am currently studying for a Bachelor's degree in Business Administration, but I have decided to turn my career towards programming. I have always been passionate about technology and seeing my next version. I am now focused on becoming a skilled Frontend Developer and continuously improving my skills.";

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <div
            id="about"
            className="relative bg-cover md:h-[100vh] bg-center flex justify-center items-center  bg-no-repeat py-16 px-4"
            style={{
                backgroundImage:
                    "linear-gradient(to bottom, #3C312C,#848C8C ), url(https://i.ibb.co.com/S4wG77db/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products.jpg)",
            }}
        >
            {/* Overlay with Custom Opacity */}
            <div
                className="absolute inset-0 backdrop-blur-sm"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            ></div>
            <div className=" w-10/12 mx-auto relative z-10">
                {/* Title */}
                <InViewAnimation>
                    <motion.h2
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl text-white font-bold text-center mb-8"
                    >
                        {title}
                    </motion.h2>
                </InViewAnimation>
                {/* Description */}
                <InViewAnimation>
                    <motion.p
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-lg text-white text-center max-w-2xl mx-auto mb-12"
                    >
                        {description}
                    </motion.p>
                </InViewAnimation>
                {/* Skills Section */}
                <InViewAnimation>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Frontend Skills */}
                        <div>
                            <h3 className="text-2xl font-semibold text-center text-yellow-400 mb-4">Frontend Skills</h3>
                            <ul className="flex flex-wrap gap-4 justify-center">
                                {frontendSkills.map((skill, index) => (
                                    <li key={index} className="flex flex-col items-center">
                                        <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                                        <span className="text-sm text-gray-300 mt-1">{skill.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Backend Skills */}
                        <div>
                            <h3 className="text-2xl font-semibold text-center text-yellow-400 mb-4">Backend Skills</h3>
                            <ul className="flex flex-wrap gap-4 justify-center">
                                {backendSkills.map((skill, index) => (
                                    <li key={index} className="flex flex-col items-center">
                                        <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                                        <span className="text-sm text-gray-300 mt-1">{skill.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Tools */}
                        <div>
                            <h3 className="text-2xl font-semibold text-center text-yellow-400 mb-4">Tools</h3>
                            <ul className="flex flex-wrap gap-4 justify-center">
                                {tools.map((tool, index) => (
                                    <li key={index} className="flex flex-col items-center">
                                        <img src={tool.icon} alt={tool.name} className="w-12 h-12" />
                                        <span className="text-sm text-gray-300 mt-1">{tool.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </InViewAnimation>
            </div>
        </div>
    );
};

// InViewAnimation Component
const InViewAnimation = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: false, // Trigger every time the element comes into view
        threshold: 0.2, // Percentage of the element visible to trigger the animation
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
        >
            {children}
        </motion.div>
    );
};

export default About;