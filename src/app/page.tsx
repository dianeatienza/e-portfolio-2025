"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40 z-10" />
          <div className="absolute inset-0 bg-[url('/images/placeholders/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              {/* Main photo with decorative elements */}
              <div className="relative">
                {/* Decorative circle behind the photo */}
                <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl"></div>

                {/* Main photo */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/images/hero/lei.JPG"
                    alt="Lei - Developer & Teacher"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Role badges below the photo */}
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xl mr-2"></span> Web Developer
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl mr-2">|</span> Teacher
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl mr-2">|</span> Rooted Dreamer
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side: Text content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-1 lg:order-2"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Thanks for stopping by—here’s a glimpse into my world.
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold text-charcoal mb-6"
              >
                Hi, I&apos;m Lei
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl lg:text-2xl text-charcoal/80 mb-8 max-w-3xl mx-auto lg:mx-0"
              >
                Building digital experiences, nurturing growth, and staying
                grounded in faith and creativity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/playground"
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-center"
                >
                  Explore Playground
                </Link>
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-charcoal/10 text-charcoal rounded-lg hover:bg-charcoal/20 transition-colors text-center"
                >
                  See My Work
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">
              What I Do
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto text-base sm:text-lg">
              My passion for coding and teaching drives me to create impactful
              solutions and engaging experiences. Beyond the screen, you&apos;ll
              find me with my camera, or enjoying a quiet moment of reflection,
              always striving for deeper purpose.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Web Development",
                description:
                  "Crafting purposeful, responsive, and accessible web experiences.",
                icon: "💻",
                color: "bg-sky/10",
                image: "/images/hero/lei-coding.JPG",
              },
              {
                title: "Teaching",
                description: "Shaping minds in classrooms and across oceans.",
                icon: "📚",
                color: "bg-primary/10",
                image: "/images/hero/lei-teaching.JPG",
              },
              {
                title: "Everything in Between",
                description: "Where creativity, curiosity, and soul take root.",
                icon: "🎨",
                color: "bg-coral/10",
                image: "/images/hero/another-lei.jpg",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${item.color} rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300`}
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-3xl sm:text-4xl">
                    {item.icon}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/70 mb-4 text-sm sm:text-base">
                    {item.description}
                  </p>
                  <Link
                    href={
                      item.title === "Everything in Between"
                        ? "/everything-in-between"
                        : `/${item.title.toLowerCase().replace(" ", "-")}`
                    }
                    className="text-primary hover:text-primary/80 transition-colors inline-flex items-center text-sm sm:text-base"
                  >
                    Learn more
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
        </div>
      </section>

      {/* Interactive Section */}
      <section className="py-16 sm:py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                Interactive Playground
              </h2>
              <p className="text-charcoal/70 mb-6 text-base sm:text-lg">
                Enjoy a collection of engaging puzzle and word games! Challenge
                yourself with our interactive games designed to entertain and
                delight.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Sliding Puzzle - Arrange the tiles to complete the image",
                  "Memory Game - Match programming concept cards",
                  "Word Search - Find tech-related words in the grid",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start text-sm sm:text-base"
                  >
                    <span className="text-primary mr-2">🎮</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/playground" className="btn btn-primary">
                Enter Playground
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/projects/playground.webp"
                  alt="Interactive Playground"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Game preview */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
                    <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-2">
                      Fun & Games
                    </h3>
                    <p className="text-charcoal/70 mb-4 text-sm sm:text-base">
                      Take a break and have some fun! Solve image puzzles, test
                      your memory with matching cards, and hunt for words in our
                      interactive games collection.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="text-primary">🧩</span>
                        <span className="text-primary">🎴</span>
                        <span className="text-primary">📝</span>
                      </div>
                      <Link
                        href="/playground"
                        className="btn btn-primary btn-sm"
                      >
                        Play Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">
              Featured Projects
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto text-base sm:text-lg">
              A selection of my recent work showcasing my skills and creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "🌍 Qurious – Real-Time AI Translation",
                description:
                  "A powerful web platform for live transcription and translation using AI voices. Built for event organizers, with roles for speakers, interpreters, and participants.",
                tags: [
                  "AI Voice Synthesis",
                  "Real-time Processing",
                  "WebSocket",
                  "TypeScript",
                ],
                image: "/images/cover-photos/qurious.webp",
                badge: "Most Fun to Build",
                link: "https://qurious.eqqui.com/",
              },
              {
                title: "🧠 Lexy – AI English Tutor",
                description:
                  "A conversational AI that helps users practice English. Built with NLP tools, it provides feedback, grammar suggestions, and casual conversation prompts.",
                tags: ["Python", "NLP", "Machine Learning", "Firebase"],
                image: "/images/cover-photos/lexy-ai.webp",
                badge: "Most Challenging",
                link: "https://lexyapp.ai/",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-60 sm:h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />

                  {project.badge && (
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                      {project.badge}
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/25 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white hover:text-primary transition-colors text-xs sm:text-sm font-medium"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 ml-1.5"
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
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/projects" className="btn btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg">
              Whether you&apos;re looking to collaborate on a project, learn
              something new, or just chat about technology, I&apos;d love to
              hear from you.
            </p>
            <Link
              href="/contact"
              className="btn bg-white text-primary hover:bg-white/90"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
