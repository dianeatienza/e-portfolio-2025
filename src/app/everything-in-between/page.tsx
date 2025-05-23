"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const sections = [
  {
    title: "Growth",
    description:
      "Personal stories, interests, and the journey that shapes who I am",
    icon: "G",
    image: "/images/placeholders/life-section.jpg",
    subsections: [
      {
        title: "Travel",
        description: "Exploring new places and creating memories",
        path: "/travel",
        image: "/images/life/travel-window.jpeg",
        color: "from-blue-500/20 to-purple-500/20",
      },
      {
        title: "People",
        description: "Connections and relationships that matter",
        path: "/people",
        image: "/images/life/people-dnb.jpeg",
        color: "from-pink-500/20 to-red-500/20",
      },
      {
        title: "Hobbies",
        description: "What I love doing in my free time",
        path: "/hobbies",
        image: "/images/life/hobby.jpeg",
        color: "from-green-500/20 to-teal-500/20",
      },
      {
        title: "Blog",
        description: "Thoughts, stories, and insights",
        path: "/blog",
        image: "/images/life/vvp.jpeg",
        color: "from-yellow-500/20 to-orange-500/20",
      },
    ],
  },
];

const carouselItems = [
  {
    title: "Travel Adventures",
    description: "Discover the world through my eyes",
    image: "/images/life/travel.png",
  },
  {
    title: "Life Stories",
    description: "Moments that shape who I am today",
    image: "/images/life/laughter.jpeg",
  },
  {
    title: "Creative Pursuits",
    description: "Exploring passions and hobbies",
    image: "/images/life/coding.jpg",
  },
  {
    title: "Thoughts & Ideas",
    description: "Sharing insights and experiences",
    image: "/images/life/insights.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function EverythingInBetween() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Carousel Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        {carouselItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              x: `${(index - currentSlide) * 100}%`,
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="relative h-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6"
                  >
                    {item.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl max-w-3xl mx-auto"
                  >
                    {item.description}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Carousel Navigation */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-6xl">{sections[0].icon}</span>
            <h2 className="text-3xl font-bold text-charcoal">
              {sections[0].title}
            </h2>
          </div>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            {sections[0].description}
          </p>
        </motion.div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections[0].subsections.map((subsection, index) => (
            <motion.div
              key={subsection.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="group"
            >
              <Link href={subsection.path} className="block">
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <Image
                    src={subsection.image}
                    alt={subsection.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${subsection.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-3xl font-bold text-white mb-3">
                        {subsection.title}
                      </h3>
                      <p className="text-lg text-white/90 mb-4">
                        {subsection.description}
                      </p>
                      <div className="flex items-center text-white">
                        <span className="mr-2">Explore</span>
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
