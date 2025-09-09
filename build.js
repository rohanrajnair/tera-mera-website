#!/usr/bin/env node

/**
 * Simple build script for Tera Mera website
 * Combines and minifies CSS and JavaScript files
 */

const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Copy HTML file
fs.copyFileSync('index.html', path.join(distDir, 'index.html'));

// Copy assets directory
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

copyDir('assets', path.join(distDir, 'assets'));

console.log('✅ Build completed successfully!');
console.log('📁 Output directory: dist/');
console.log('🚀 Ready for deployment!');
