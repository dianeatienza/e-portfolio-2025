"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SlidingPuzzle from "@/components/SlidingPuzzle";
import MemoryGame from "@/components/MemoryGame";
import WordSearch from "@/components/WordSearch";

const Playground: React.FC = () => {
  const [activeGame, setActiveGame] = useState<
    "puzzle" | "memory" | "wordsearch"
  >("puzzle");

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Interactive Playground
          </h1>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
            Have some fun while exploring my portfolio! Try out these
            interactive games and challenges.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveGame("puzzle")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeGame === "puzzle"
                ? "bg-primary text-white"
                : "bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10"
            }`}
          >
            Sliding Puzzle
          </button>
          <button
            onClick={() => setActiveGame("memory")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeGame === "memory"
                ? "bg-primary text-white"
                : "bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10"
            }`}
          >
            Memory Game
          </button>
          <button
            onClick={() => setActiveGame("wordsearch")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeGame === "wordsearch"
                ? "bg-primary text-white"
                : "bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10"
            }`}
          >
            Word Search
          </button>
        </div>

        <motion.div
          key={activeGame}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          {activeGame === "puzzle" ? (
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                Sliding Puzzle
              </h2>
              <p className="text-charcoal/70 mb-8">
                Challenge yourself with this sliding puzzle game! Click on any
                tile adjacent to the empty space to move it. Try to arrange the
                tiles to recreate the original image in as few moves as
                possible.
              </p>
              <SlidingPuzzle />
            </div>
          ) : activeGame === "memory" ? (
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                Memory Game
              </h2>
              <p className="text-charcoal/70 mb-8">
                Test your memory with this programming-themed card matching
                game! Find pairs of matching cards while learning about
                different programming concepts.
              </p>
              <MemoryGame />
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                Word Search
              </h2>
              <p className="text-charcoal/70 mb-8">
                Find tech-related words hidden in this 15x15 grid! Click and
                drag to select letters. Words can be found horizontally,
                vertically, and diagonally in any direction. Challenge yourself
                to find all the programming terms!
              </p>
              <WordSearch />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Playground;
