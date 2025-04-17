"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SpotTheDifference from "@/components/SpotTheDifference";

export default function Playground() {
  const [activeGame, setActiveGame] = useState("hidden-objects");

  const games = [
    {
      id: "hidden-objects",
      name: "Find the Hidden Objects",
      description: "Find all the hidden objects in the image",
      icon: "🔍",
    },
    {
      id: "coming-soon-1",
      name: "Code Quiz",
      description: "Test your knowledge with coding questions",
      icon: "❓",
      disabled: true,
    },
    {
      id: "coming-soon-2",
      name: "Bug Finder",
      description: "Find and fix bugs in code snippets",
      icon: "🐛",
      disabled: true,
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
            Interactive Playground
          </h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Have fun with these interactive games and challenges. More coming
            soon!
          </p>
        </motion.div>

        {/* Game selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {games.map((game) => (
            <motion.button
              key={game.id}
              onClick={() => !game.disabled && setActiveGame(game.id)}
              className={`flex items-center px-6 py-3 rounded-full ${
                activeGame === game.id
                  ? "bg-primary text-white"
                  : game.disabled
                  ? "bg-charcoal/10 text-charcoal/50 cursor-not-allowed"
                  : "bg-white text-charcoal hover:bg-primary/10"
              } transition-colors duration-200`}
              whileHover={!game.disabled ? { scale: 1.05 } : {}}
              whileTap={!game.disabled ? { scale: 0.95 } : {}}
            >
              <span className="text-2xl mr-3">{game.icon}</span>
              <div className="text-left">
                <div className="font-medium">{game.name}</div>
                <div className="text-xs opacity-80">
                  {game.disabled ? "Coming soon" : game.description}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Game content */}
        <motion.div
          key={activeGame}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeGame === "hidden-objects" && <SpotTheDifference />}
          {activeGame === "coming-soon-1" && (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                Code Quiz - Coming Soon
              </h2>
              <p className="text-charcoal/70 mb-6">
                Test your knowledge with coding questions of varying difficulty.
              </p>
              <div className="text-6xl mb-6">🚧</div>
              <p className="text-charcoal/50">
                This game is under development. Check back soon!
              </p>
            </div>
          )}
          {activeGame === "coming-soon-2" && (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                Bug Finder - Coming Soon
              </h2>
              <p className="text-charcoal/70 mb-6">
                Find and fix bugs in code snippets to improve your debugging
                skills.
              </p>
              <div className="text-6xl mb-6">🚧</div>
              <p className="text-charcoal/50">
                This game is under development. Check back soon!
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
