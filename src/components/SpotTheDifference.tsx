"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Define the hidden objects to find
// Note: These coordinates are approximate and may need adjustment based on the actual image
const hiddenObjects = [
  { x: 100, y: 100, radius: 15, name: "Coffee cup" },
  { x: 300, y: 150, radius: 15, name: "Keyboard" },
  { x: 500, y: 200, radius: 15, name: "Mouse" },
  { x: 200, y: 300, radius: 15, name: "Monitor" },
  { x: 400, y: 350, radius: 15, name: "Headphones" },
];

export default function SpotTheDifference() {
  const [foundObjects, setFoundObjects] = useState<number[]>([]);
  const [gameComplete, setGameComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds
  const [gameStarted, setGameStarted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showObjectName, setShowObjectName] = useState<number | null>(null);
  const [debugMode, setDebugMode] = useState(false); // Debug mode to show all objects

  // Start the timer when the game starts
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted && timeLeft > 0 && !gameComplete) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !gameComplete) {
      // Game over due to time running out
      setGameComplete(true);
    }
    return () => clearInterval(timer);
  }, [gameStarted, timeLeft, gameComplete]);

  // Check if all objects are found
  useEffect(() => {
    if (foundObjects.length === hiddenObjects.length) {
      setGameComplete(true);
    }
  }, [foundObjects]);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (gameComplete) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check if click is near any hidden object
    hiddenObjects.forEach((obj, index) => {
      if (
        !foundObjects.includes(index) &&
        Math.sqrt(Math.pow(x - obj.x, 2) + Math.pow(y - obj.y, 2)) < obj.radius
      ) {
        setFoundObjects((prev) => [...prev, index]);
        setShowObjectName(index);
        setTimeout(() => setShowObjectName(null), 2000);
      }
    });
  };

  const startGame = () => {
    setGameStarted(true);
    setFoundObjects([]);
    setGameComplete(false);
    setTimeLeft(60);
  };

  const resetGame = () => {
    setGameStarted(false);
    setFoundObjects([]);
    setGameComplete(false);
    setTimeLeft(60);
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  const toggleDebugMode = () => {
    setDebugMode(!debugMode);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-charcoal mb-2">
            Find the Hidden Objects
          </h2>
          <p className="text-charcoal/70 mb-4">
            Find all 5 hidden objects in this image. Click on them when you find
            them!
          </p>

          {!gameStarted ? (
            <div className="text-center py-8">
              <p className="text-lg mb-4">
                Can you find all the hidden objects? You have 60 seconds!
              </p>
              <button onClick={startGame} className="btn btn-primary">
                Start Game
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <span className="text-primary font-medium mr-2">
                    Found: {foundObjects.length}/{hiddenObjects.length}
                  </span>
                  <span className="text-charcoal/70">Time: {timeLeft}s</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={toggleHint}
                    className="px-3 py-1 text-sm bg-sky/10 text-sky rounded-full"
                  >
                    {showHint ? "Hide Hint" : "Show Hint"}
                  </button>
                  <button
                    onClick={resetGame}
                    className="px-3 py-1 text-sm bg-charcoal/10 text-charcoal rounded-full"
                  >
                    Reset
                  </button>
                  <button
                    onClick={toggleDebugMode}
                    className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full"
                  >
                    {debugMode ? "Hide Debug" : "Debug Mode"}
                  </button>
                </div>
              </div>

              <div className="relative">
                <div
                  className="relative w-full h-[400px] cursor-pointer"
                  onClick={handleImageClick}
                >
                  <Image
                    src="/images/placeholders/hidden-objects.jpg"
                    alt="Find the Hidden Objects"
                    fill
                    className="object-contain"
                  />

                  {/* Show found objects */}
                  {foundObjects.map((index) => (
                    <motion.div
                      key={index}
                      className="absolute w-8 h-8 rounded-full border-2 border-primary bg-primary/20"
                      style={{
                        left: `${hiddenObjects[index].x - 16}px`,
                        top: `${hiddenObjects[index].y - 16}px`,
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    />
                  ))}

                  {/* Show hint circles if enabled */}
                  {showHint &&
                    hiddenObjects
                      .filter((_, index) => !foundObjects.includes(index))
                      .map((obj, index) => (
                        <motion.div
                          key={`hint-${index}`}
                          className="absolute w-8 h-8 rounded-full border-2 border-sky/50 bg-sky/10"
                          style={{
                            left: `${obj.x - 16}px`,
                            top: `${obj.y - 16}px`,
                          }}
                          animate={{ opacity: [0.3, 0.7, 0.3] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        />
                      ))}

                  {/* Show all objects in debug mode */}
                  {debugMode &&
                    hiddenObjects.map((obj, index) => (
                      <motion.div
                        key={`debug-${index}`}
                        className="absolute w-8 h-8 rounded-full border-2 border-red-500 bg-red-500/20"
                        style={{
                          left: `${obj.x - 16}px`,
                          top: `${obj.y - 16}px`,
                        }}
                      >
                        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          {obj.name} ({obj.x}, {obj.y})
                        </span>
                      </motion.div>
                    ))}

                  {/* Show object name when found */}
                  {showObjectName !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute bg-primary text-white px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        left: `${hiddenObjects[showObjectName].x}px`,
                        top: `${hiddenObjects[showObjectName].y - 30}px`,
                      }}
                    >
                      {hiddenObjects[showObjectName].name}
                    </motion.div>
                  )}
                </div>

                {/* List of objects to find */}
                <div className="mt-4 bg-charcoal/5 p-4 rounded-lg">
                  <h3 className="font-medium text-charcoal mb-2">
                    Objects to find:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {hiddenObjects.map((obj, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm ${
                          foundObjects.includes(index)
                            ? "bg-primary/20 text-primary"
                            : "bg-charcoal/10 text-charcoal/70"
                        }`}
                      >
                        {obj.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {gameComplete && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-primary/10 rounded-lg text-center"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {foundObjects.length === hiddenObjects.length
                      ? "Congratulations! You found all the objects!"
                      : "Time's up! Try again to find all the objects."}
                  </h3>
                  <p className="mb-4">
                    You found {foundObjects.length} out of{" "}
                    {hiddenObjects.length} objects in {60 - timeLeft} seconds.
                  </p>
                  <button onClick={resetGame} className="btn btn-primary">
                    Play Again
                  </button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
