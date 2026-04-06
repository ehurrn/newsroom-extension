#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
  try {
    execSync('npm install --silent', { 
      cwd: __dirname, 
      stdio: ['ignore', 'ignore', 'inherit'] 
    });
  } catch (error) {
    console.error('Failed to install dependencies:', error);
    process.exit(1);
  }
}

import('./server.js');
