import React, { useState, useEffect, useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";
import ReactConfetti from "react-confetti";

const GRID_SIZE = 15;
const TECH_WORDS = [
  "REACT",
  "TYPESCRIPT",
  "JAVASCRIPT",
  "PYTHON",
  "DATABASE",
  "API",
  "CLOUD",
  "DOCKER",
  "GITHUB",
  "DEVOPS",
  "FRONTEND",
  "BACKEND",
  "ALGORITHM",
  "FUNCTION",
  "VARIABLE",
];

// Pre-calculate directions for better performance
const DIRECTIONS = [
  [1, 0], // right
  [1, 1], // down-right
  [0, 1], // down
  [-1, 1], // down-left
  [-1, 0], // left
  [-1, -1], // up-left
  [0, -1], // up
  [1, -1], // up-right
];

const WordSearch: React.FC = () => {
  const [grid, setGrid] = useState<string[][]>([]);
  const [selectedCells, setSelectedCells] = useState<number[][]>([]);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [isSelecting, setIsSelecting] = useState(false);
  const [startCell, setStartCell] = useState<[number, number] | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate a pre-filled grid with random letters
  const generateEmptyGrid = useCallback(() => {
    const newGrid: string[][] = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      const row: string[] = [];
      for (let x = 0; x < GRID_SIZE; x++) {
        row.push("."); // Initialize with dots instead of random letters
      }
      newGrid.push(row);
    }
    return newGrid;
  }, []);

  const canPlaceWord = (
    grid: string[][],
    word: string,
    startX: number,
    startY: number,
    dx: number,
    dy: number
  ): boolean => {
    for (let i = 0; i < word.length; i++) {
      const x = startX + dx * i;
      const y = startY + dy * i;

      if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) return false;

      const currentCell = grid[y][x];
      // Can place if cell is empty (.) or has the same letter
      if (currentCell !== "." && currentCell !== word[i]) return false;
    }
    return true;
  };

  const placeWord = (
    grid: string[][],
    word: string,
    startX: number,
    startY: number,
    dx: number,
    dy: number
  ) => {
    for (let i = 0; i < word.length; i++) {
      const x = startX + dx * i;
      const y = startY + dy * i;
      grid[y][x] = word[i];
    }
  };

  // Optimized grid generation with a maximum number of attempts
  const generateGrid = useCallback(() => {
    const newGrid = generateEmptyGrid();
    const maxAttempts = 100; // Prevent infinite loops

    // Sort words by length (longest first) to make placement easier
    const sortedWords = [...TECH_WORDS].sort((a, b) => b.length - a.length);

    sortedWords.forEach((word) => {
      let placed = false;
      let attempts = 0;

      while (!placed && attempts < maxAttempts) {
        attempts++;
        const directionIndex = Math.floor(Math.random() * DIRECTIONS.length);
        const [dx, dy] = DIRECTIONS[directionIndex];

        // Calculate valid starting positions based on word length and direction
        const maxX =
          dx > 0
            ? GRID_SIZE - word.length
            : dx < 0
              ? word.length - 1
              : GRID_SIZE - 1;
        const maxY =
          dy > 0
            ? GRID_SIZE - word.length
            : dy < 0
              ? word.length - 1
              : GRID_SIZE - 1;
        const minX = dx < 0 ? word.length - 1 : 0;
        const minY = dy < 0 ? word.length - 1 : 0;

        const startX = minX + Math.floor(Math.random() * (maxX - minX + 1));
        const startY = minY + Math.floor(Math.random() * (maxY - minY + 1));

        if (canPlaceWord(newGrid, word, startX, startY, dx, dy)) {
          placeWord(newGrid, word, startX, startY, dx, dy);
          placed = true;
        }
      }

      if (!placed) {
        console.warn(`Could not place word: ${word}`);
      }
    });

    // Fill empty spaces with random letters
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        if (newGrid[y][x] === ".") {
          newGrid[y][x] = String.fromCharCode(
            65 + Math.floor(Math.random() * 26)
          );
        }
      }
    }

    setGrid(newGrid);
  }, [generateEmptyGrid]);

  useEffect(() => {
    generateGrid();
  }, [generateGrid]);

  const handleMouseDown = (x: number, y: number) => {
    setIsSelecting(true);
    setStartCell([x, y]);
    setSelectedCells([[x, y]]);
  };

  const handleMouseEnter = (x: number, y: number) => {
    if (!isSelecting || !startCell) return;

    const [startX, startY] = startCell;
    const cells: number[][] = [];

    // Calculate the line between start and current cell
    const dx = x - startX;
    const dy = y - startY;
    const steps = Math.max(Math.abs(dx), Math.abs(dy)) + 1;

    for (let i = 0; i < steps; i++) {
      const cellX = startX + Math.round((dx * i) / (steps - 1));
      const cellY = startY + Math.round((dy * i) / (steps - 1));
      cells.push([cellX, cellY]);
    }

    setSelectedCells(cells);
  };

  const handleMouseUp = () => {
    if (!isSelecting || !startCell) return;
    setIsSelecting(false);

    // Get the selected word
    const word = selectedCells.map(([x, y]) => grid[y][x]).join("");
    // Also check the reverse of the word
    const reversedWord = word.split("").reverse().join("");

    // Check if the word or its reverse is in our list and not already found
    if (
      (TECH_WORDS.includes(word) || TECH_WORDS.includes(reversedWord)) &&
      !foundWords.includes(word) &&
      !foundWords.includes(reversedWord)
    ) {
      const foundWord = TECH_WORDS.includes(word) ? word : reversedWord;
      const newFoundWords = [...foundWords, foundWord];
      setFoundWords(newFoundWords);
      setScore((prev) => prev + 10);

      // Check if all words are found
      if (newFoundWords.length === TECH_WORDS.length) {
        setShowConfetti(true);
        // Stop confetti after 5 seconds
        setTimeout(() => setShowConfetti(false), 5000);
      }
    }

    setSelectedCells([]);
    setStartCell(null);
  };

  const isCellSelected = (x: number, y: number) => {
    return selectedCells.some(([cellX, cellY]) => cellX === x && cellY === y);
  };

  // Memoize the grid rendering to improve performance
  const gridCells = useMemo(() => {
    return grid.map((row, y) =>
      row.map((cell, x) => (
        <div
          key={`${x}-${y}`}
          className={cn(
            "w-8 h-8 flex items-center justify-center text-lg font-bold cursor-pointer select-none",
            "border border-gray-200 dark:border-gray-700",
            isCellSelected(x, y) && "bg-blue-500 text-white",
            !isCellSelected(x, y) && "bg-white dark:bg-gray-800"
          )}
          onMouseDown={() => handleMouseDown(x, y)}
          onMouseEnter={() => handleMouseEnter(x, y)}
          onMouseUp={handleMouseUp}
        >
          {cell}
        </div>
      ))
    );
  }, [grid, handleMouseDown, handleMouseEnter, handleMouseUp, isCellSelected]);

  // Memoize the word list rendering
  const wordList = useMemo(() => {
    return TECH_WORDS.map((word) => (
      <div
        key={word}
        className={cn(
          "p-2 text-center rounded",
          foundWords.includes(word)
            ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
            : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        )}
      >
        {word}
      </div>
    ));
  }, [foundWords]);

  return (
    <div className="w-full relative">
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}

      {foundWords.length === TECH_WORDS.length && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-lg shadow-xl text-center transform animate-bounce">
            <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
              Congratulations! 🎉
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              You&apos;ve found all the words!
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Final Score: {score}
            </p>
          </div>
        </div>
      )}

      <div className="mb-4">
        <p className="text-gray-600 dark:text-gray-300">Score: {score}</p>
        <p className="text-gray-600 dark:text-gray-300">
          Found words: {foundWords.length}/{TECH_WORDS.length}
        </p>
      </div>

      <div className="grid grid-cols-15 gap-1 mb-4 max-w-[600px] mx-auto">
        {gridCells}
      </div>

      <div className="grid grid-cols-3 gap-2 max-w-[600px] mx-auto">
        {wordList}
      </div>
    </div>
  );
};

export default WordSearch;
