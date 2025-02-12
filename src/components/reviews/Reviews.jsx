import React from 'react';
import { motion } from "framer-motion";

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
            rating: 5,
            review: "Absolutely fantastic! The service was top-notch, and the team went above and beyond to meet my expectations.",
            country: "USA",
            address: "California",
        },
        {
            id: 2,
            name: "Michael Brown",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            rating: 4,
            review: "Great experience overall. The product quality is excellent, but delivery took a bit longer than expected.",
            country: "UK",
            address: "London",
        },
        {
            id: 3,
            name: "Emily Davis",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            rating: 5,
            review: "I'm thoroughly impressed with the professionalism and attention to detail. Will definitely recommend!",
            country: "Canada",
            address: "Toronto",
        },
        {
            id: 4,
            name: "James Wilson",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg",
            rating: 3,
            review: "It was okay. The product works fine, but the customer support could be more responsive.",
            country: "Australia",
            address: "Sydney",
        },
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger animation for child elements
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }} // Trigger animation every time
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl font-bold text-center text-gray-800 mb-12"
                >
                    What Our Customers Say
                </motion.h2>

                {/* Reviews Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }} // Trigger animation every time
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {reviews.map((review) => (
                        <motion.div
                            key={review.id}
                            variants={itemVariants}
                            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
                        >
                            {/* Avatar */}
                            <img
                                src={review.avatar}
                                alt={`${review.name}'s avatar`}
                                className="w-16 h-16 rounded-full mx-auto mb-4"
                            />
                            {/* Name */}
                            <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                            {/* Country and Address */}
                            <p className="text-sm text-gray-500 mb-4">
                                {review.address}, {review.country}
                            </p>
                            {/* Rating */}
                            <div className="flex justify-center items-center text-yellow-500 mb-4">
                                {Array.from({ length: review.rating }).map((_, index) => (
                                    <svg
                                        key={index}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 fill-current"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            {/* Review Text */}
                            <p className="text-gray-600">{review.review}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Reviews;