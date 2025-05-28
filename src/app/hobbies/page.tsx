"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  {
    title: "Concerts & Theater",
    emoji: "🎭",
    description:
      "I love immersing myself in live performances—whether it's the raw energy of concerts or the storytelling magic of stage plays. There's something inspiring about witnessing art come alive right in front of you. It fuels my own creativity and reminds me of the beauty of shared human experience.",
    image: "/images/hobbies/concerts.webp",
  },
  {
    title: "Baking",
    emoji: "🍰",
    description:
      "Baking brings me calm, joy, and a sweet sense of accomplishment. Whether it's kneading dough or decorating cakes, the process is as comforting as the treats themselves. It's my way of creating warmth—both in the kitchen and in the hearts of those I share it with.",
    image: "/images/hobbies/baking.webp",
  },
  {
    title: "Culinary Adventures",
    emoji: "🍜",
    description:
      "I don't just love food—I love the stories, cultures, and comfort that come with it. Whether I'm trying street food in a new city or savoring a homemade dish, eating is one of my favorite ways to explore, connect, and celebrate life. Every bite is a little adventure.",
    image: "/images/hobbies/food.webp",
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

// Gallery images for each hobby
const galleries = {
  planting: [
    "/images/hobbies/gallery/placeholder-1.webp",
    "/images/hobbies/gallery/placeholder-2.webp",
    "/images/hobbies/gallery/placeholder-1.webp",
  ],
  music: [
    "/images/hobbies/gallery/placeholder-2.webp",
    "/images/hobbies/gallery/placeholder-1.webp",
    "/images/hobbies/gallery/placeholder-2.webp",
  ],
  photography: [
    "/images/hobbies/gallery/placeholder-2.webp",
    "/images/hobbies/gallery/placeholder-2.webp",
    "/images/hobbies/gallery/placeholder-2.webp",
  ],
  travel: [
    "/images/hobbies/gallery/placeholder-2.webp",
    "/images/hobbies/gallery/placeholder-2.webp",
    "/images/hobbies/gallery/placeholder-2.webp",
  ],
  archery: [
    "/images/hobbies/gallery/placeholder-2.webp",
    "/images/hobbies/gallery/placeholder-2.webp",
    "/images/hobbies/gallery/placeholder-2.webp",
  ],
  resin: [
    "/images/hobbies/gallery/placeholder-1.webp",
    "/images/hobbies/gallery/placeholder-1.webp",
    "/images/hobbies/gallery/placeholder-1.webp",
  ],
  concerts: [
    "/images/hobbies/gallery/placeholder-1.webp",
    "/images/hobbies/gallery/placeholder-1.webp",
    "/images/hobbies/gallery/placeholder-1.webp",
  ],
  baking: [
    "/images/hobbies/gallery/placeholder-2.webp",
    "/images/hobbies/gallery/placeholder-2.webp",
    "/images/hobbies/gallery/placeholder-2.webp",
  ],
  food: [
    "/images/hobbies/gallery/placeholder-2.webp",
    "/images/hobbies/gallery/placeholder-2.webp",
    "/images/hobbies/gallery/placeholder-2.webp",
  ],
};

export default function HobbiesPage() {
  const [selectedHobby, setSelectedHobby] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleHobbyClick = (hobby: string) => {
    setSelectedHobby(hobby);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedHobby(null);
  };

  const handleNextImage = () => {
    if (selectedHobby) {
      const gallery = galleries[selectedHobby as keyof typeof galleries];
      setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedHobby) {
      const gallery = galleries[selectedHobby as keyof typeof galleries];
      setCurrentImageIndex(
        (prev) => (prev - 1 + gallery.length) % gallery.length
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-charcoal/5">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/20 z-10" />
        <Image
          src="/images/hobbies/hobbies-cover.webp"
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
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() =>
                handleHobbyClick(hobby.title.toLowerCase().replace(/\s+/g, "-"))
              }
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

      {/* Modal */}
      <AnimatePresence>
        {selectedHobby && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[60vh]">
                <Image
                  src={
                    galleries[selectedHobby as keyof typeof galleries][
                      currentImageIndex
                    ]
                  }
                  alt={`${selectedHobby} gallery image`}
                  fill
                  className="object-contain"
                />
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                >
                  →
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-charcoal">
                    {
                      hobbies.find(
                        (h) =>
                          h.title.toLowerCase().replace(/\s+/g, "-") ===
                          selectedHobby
                      )?.title
                    }
                  </h3>
                  <button
                    onClick={handleCloseModal}
                    className="text-charcoal/70 hover:text-charcoal transition-colors"
                  >
                    Close
                  </button>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {galleries[selectedHobby as keyof typeof galleries].map(
                    (image, index) => (
                      <button
                        key={image}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden ${
                          index === currentImageIndex
                            ? "ring-2 ring-primary"
                            : ""
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
