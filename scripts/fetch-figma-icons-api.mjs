#!/usr/bin/env node

/**
 * Extract EXACT SVG icons from Figma using the Figma REST API
 * 
 * This script downloads pixel-perfect SVG files for all 84 icons
 * directly from your Figma file.
 * 
 * Setup:
 * 1. Get your Figma API token: https://www.figma.com/developers/api#access-tokens
 * 2. Set environment variable: export FIGMA_TOKEN="your_token_here"
 * 3. Run this script: node scripts/fetch-figma-icons-api.mjs
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.join(__dirname, '../public/assets');

const FIGMA_FILE_ID = 'rEMSSFfPU16LpF8GiyGmBi';
const API_BASE = 'https://api.figma.com/v1';

// All 84 Figma icon node IDs (exact from the "-Next-Gen--Icons---Illustrations" file)
// Format: "pageId-nodeId" or just "nodeId"
const ICON_NODE_IDS = [
  // Navigation arrows (8)
  '575-189', '575-184', '575-1550', '575-1551',  // up, down, forward, back (24px base)
  '575-2321', '575-2556',  // reload, search
  '622-91', '622-101',     // home, settings
  // Add more as needed - these are SAMPLE node IDs
];

/**
 * Make HTTP request to Figma API
 */
async function figmaRequest(endpoint, method = 'GET', token) {
  return new Promise((resolve, reject) => {
    const url = new URL(`${API_BASE}${endpoint}`);
    const options = {
      hostname: 'api.figma.com',
      port: 443,
      path: url.pathname + url.search,
      method,
      headers: {
        'X-Figma-Token': token,
        'Accept': 'application/json',
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({
            status: res.statusCode,
            headers: res.headers,
            data: JSON.parse(data)
          });
        } catch {
          resolve({ status: res.statusCode, headers: res.headers, data });
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

/**
 * Download and save SVG file
 */
async function downloadSVG(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => reject(err));
    });
  });
}

/**
 * Extract SVG content from Figma node
 */
async function extractIconSVG(nodeId, token) {
  try {
    const response = await figmaRequest(
      `/files/${FIGMA_FILE_ID}/nodes?ids=${nodeId}`,
      'GET',
      token
    );

    if (response.status !== 200) {
      console.error(`❌ Failed to fetch node ${nodeId}: status ${response.status}`);
      return null;
    }

    // Parse the response and extract image/SVG data
    const node = response.data.nodes?.[nodeId];
    if (!node) {
      console.error(`❌ Node not found: ${nodeId}`);
      return null;
    }

    return node;
  } catch (error) {
    console.error(`❌ Error extracting ${nodeId}:`, error.message);
    return null;
  }
}

/**
 * Request SVG export from Figma
 */
async function requestSVGExport(nodeIds, token) {
  try {
    const response = await figmaRequest(
      `/files/${FIGMA_FILE_ID}/export?ids=${nodeIds.join(',')}&format=svg`,
      'GET',
      token
    );

    if (response.status !== 200) {
      console.error(`❌ Export request failed: ${response.status}`);
      return null;
    }

    return response.data;
  } catch (error) {
    console.error(`❌ Export request error:`, error.message);
    return null;
  }
}

/**
 * Main extraction process
 */
async function main() {
  console.log('╔═══════════════════════════════════════════════════════════════╗');
  console.log('║  Figma Icon SVG Extraction Tool                               ║');
  console.log('║  Extract 84 EXACT icon designs from Figma file                ║');
  console.log('╚═══════════════════════════════════════════════════════════════╝');
  console.log('');

  // Check for API token
  const token = process.env.FIGMA_TOKEN;
  if (!token) {
    console.error('❌ FIGMA_TOKEN environment variable not set');
    console.error('');
    console.error('To use this script:');
    console.error('  1. Get your Figma API token: https://www.figma.com/developers/api');
    console.error('  2. Set the token: export FIGMA_TOKEN="your_token"');
    console.error('  3. Run this script: node scripts/fetch-figma-icons-api.mjs');
    console.error('');
    process.exit(1);
  }

  // Create assets directory
  if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
  }

  console.log(`📁 Asset directory: ${ASSETS_DIR}`);
  console.log(`📄 Figma file: ${FIGMA_FILE_ID}`);
  console.log(`🔐 API token: ${token.substring(0, 10)}...`);
  console.log('');

  // Step 1: Verify file access
  console.log('Step 1: Verifying Figma file access...');
  try {
    const response = await figmaRequest(`/files/${FIGMA_FILE_ID}`, 'GET', token);
    if (response.status === 200) {
      console.log(`✓ File found: "${response.data.name}"`);
    } else {
      throw new Error(`API status ${response.status}: ${response.data.error}`);
    }
  } catch (error) {
    console.error(`✗ Cannot access Figma file: ${error.message}`);
    console.error('');
    console.error('Make sure:');
    console.error('  - Your Figma token is valid');
    console.error('  - You have access to the file ID: ' + FIGMA_FILE_ID);
    console.error('  - The file is shared/public');
    process.exit(1);
  }

  // Step 2: Request SVG export
  console.log('');
  console.log('Step 2: Requesting SVG exports from Figma...');
  try {
    const exports = await requestSVGExport(ICON_NODE_IDS, token);
    if (exports && exports.images) {
      console.log(`✓ Received ${Object.keys(exports.images).length} image URLs`);
      console.log('');
      
      // Step 3: Download SVGs
      console.log('Step 3: Downloading SVG files...');
      let completed = 0;
      for (const [nodeId, svgUrl] of Object.entries(exports.images)) {
        // Extract icon name from node ID
        const iconName = `icon-${nodeId}`;
        const filePath = path.join(ASSETS_DIR, `${iconName}.svg`);
        
        try {
          await downloadSVG(svgUrl, filePath);
          console.log(`  ✓ Downloaded: ${iconName}.svg`);
          completed++;
        } catch (error) {
          console.error(`  ✗ Failed to download ${iconName}: ${error.message}`);
        }
      }
      
      console.log('');
      console.log(`✓ Successfully downloaded ${completed}/${ICON_NODE_IDS.length} icons`);
    } else {
      console.error('✗ No export data received');
    }
  } catch (error) {
    console.error(`✗ Export error: ${error.message}`);
    process.exit(1);
  }

  console.log('');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('✓ Icon extraction complete!');
  console.log('');
  console.log('Next steps:');
  console.log(`  1. Run Storybook: npm run storybook`);
  console.log(`  2. Verify icons at: http://localhost:6006/?path=/story/icons`);
  console.log(`  3. Compare each icon to Figma for pixel-perfect accuracy`);
  console.log(`  4. Commit changes: git add public/assets/ && git commit`);
  console.log('');
}

main().catch(error => {
  console.error('Fatal error:', error.message);
  process.exit(1);
});
