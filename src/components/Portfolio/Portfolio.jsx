import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
    const projectList = [
        {
            id: 1,
            title: "E-Language Learning",
            image: "https://i.ibb.co.com/sjg1SYJ/language.png",
            description:
                "A scalable e-commerce platform with user authentication, payment integration, and a responsive UI.",
            liveWebsite: "https://language--exchange-a-11.web.app",
        },
        {
            id: 3,
            title: "Sports Equipments Store",
            image: "https://i.ibb.co.com/z8fM6r7/sports.png",
            description:
                "A personal portfolio showcasing skills, projects, and contact information with a modern design and smooth animations.",
            liveWebsite: "https://sports-express-961ff.web.app",
        },
        {
            id: 4,
            title: "Parcel Transportation Web Application",
            image: "https://i.ibb.co.com/ymyTxj5g/Fire-Shot-Capture-035-Transport-Pro-Home-parcel-transpotation-web-app.png",
            description:
                "The Parcel Transportation web application simplifies parcel management, delivery, and tracking. It provides user-friendly features for admins, delivery personnel, and customers, ensuring a seamless experience for all stakeholders.",
            liveWebsite: "https://parcel-transpotation.web.app",
        },
    ];

    // Truncate Description to 100 Characters
    const truncateDescription = (text) => {
        if (text.length > 100) {
            return text.slice(0, 100) + "...";
        }
        return text;
    };

    return (
        <section id="portfolio" className="py-16 bg-slate-50">
            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-orange-400 mb-4">My Portfolio</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Explore some of my recent projects showcasing my skills in web development.
                </p>
            </div>


            {/* <InViewAnimation>
                    <motion.p
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-lg text-white text-center max-w-2xl mx-auto mb-12"
                    >
                        {description}
                    </motion.p>
                </InViewAnimation> */}

            {/* Projects Grid */}
            <div className="container mx-auto px-4">
                <InViewAnimation>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectList.map((project) => (
                            <motion.a
                                key={project.id}
                                href={project.liveWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                initial={{ opacity: 0, y: 50 }} // Start off-screen (bottom)
                                animate={{ opacity: 1, y: 0 }} // Slide up into view
                                exit={{ opacity: 0, y: 50 }} // Optional: Exit animation
                                className="group block bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative hover:bg-[#504E4A]"
                            >
                                {/* Project Image with Scrolling Effect and Overlay */}
                                <div className="relative h-[200px] overflow-hidden">
                                    {/* Image */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top group-hover:animate-scroll-image transition-transform duration-500"
                                    />
                                    {/* Black Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center">
                                        {/* Link Icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-12 w-12 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-6">
                                    {/* Title */}
                                    <h3 className="text-xl text-orange-400 font-bold mb-2">{project.title}</h3>
                                    {/* Description */}
                                    <p className="text-gray-600 group-hover:text-white">{truncateDescription(project.description)}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </InViewAnimation>
            </div>
        </section>
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

export default Portfolio;