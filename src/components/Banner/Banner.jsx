import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Banner = ({ name, title }) => {
    const [typedText, setTypedText] = useState("");
    const fullText = "Crafting code creating impact...";
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (isTyping) {
                setTypedText(fullText.slice(0, index));
                index++;
                if (index > fullText.length) {
                    setIsTyping(false); // Stop typing when the text is complete
                    setTimeout(() => {
                        setIsTyping(true); // Restart typing after a delay
                        setTypedText(""); // Reset text
                        index = 0; // Reset index
                    }, 2000); // Wait 2 seconds before restarting
                }
            }
        }, 100); // Adjust typing speed here (100ms per character)

        return () => clearInterval(interval);
    }, [isTyping]);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section
            id="home"
            className="relative bg-cover bg-center h-[300px] md:h-[95vh] flex items-center"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://i.ibb.co/WNTsftSz/banner.jpg')`,
            }}
        >
            {/* Overlay for Blurred Effect */}
            <div className="absolute inset-0 bg-black/20"></div> {/* Reduced opacity */}
            {/* Content Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="absolute top-24 md:top-28 lg:top-32 left-7 md:left-20 z-10"
            >
                {/* Your Name */}
                <motion.h1
                    className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-white mb-2 shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    {name}
                </motion.h1>
                {/* Job Title */}
                <motion.p
                    className="text-xl flex border-b pb-2 md:text-2xl text-white font-semibold shadow-lg mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    {title}
                </motion.p>
                {/* Typing Effect */}
                <motion.p
                    className="text-lg md:text-xl lg:text-4xl font-mono text-yellow-400"
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {typedText}
                    <span className="animate-blink text-white">|</span>
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Banner;