// This is a script to generate placeholder images for the projects
// You can run this with Node.js to create placeholder images

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { createCanvas } from 'canvas';

// Project images to generate
const projects = [
  'weather-app',
  'movie-landia',
  'ecommerce',
  'lexy-ai',
  'lexscribe',
  'qurious',
  'eqquip-me',
  'lexcode-portfolio'
];

// Colors for the placeholders
const colors = [
  '#F97316', // Orange (primary)
  '#38BDF8', // Sky Blue
  '#FB7185', // Coral
  '#10B981', // Green
  '#8B5CF6', // Purple
  '#EC4899', // Pink
  '#F59E0B', // Amber
  '#3B82F6', // Blue
];

// Create the directory if it doesn't exist
const dir = path.join(process.cwd(), 'public', 'images', 'placeholders');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Generate placeholder images
projects.forEach((project, index) => {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = colors[index % colors.length];
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 40px Inter';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(project.replace(/-/g, ' ').toUpperCase(), width / 2, height / 2);

  // Add subtitle
  ctx.font = '20px Inter';
  ctx.fillText('Project Placeholder', width / 2, height / 2 + 50);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(dir, `${project}.jpg`), buffer);
  
  console.log(`Generated placeholder for ${project}`);
});

console.log('All placeholders generated successfully!'); 