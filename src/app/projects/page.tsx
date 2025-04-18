"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Project data
const projects = [
  {
    id: 1,
    title: "💨 Weather App",
    description:
      "A clean, minimalist app that gives real-time weather updates based on location. Integrated with an open weather API and includes animated icons.",
    longDescription:
      "This weather application provides users with real-time weather information based on their location. It features a clean, minimalist design with animated weather icons that change based on current conditions. The app integrates with an open weather API to fetch accurate data and includes features like hourly forecasts, weekly predictions, and location-based weather alerts.",
    tags: ["React", "API Integration", "CSS Animations", "Geolocation"],
    image: "/images/placeholders/weather-app.jpg",
    demoLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 2,
    title: "🎬 Movie Landia",
    description:
      "A searchable movie catalog that fetches movie details using a public movie API. Features genre filtering, watch trailers, and a responsive grid UI.",
    longDescription:
      "Movie Landia is a comprehensive movie discovery platform that allows users to search for films, view detailed information, and watch trailers. The application features a responsive grid UI that adapts to different screen sizes, genre-based filtering for easy navigation, and integration with a public movie API for up-to-date information. Users can create watchlists, rate movies, and share their favorites with friends.",
    tags: ["Next.js", "TMDB API", "Tailwind CSS", "Responsive Design"],
    image: "/images/placeholders/movie-landia.jpg",
    demoLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "🛒 e-Commerce Website",
    description:
      "A full-fledged e-commerce platform with product listing, cart, checkout, and payment simulation. Designed for seamless browsing and conversion.",
    longDescription:
      "This e-commerce platform provides a complete shopping experience with product listings, detailed product pages, shopping cart functionality, and a streamlined checkout process. The platform includes features like product filtering, search functionality, user accounts, order history, and payment simulation. The design focuses on creating a seamless browsing experience that maximizes conversion rates.",
    tags: ["React", "Redux", "Node.js", "MongoDB", "Stripe API"],
    image: "/images/placeholders/ecommerce.jpg",
    demoLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 4,
    title: "🧠 Lexy – AI English Tutor",
    description:
      "A conversational AI that helps users practice English. Built with NLP tools, it provides feedback, grammar suggestions, and casual conversation prompts.",
    longDescription:
      "Lexy is an AI-powered English tutor that engages users in natural conversations to help them practice and improve their English skills. The application uses advanced NLP tools to analyze user responses, provide grammar corrections, suggest vocabulary improvements, and offer conversation prompts. It adapts to the user's proficiency level and focuses on areas that need improvement, making language learning more interactive and effective.",
    tags: ["Python", "NLP", "Machine Learning", "WebSocket", "React"],
    image: "/images/placeholders/lexy-ai.jpg",
    demoLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 5,
    title: "📝 LexScribe – Transcription Software",
    description:
      "Converts recorded audio into accurate, editable text. Ideal for interviews, podcasts, and lectures. Supports speaker detection and timestamping.",
    longDescription:
      "LexScribe is a powerful transcription tool that converts audio recordings into accurate, editable text. It's designed for journalists, researchers, content creators, and anyone who needs to transcribe interviews, podcasts, or lectures. The software features speaker detection to differentiate between multiple voices, automatic timestamping for easy reference, and editing tools to correct and format the transcribed text. It supports multiple languages and various audio formats.",
    tags: ["Python", "Speech Recognition", "Web Audio API", "React", "Node.js"],
    image: "/images/placeholders/lexscribe.jpg",
    demoLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 6,
    title: "🌍 Qurious – Real-Time AI Translation for Events",
    description:
      "A powerful web platform for live transcription and translation using AI voices. Built for event organizers, with roles for speakers, interpreters, and participants.",
    longDescription:
      "Qurious is a comprehensive platform for real-time transcription and translation at live events. It enables event organizers to provide multilingual support to attendees through AI-powered voice translation. The platform includes features for speakers to deliver content in their preferred language, interpreters to provide real-time translations, and participants to select their preferred language for audio output. It's designed for conferences, international meetings, and educational events.",
    tags: [
      "WebRTC",
      "AI Voice Synthesis",
      "Real-time Processing",
      "Vue.js",
      "Node.js",
    ],
    image: "/images/placeholders/qurious.jpg",
    demoLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 7,
    title: "🤖 eQQuip Me Chatbot",
    description:
      "A friendly assistant that guides users through interpretation service quotations. Handles pricing, service types, and collects booking details interactively.",
    longDescription:
      "eQQuip Me is an interactive chatbot designed to streamline the process of obtaining interpretation service quotations. It engages users in a conversational manner to understand their requirements, provides information about available services and pricing, and collects necessary details for booking. The chatbot can handle complex queries, offer personalized recommendations, and seamlessly transfer users to human agents when needed. It's designed to improve customer experience and increase conversion rates.",
    tags: ["Dialogflow", "Node.js", "React", "API Integration", "NLP"],
    image: "/images/placeholders/eqquip-me.jpg",
    demoLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 8,
    title: "🌐 PH.Lexcode Company Portfolio",
    description:
      "A modern, mobile-first website showcasing Lexcode Philippines' services, team, and case studies. Built for performance and clear brand storytelling.",
    longDescription:
      "The PH.Lexcode Company Portfolio is a modern, mobile-first website designed to showcase Lexcode Philippines' services, team members, and case studies. The website features a clean, professional design that reflects the company's brand identity and values. It includes sections for service descriptions, team member profiles, client testimonials, and detailed case studies. The site is optimized for performance, accessibility, and search engines, ensuring a positive user experience across all devices.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "SEO",
      "Responsive Design",
    ],
    image: "/images/placeholders/lexcode-portfolio.jpg",
    demoLink: "#",
    githubLink: "#",
    featured: false,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Filter projects based on selected filter
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.featured);

  // Get all unique tags
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            My Projects
          </h1>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
            A collection of my work in web development, AI applications, and
            creative projects. Each project represents a unique challenge and
            learning experience.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "all"
                ? "bg-primary text-white"
                : "bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "featured"
                ? "bg-primary text-white"
                : "bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10"
            }`}
          >
            Featured
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tag
                  ? "bg-primary text-white"
                  : "bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="relative group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-charcoal/70 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-charcoal/5 text-xs rounded-full text-charcoal/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between mt-auto">
                    <Link
                      href={project.demoLink}
                      className="text-primary hover:text-primary/80 font-medium text-sm flex items-center"
                    >
                      <span>View Demo</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
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
                    </Link>
                    <Link
                      href={project.githubLink}
                      className="text-charcoal/70 hover:text-charcoal font-medium text-sm flex items-center"
                    >
                      <span>GitHub</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Hover Overlay with Long Description */}
                {hoveredProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/80 text-white p-6 flex flex-col justify-center z-30"
                  >
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-white/90 mb-4">
                      {project.longDescription}
                    </p>
                    <div className="mt-auto flex justify-between">
                      <Link
                        href={project.demoLink}
                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        View Demo
                      </Link>
                      <Link
                        href={project.githubLink}
                        className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        GitHub
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-charcoal/70 text-lg">
              No projects found with the selected filter. Try a different filter
              or check back later.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
