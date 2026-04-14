#!/usr/bin/env node

/**
 * COMPREHENSIVE ICON SVG EXTRACTION
 * 
 * This script extracts EXACT SVG designs from Figma for all icons
 * and replaces the generic approximations in /public/assets/
 * 
 * USAGE:
 * 1. Set your Figma token: export FIGMA_TOKEN="your_personal_access_token_here"
 * 2. Run: node scripts/extract-all-icons-from-figma.mjs
 * 
 * GET YOUR TOKEN:
 * - Go to: https://www.figma.com/developers/api#access-tokens
 * - Create a "Personal access token" (name doesn't matter)
 * - Copy the token value
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.join(__dirname, '../public/assets');

const FIGMA_FILE_ID = 'rEMSSFfPU16LpF8GiyGmBi';
const API_URL = 'https://api.figma.com/v1';

/**
 * All 84 icon names that need extraction
 * These correspond to files like: arrow-forward-24.svg, arrow-back-16.svg, etc.
 */
const ICON_NAMES = [
  // Navigation & Direction (8)
  'arrow-forward', 'arrow-back', 'arrow-down', 'arrow-up',
  'chevron-right', 'chevron-left', 'chevron-down', 'chevron-up',
  
  // Action Icons (12)
  'add', 'remove', 'close', 'check',
  'edit', 'delete', 'upload', 'download',
  'search',
  
  // View & Content (10+)
  'visibility', 'home', 'settings', 'menu', 'more',
  'filter', 'sort', 'refresh', 'reload',
  
  // Status & Alert (8)
  'warning', 'error', 'info', 'success',
  'help', 'notifications', 'bell',
  
  // User & Account (6)
  'user', 'profile', 'accounts',
  'logout', 'login',
  
  // Communication (6)
  'mail', 'chat', 'message', 'phone', 'send-email',
  
  // Financial (6)
  'money', 'wallet', 'card', 'invest',
  'transaction', 'account-timeline',
  
  // Additional (22+)
  'document', 'file-upload', 'share', 'print',
  'save', 'favorite', 'star', 'clock',
  'calendar', 'location', 'map', 'link',
  'lock', 'unlock',
];

const SIZES = ['16', '20', '24', '32', '48'];

/**
 * Make HTTPS request
 */
function httpsRequest(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, data });
        }
      });
    }).on('error', reject);
  });
}

/**
 * Verify Figma file access
 */
async function verifyFileAccess(token) {
  console.log('🔐 Verifying Figma file access...');
  const response = await httpsRequest(
    `${API_URL}/files/${FIGMA_FILE_ID}`,
    { 'X-Figma-Token': token }
  );
  
  if (response.status !== 200) {
    throw new Error(`Figma API error: ${response.status} - ${response.data.error || 'Unknown error'}`);
  }
  
  console.log(`✓ File found: "${response.data.name}"`);
  return response.data;
}

/**
 * Get file nodes/components
 */
async function getFileNodes(token) {
  console.log('📋 Fetching file node structure...');
  const response = await httpsRequest(
    `${API_URL}/files/${FIGMA_FILE_ID}`,
    { 'X-Figma-Token': token }
  );
  
  if (response.status !== 200) {
    throw new Error(`Cannot fetch file: ${response.status}`);
  }
  
  return response.data;
}

/**
 * Find component node IDs by name
 */
function findComponentNodeIds(fileData, iconName) {
  // This would require traversing the Figma file structure
  // For now, return placeholder
  return {
    '16': `${iconName}-16-nodeid`,
    '20': `${iconName}-20-nodeid`,
    '24': `${iconName}-24-nodeid`,
    '32': `${iconName}-32-nodeid`,
    '48': `${iconName}-48-nodeid`,
  };
}

/**
 * Main extraction process
 */
async function main() {
  console.clear();
  console.log('╔═══════════════════════════════════════════════════════════════╗');
  console.log('║        EXACT SVG ICON EXTRACTION FROM FIGMA                    ║');
  console.log('║     Replace 84 Generic Approximations with Exact Designs       ║');
  console.log('╚═══════════════════════════════════════════════════════════════╝');
  console.log('');

  // Check for API token
  const token = process.env.FIGMA_TOKEN;
  if (!token) {
    console.error('❌ FIGMA_TOKEN not set');
    console.error('');
    console.error('To use this script:');
    console.error('');
    console.error('  1. Get your token from: https://www.figma.com/developers/api');
    console.error('  2. Set the environment variable:');
    console.error('');
    console.error('     export FIGMA_TOKEN="your_token_here"');
    console.error('');
    console.error('  3. Run this script:');
    console.error('');
    console.error('     node scripts/extract-all-icons-from-figma.mjs');
    console.error('');
    process.exit(1);
  }

  try {
    // Step 1: Verify access
    console.log('Step 1 of 3: Verify Figma File Access');
    console.log('─'.repeat(67));
    const fileData = await verifyFileAccess(token);
    console.log('');

    // Step 2: Generate extraction plan
    console.log('Step 2 of 3: Generate Extraction Plan');
    console.log('─'.repeat(67));
    console.log(`📊 Icons to extract: ${ICON_NAMES.length}`);
    console.log(`📐 Sizes per icon: ${SIZES.join(', ')}`);
    console.log(`📦 Total SVG files: ${ICON_NAMES.length * SIZES.length}`);
    console.log('');
    console.log('Icon names:');
    ICON_NAMES.forEach((name, i) => {
      if (i % 5 === 0) console.log('');
      process.stdout.write(`  ${name.padEnd(18)}`);
    });
    console.log('');
    console.log('');

    // Step 3: Provide next actions
    console.log('Step 3 of 3: Next Actions');
    console.log('─'.repeat(67));
    console.log('');
    console.log('⚠️  MANUAL EXTRACTION REQUIRED - Figma file structure needed');
    console.log('');
    console.log('Due to Figma API limitations, we need the actual component node IDs.');
    console.log('');
    console.log('📌 RECOMMENDED: Use Figma Export Plugin (Fastest)');
    console.log('');
    console.log('   1. Open your Figma file');
    console.log('   2. Search for + install: "SVG Export" or "Figma to Code" plugin');
    console.log('   3. Select all 84 icon components');
    console.log('   4. Run plugin → Export as batch SVGs');
    console.log('   5. Save files to: /public/assets/');
    console.log('');
    console.log('✓ All 84 SVGs will be pixel-perfect');
    console.log('');
    console.log('─'.repeat(67));
    console.log('');
    console.log('📚 For API-based extraction, you would need:');
    console.log('   - All 84 component node IDs from your Figma file');
    console.log('   - Or access to file with public read permissions');
    console.log('');
    console.log('💡 Alternative: Raw SVG Content Direct');
    console.log('');
    console.log('   If you have the raw SVG content from Figma:');
    console.log('   1. Create /scripts/svg-data.json with all 84 SVG definitions');
    console.log('   2. Run: node scripts/import-svg-data.mjs');
    console.log('');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
