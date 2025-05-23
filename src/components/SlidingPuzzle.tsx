import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Difficulty = "easy" | "average" | "difficult";
type PuzzleImage = "bini" | "avengers" | "one-piece" | "tangerines";

const GRID_SIZES: Record<Difficulty, number> = {
  easy: 3,
  average: 4,
  difficult: 5,
};

const PUZZLE_IMAGES: Record<PuzzleImage, { src: string; title: string }> = {
  bini: {
    src: "/images/playground/bini-group-photo.webp",
    title: "Bini Image",
  },
  "one-piece": {
    src: "/images/playground/one-piece.webp",
    title: "One Piece",
  },
  avengers: {
    src: "/images/playground/avengers.webp",
    title: "Avengers",
  },
  tangerines: {
    src: "/images/playground/tangerines.webp",
    title: "When Life Gives You Tangerines",
  },
};

const SlidingPuzzle: React.FC = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [currentImage, setCurrentImage] = useState<PuzzleImage>("bini");
  const [showReference, setShowReference] = useState(false);
  const [tiles, setTiles] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const GRID_SIZE = GRID_SIZES[difficulty];
  const TOTAL_TILES = GRID_SIZE * GRID_SIZE;

  const initializePuzzle = () => {
    const initialTiles = Array.from({ length: TOTAL_TILES }, (_, i) => i);
    shuffleTiles(initialTiles);
  };

  useEffect(() => {
    initializePuzzle();
  }, [difficulty, currentImage, initializePuzzle]);

  const shuffleTiles = (tiles: number[]) => {
    const shuffled = [...tiles];
    let currentIndex = shuffled.length;

    // Fisher-Yates shuffle
    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [shuffled[currentIndex], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[currentIndex],
      ];
    }

    // Ensure the puzzle is solvable
    if (!isSolvable(shuffled)) {
      // Swap last two non-empty tiles to make it solvable
      const lastIndex = shuffled.length - 1;
      const secondLastIndex = lastIndex - 1;
      [shuffled[lastIndex], shuffled[secondLastIndex]] = [
        shuffled[secondLastIndex],
        shuffled[lastIndex],
      ];
    }

    setTiles(shuffled);
    setMoves(0);
    setIsComplete(false);
  };

  const isSolvable = (tiles: number[]): boolean => {
    let inversions = 0;
    const tilesWithoutEmpty = tiles.filter((tile) => tile !== 0);

    for (let i = 0; i < tilesWithoutEmpty.length - 1; i++) {
      for (let j = i + 1; j < tilesWithoutEmpty.length; j++) {
        if (tilesWithoutEmpty[i] > tilesWithoutEmpty[j]) {
          inversions++;
        }
      }
    }

    // For 3x3 puzzle, if number of inversions is even, puzzle is solvable
    return inversions % 2 === 0;
  };

  const isAdjacent = (index1: number, index2: number): boolean => {
    const row1 = Math.floor(index1 / GRID_SIZE);
    const col1 = index1 % GRID_SIZE;
    const row2 = Math.floor(index2 / GRID_SIZE);
    const col2 = index2 % GRID_SIZE;
    return Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;
  };

  const handleTileClick = (index: number) => {
    const emptyIndex = tiles.indexOf(0);

    if (isAdjacent(index, emptyIndex)) {
      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIndex]] = [
        newTiles[emptyIndex],
        newTiles[index],
      ];
      setTiles(newTiles);
      setMoves((prev) => prev + 1);
      checkCompletion(newTiles);
    }
  };

  const checkCompletion = (currentTiles: number[]) => {
    const isComplete = currentTiles.every((tile, index) => {
      if (index === TOTAL_TILES - 1) {
        return tile === 0; // Empty tile should be at the last position
      }
      return tile === index;
    });
    setIsComplete(isComplete);
  };

  // Calculate the position for each tile's background image
  const getTilePosition = (number: number) => {
    if (number === 0) return null; // Empty tile
    const row = Math.floor(number / GRID_SIZE);
    const col = number % GRID_SIZE;
    return {
      x: (100 / (GRID_SIZE - 1)) * col,
      y: (100 / (GRID_SIZE - 1)) * row,
    };
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Controls */}
          <div className="mb-6 space-y-4">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-4">
                <label className="text-charcoal/70">Difficulty:</label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                  className="px-3 py-2 rounded-lg bg-white border border-charcoal/20"
                >
                  <option value="easy">Easy (3x3)</option>
                  <option value="average">Average (4x4)</option>
                  <option value="difficult">Difficult (5x5)</option>
                </select>
              </div>
              <div className="text-charcoal/70">Moves: {moves}</div>
              <button
                onClick={initializePuzzle}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                New Game
              </button>
            </div>

            {/* Image Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(Object.keys(PUZZLE_IMAGES) as PuzzleImage[]).map((imageKey) => (
                <button
                  key={imageKey}
                  onClick={() => setCurrentImage(imageKey)}
                  className={`relative aspect-square rounded-lg overflow-hidden group ${
                    currentImage === imageKey
                      ? "ring-2 ring-primary ring-offset-2"
                      : "hover:ring-2 hover:ring-charcoal/20 hover:ring-offset-2"
                  }`}
                >
                  <Image
                    src={PUZZLE_IMAGES[imageKey].src}
                    alt={PUZZLE_IMAGES[imageKey].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-medium">
                      {PUZZLE_IMAGES[imageKey].title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Puzzle Grid */}
          <div className="relative aspect-square w-full bg-charcoal/5 rounded-xl overflow-hidden">
            <div
              className={`absolute inset-0 grid gap-1 p-1`}
              style={{
                gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
              }}
            >
              {tiles.map((number, index) => {
                const position = getTilePosition(number);
                return (
                  <motion.div
                    key={index}
                    className={`relative cursor-pointer rounded-lg overflow-hidden
                      ${number === 0 ? "bg-charcoal/10" : ""}`}
                    onClick={() => handleTileClick(index)}
                    initial={false}
                    animate={{
                      scale: number === 0 ? 0.9 : 1,
                    }}
                    whileHover={{ scale: number === 0 ? 0.9 : 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {number !== 0 && position && (
                      <div
                        className="absolute inset-0 bg-cover bg-no-repeat"
                        style={{
                          backgroundImage: `url('${PUZZLE_IMAGES[currentImage].src}')`,
                          backgroundPosition: `${position.x}% ${position.y}%`,
                          backgroundSize: `${GRID_SIZE * 100}%`,
                          imageRendering: "pixelated",
                        }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center"
            >
              <p className="text-lg font-medium text-primary">
                Congratulations! You solved the puzzle in {moves} moves!
              </p>
            </motion.div>
          )}
        </div>

        {/* Reference Image Section */}
        <div className="md:col-span-1">
          <div className="sticky top-4">
            <button
              onClick={() => setShowReference(!showReference)}
              className="w-full px-4 py-2 mb-4 bg-charcoal/10 text-charcoal rounded-lg hover:bg-charcoal/20 transition-colors"
            >
              {showReference ? "Hide Reference" : "Show Reference"}
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: showReference ? 1 : 0,
                scale: showReference ? 1 : 0.95,
                height: showReference ? "auto" : 0,
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden rounded-xl"
            >
              <div className="relative aspect-square w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-xl"
                  style={{
                    backgroundImage: `url('${PUZZLE_IMAGES[currentImage].src}')`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundColor: "rgb(243 244 246)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingPuzzle;
