"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const hobbies = [
  {
    title: "Planting",
    emoji: "🌿",
    description:
      "Tending to plants has become a peaceful ritual—a way to nurture life, slow down, and bring nature's calm into my everyday.",
    image: "/images/hobbies/planting.webp",
  },
  {
    title: "Music",
    emoji: "🎸",
    description:
      "Playing guitar lets me express emotion and unwind. I love exploring different genres and dreaming of adding drums to my music journey.",
    image: "/images/hobbies/guitar.webp",
  },
  {
    title: "Photography",
    emoji: "📸",
    description:
      "Capturing stories through my camera lens helps me see the world with fresh eyes and preserve fleeting moments.",
    image: "/images/hobbies/photography.webp",
  },
  {
    title: "Travel",
    emoji: "🌍",
    description:
      "Traveling feeds my curiosity and inspires new ideas. I cherish every culture, story, and adventure along the way.",
    image: "/images/hobbies/travel.webp",
  },
  {
    title: "Archery",
    emoji: "🏹",
    description:
      "Practicing archery is both meditative and empowering. It sharpens my focus, improves discipline, and reminds me of the value of steady progress—one arrow at a time.",
    image: "/images/hobbies/archery.webp",
  },
  {
    title: "Resin Art",
    emoji: "🧪",
    description:
      "Resin-making lets me play with color, texture, and form. I love how unpredictable and beautiful the process can be—each piece becomes a small celebration of creativity.",
    image: "/images/hobbies/resin.webp",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HobbiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-charcoal/5">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/20 z-10" />
        <Image
          src="/images/hobbies/hero-bg.jpg"
          alt="Hobbies background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            My Hobbies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            A space where creativity, curiosity, and calm come together.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl text-charcoal/80 leading-relaxed"
          >
            Beyond the screen and classroom, I find joy in growing plants,
            strumming guitar strings, capturing moments through my lens,
            exploring new places, and chasing new skills like drumming. These
            passions keep me grounded and inspired.
          </motion.p>
        </div>
      </section>

      {/* Hobbies Grid */}
      <section className="py-16 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {hobbies.map((hobby) => (
            <motion.div
              key={hobby.title}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={hobby.image}
                  alt={hobby.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-charcoal mb-2">
                  {hobby.title} {hobby.emoji}
                </h3>
                <p className="text-charcoal/70">{hobby.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-charcoal/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Share Your Passions
            </h2>
            <p className="text-lg text-charcoal/80 mb-8">
              These hobbies are part of my journey toward balance and
              creativity. What passions keep you grounded and inspired? Feel
              free to reach out and share!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Let&apos;s Connect
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
