"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Define card types with programming concepts
interface Card {
  id: number;
  content: string;
  icon: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const PROGRAMMING_CARDS = [
  { content: "React", icon: "⚛️" },
  { content: "JavaScript", icon: "📜" },
  { content: "Python", icon: "🐍" },
  { content: "Database", icon: "💾" },
  { content: "Cloud", icon: "☁️" },
  { content: "Git", icon: "🔄" },
  { content: "API", icon: "🔌" },
  { content: "Security", icon: "🔒" },
];

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [gameComplete, setGameComplete] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Initialize game
  const initializeGame = () => {
    // Create pairs of cards
    const cardPairs = [...PROGRAMMING_CARDS, ...PROGRAMMING_CARDS].map(
      (card, index) => ({
        id: index,
        content: card.content,
        icon: card.icon,
        isFlipped: false,
        isMatched: false,
      })
    );

    // Fisher-Yates shuffle
    for (let i = cardPairs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardPairs[i], cardPairs[j]] = [cardPairs[j], cardPairs[i]];
    }

    // Reset all game state
    setGameComplete(false);
    setMatchedPairs(0);
    setMoves(0);
    setFlippedIndices([]);
    setCards(cardPairs);
    setGameStarted(true);
    setIsResetting(false);
  };

  // Handle reset/play again
  const handleReset = () => {
    setIsResetting(true);
    setGameStarted(false);
    setGameComplete(false);

    // Reset all cards to face down
    setCards((prevCards) =>
      prevCards.map((card) => ({
        ...card,
        isFlipped: false,
        isMatched: false,
      }))
    );

    // Wait for flip animation to complete before reshuffling
    setTimeout(() => {
      initializeGame();
    }, 600);
  };

  // Handle card click
  const handleCardClick = (index: number) => {
    if (
      isResetting ||
      flippedIndices.includes(index) ||
      flippedIndices.length === 2 ||
      cards[index].isMatched ||
      !gameStarted
    ) {
      return;
    }

    // Update flipped indices
    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    // Update cards array to flip the clicked card
    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    // If this is the second card
    if (newFlippedIndices.length === 2) {
      setMoves((prev) => prev + 1);
      const [firstIndex, secondIndex] = newFlippedIndices;

      // Check for match
      if (cards[firstIndex].content === cards[secondIndex].content) {
        // It's a match!
        setTimeout(() => {
          const matchedCards = [...cards];
          matchedCards[firstIndex].isMatched = true;
          matchedCards[secondIndex].isMatched = true;
          setCards(matchedCards);
          setFlippedIndices([]);
          setMatchedPairs((prev) => prev + 1);

          // Check if game is complete
          if (matchedPairs + 1 === PROGRAMMING_CARDS.length) {
            setGameComplete(true);
          }
        }, 500);
      } else {
        // Not a match, flip them back
        setTimeout(() => {
          const resetCards = [...cards];
          resetCards[firstIndex].isFlipped = false;
          resetCards[secondIndex].isFlipped = false;
          setCards(resetCards);
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-charcoal mb-2">Memory Game</h2>
          <p className="text-charcoal/70 mb-4">
            Match pairs of programming concepts. Click any card to reveal it,
            and find its matching pair!
          </p>

          {!gameStarted && !isResetting ? (
            <div className="text-center py-8">
              <p className="text-lg mb-4">Ready to test your memory?</p>
              <button
                onClick={initializeGame}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Start Game
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-primary font-medium">
                    Pairs: {matchedPairs}/{PROGRAMMING_CARDS.length}
                  </span>
                  <span className="text-charcoal/70">Moves: {moves}</span>
                </div>
                <button
                  onClick={handleReset}
                  disabled={isResetting}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isResetting
                      ? "bg-charcoal/5 text-charcoal/40 cursor-not-allowed"
                      : "bg-charcoal/10 text-charcoal hover:bg-charcoal/20"
                  }`}
                >
                  Reset
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {cards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    className={`aspect-square cursor-pointer perspective-1000 ${
                      flippedIndices.length === 2 || isResetting
                        ? "pointer-events-none"
                        : ""
                    }`}
                    onClick={() => handleCardClick(index)}
                    whileHover={
                      card.isMatched ||
                      flippedIndices.length === 2 ||
                      isResetting
                        ? {}
                        : { scale: 1.05 }
                    }
                  >
                    <motion.div
                      className="relative w-full h-full"
                      initial={false}
                      animate={{ rotateY: card.isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Card Front */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center rounded-xl border-2 ${
                          card.isMatched
                            ? "border-primary/20 bg-primary/5"
                            : "border-charcoal/20 bg-white hover:border-primary/50"
                        } backface-hidden transition-colors`}
                      >
                        <span className="text-3xl">❔</span>
                      </div>

                      {/* Card Back */}
                      <div
                        className={`absolute inset-0 flex flex-col items-center justify-center rounded-xl border-2 ${
                          card.isMatched
                            ? "border-primary bg-primary/10"
                            : "border-primary/20 bg-white"
                        } [transform:rotateY(180deg)] backface-hidden`}
                      >
                        <span className="text-4xl mb-2">{card.icon}</span>
                        <span className="text-sm font-medium text-charcoal">
                          {card.content}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {gameComplete && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-primary/10 rounded-lg text-center"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Congratulations! 🎉
                  </h3>
                  <p className="mb-4">
                    You completed the game in {moves} moves!
                  </p>
                  <button
                    onClick={handleReset}
                    disabled={isResetting}
                    className={`px-6 py-3 rounded-lg transition-colors ${
                      isResetting
                        ? "bg-primary/50 text-white/70 cursor-not-allowed"
                        : "bg-primary text-white hover:bg-primary/90"
                    }`}
                  >
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
