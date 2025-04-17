"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function WebDevelopment() {
  const categories = [
    {
      title: "Projects",
      description: "Web applications and solutions I&apos;ve built",
      icon: "💻",
      path: "/projects",
      color: "bg-sky/10",
      image: "/images/placeholders/web-dev.jpg",
    },
    {
      title: "Playground",
      description: "Interactive coding challenges and games",
      icon: "🎮",
      path: "/playground",
      color: "bg-primary/10",
      image: "/images/placeholders/playground.jpg",
    },
    {
      title: "Blog",
      description: "Thoughts and insights on web development",
      icon: "📝",
      path: "/blog",
      color: "bg-coral/10",
      image: "/images/placeholders/creative.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-charcoal mb-4">
            Web Development
          </h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            My journey in web development, featuring projects, interactive
            experiences, and thoughts on the ever-evolving world of web
            technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${category.color} rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-4xl">
                  {category.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-charcoal/70 mb-4">{category.description}</p>
                <Link
                  href={category.path}
                  className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                >
                  Explore
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-charcoal mb-4">
            My Development Approach
          </h2>
          <p className="text-charcoal/70 mb-6">
            I believe in creating web experiences that are not only visually
            appealing but also accessible, performant, and user-friendly. My
            development process focuses on clean code, responsive design, and
            continuous learning.
          </p>
          <p className="text-charcoal/70">
            Through my projects, I aim to solve real-world problems while
            exploring new technologies and best practices. The playground
            section offers interactive ways to learn and experiment, while my
            blog shares insights and experiences from my development journey.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
