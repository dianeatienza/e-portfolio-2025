"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Define the differences to find
const differences = [
  { x: 150, y: 120, radius: 15, name: "Missing flower" },
  { x: 250, y: 180, radius: 15, name: "Different cloud" },
  { x: 350, y: 220, radius: 15, name: "Extra bird" },
  { x: 450, y: 280, radius: 15, name: "Changed color" },
  { x: 550, y: 320, radius: 15, name: "Missing object" },
];

export default function SpotTheDifference() {
  const [foundDifferences, setFoundDifferences] = useState<number[]>([]);
  const [gameComplete, setGameComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds
  const [gameStarted, setGameStarted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showDifferenceName, setShowDifferenceName] = useState<number | null>(
    null
  );
  const [debugMode, setDebugMode] = useState(false);

  // Start the timer when the game starts
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted && timeLeft > 0 && !gameComplete) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !gameComplete) {
      setGameComplete(true);
    }
    return () => clearInterval(timer);
  }, [gameStarted, timeLeft, gameComplete]);

  // Check if all differences are found
  useEffect(() => {
    if (foundDifferences.length === differences.length) {
      setGameComplete(true);
    }
  }, [foundDifferences]);

  const handleImageClick = (
    e: React.MouseEvent<HTMLDivElement>,
    imageIndex: number
  ) => {
    if (gameComplete) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Adjust coordinates based on which image was clicked
    const adjustedX = imageIndex === 0 ? x : x + rect.width;

    // Check if click is near any difference
    differences.forEach((diff, index) => {
      if (
        !foundDifferences.includes(index) &&
        Math.sqrt(Math.pow(adjustedX - diff.x, 2) + Math.pow(y - diff.y, 2)) <
          diff.radius
      ) {
        setFoundDifferences((prev) => [...prev, index]);
        setShowDifferenceName(index);
        setTimeout(() => setShowDifferenceName(null), 2000);
      }
    });
  };

  const startGame = () => {
    setGameStarted(true);
    setFoundDifferences([]);
    setGameComplete(false);
    setTimeLeft(60);
  };

  const resetGame = () => {
    setGameStarted(false);
    setFoundDifferences([]);
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
            Spot the Difference
          </h2>
          <p className="text-charcoal/70 mb-4">
            Find all 5 differences between these two images. Click on the
            differences you find!
          </p>

          {!gameStarted ? (
            <div className="text-center py-8">
              <p className="text-lg mb-4">
                Can you spot all the differences? You have 60 seconds!
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
                    Found: {foundDifferences.length}/{differences.length}
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
                <div className="grid grid-cols-2 gap-4">
                  {/* First Image */}
                  <div
                    className="relative w-full h-[400px] cursor-pointer"
                    onClick={(e) => handleImageClick(e, 0)}
                  >
                    <Image
                      src="/images/placeholders/spot-diff-1.jpg"
                      alt="Spot the Difference - Image 1"
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Second Image */}
                  <div
                    className="relative w-full h-[400px] cursor-pointer"
                    onClick={(e) => handleImageClick(e, 1)}
                  >
                    <Image
                      src="/images/placeholders/spot-diff-2.jpg"
                      alt="Spot the Difference - Image 2"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Show found differences */}
                {foundDifferences.map((index) => (
                  <motion.div
                    key={index}
                    className="absolute w-8 h-8 rounded-full border-2 border-primary bg-primary/20"
                    style={{
                      left: `${differences[index].x - 16}px`,
                      top: `${differences[index].y - 16}px`,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  />
                ))}

                {/* Show hint circles if enabled */}
                {showHint &&
                  differences
                    .filter((_, index) => !foundDifferences.includes(index))
                    .map((diff, index) => (
                      <motion.div
                        key={`hint-${index}`}
                        className="absolute w-8 h-8 rounded-full border-2 border-sky/50 bg-sky/10"
                        style={{
                          left: `${diff.x - 16}px`,
                          top: `${diff.y - 16}px`,
                        }}
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    ))}

                {/* Show all differences in debug mode */}
                {debugMode &&
                  differences.map((diff, index) => (
                    <motion.div
                      key={`debug-${index}`}
                      className="absolute w-8 h-8 rounded-full border-2 border-red-500 bg-red-500/20"
                      style={{
                        left: `${diff.x - 16}px`,
                        top: `${diff.y - 16}px`,
                      }}
                    >
                      <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {diff.name} ({diff.x}, {diff.y})
                      </span>
                    </motion.div>
                  ))}

                {/* Show difference name when found */}
                {showDifferenceName !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute bg-primary text-white px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      left: `${differences[showDifferenceName].x}px`,
                      top: `${differences[showDifferenceName].y - 30}px`,
                    }}
                  >
                    {differences[showDifferenceName].name}
                  </motion.div>
                )}
              </div>

              {/* List of differences to find */}
              <div className="mt-4 bg-charcoal/5 p-4 rounded-lg">
                <h3 className="font-medium text-charcoal mb-2">
                  Differences to find:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {differences.map((diff, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        foundDifferences.includes(index)
                          ? "bg-primary/20 text-primary"
                          : "bg-charcoal/10 text-charcoal/70"
                      }`}
                    >
                      {diff.name}
                    </span>
                  ))}
                </div>
              </div>

              {gameComplete && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-primary/10 rounded-lg text-center"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {foundDifferences.length === differences.length
                      ? "Congratulations! You found all the differences!"
                      : "Time's up! Try again to find all the differences."}
                  </h3>
                  <p className="mb-4">
                    You found {foundDifferences.length} out of{" "}
                    {differences.length} differences in {60 - timeLeft} seconds.
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
