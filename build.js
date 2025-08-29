#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get environment variables
const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';
const APP_USERNAME = process.env.APP_USERNAME || '';
const APP_PASSWORD = process.env.APP_PASSWORD || '';

console.log('🔧 Building for production...');

// Read the original HTML files
const indexPath = path.join(__dirname, 'index.html');
const loginPath = path.join(__dirname, 'login.html');

let indexContent = fs.readFileSync(indexPath, 'utf8');
let loginContent = fs.readFileSync(loginPath, 'utf8');

// Meta tags to inject
const metaTags = `
    <!-- Environment Variables for Production -->
    <meta name="supabase-url" content="${SUPABASE_URL}">
    <meta name="supabase-key" content="${SUPABASE_ANON_KEY}">
    <meta name="app-username" content="${APP_USERNAME}">
    <meta name="app-password" content="${APP_PASSWORD}">`;

// Inject meta tags into both files (after the existing meta tags)
const metaRegex = /(<meta[^>]*>[\s\S]*?)(<\/head>)/i;

if (indexContent.match(metaRegex)) {
    indexContent = indexContent.replace(metaRegex, `$1${metaTags}\n    $2`);
} else {
    // Fallback: inject before </head>
    indexContent = indexContent.replace('</head>', `${metaTags}\n</head>`);
}

if (loginContent.match(metaRegex)) {
    loginContent = loginContent.replace(metaRegex, `$1${metaTags}\n    $2`);
} else {
    // Fallback: inject before </head>
    loginContent = loginContent.replace('</head>', `${metaTags}\n</head>`);
}

// Write the updated files
fs.writeFileSync(indexPath, indexContent);
fs.writeFileSync(loginPath, loginContent);

console.log('✅ Build completed successfully!');
console.log('Environment variables injected into HTML files');
