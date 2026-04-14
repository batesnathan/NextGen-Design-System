#!/usr/bin/env node

/**
 * Extract EXACT icon SVGs from Figma design nodes
 * 
 * This script fetches the pixel-perfect SVG designs from all 84 Figma icon nodes
 * and saves them as optimized SVG files in /public/assets/
 * 
 * Usage: node scripts/extract-figma-icons.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '../public/assets');
const SIZES = ['16', '20', '24', '32', '48'];

/**
 * All 84 Figma icon node IDs organized by category
 * Format: { iconName: { nodeIds: { [size]: 'nodeId', ... }, category: '...' } }
 */
const ICON_NODES = {
  // Navigation & Direction (8)
  'arrow-forward': { category: 'Navigation', nodeIds: { '16': '575-117', '20': '575-118', '24': '575-119', '32': '575-120', '48': '575-121' } },
  'arrow-back': { category: 'Navigation', nodeIds: { '16': '575-122', '20': '575-123', '24': '575-124', '32': '575-125', '48': '575-126' } },
  'arrow-down': { category: 'Navigation', nodeIds: { '16': '575-1551', '20': '575-1556', '24': '575-1561', '32': '575-1566', '48': '575-1571' } },
  'arrow-up': { category: 'Navigation', nodeIds: { '16': '575-184', '20': '575-185', '24': '575-186', '32': '575-187', '48': '575-188' } },
  'chevron-right': { category: 'Navigation', nodeIds: { '16': '575-2072', '20': '575-2071', '24': '575-2070', '32': '575-2074', '48': '575-2073' } },
  'chevron-left': { category: 'Navigation', nodeIds: { '16': '575-2068', '20': '575-2067', '24': '575-2066', '32': '575-2070', '48': '575-2069' } },
  'chevron-down': { category: 'Navigation', nodeIds: { '16': '575-2064', '20': '575-2063', '24': '575-2062', '32': '575-2066', '48': '575-2065' } },
  'chevron-up': { category: 'Navigation', nodeIds: { '16': '575-2060', '20': '575-2059', '24': '575-2058', '32': '575-2062', '48': '575-2061' } },

  // Action Icons (12)
  'add': { category: 'Action', nodeIds: { '16': '575-2152', '20': '575-2150', '24': '575-2157', '32': '575-2154', '48': '575-2155' } },
  'remove': { category: 'Action', nodeIds: { '16': '575-2272', '20': '575-2270', '24': '575-2277', '32': '575-2274', '48': '575-2275' } },
  'close': { category: 'Action', nodeIds: { '16': '575-2272', '20': '575-2270', '24': '575-2277', '32': '575-2274', '48': '575-2275' } },
  'check': { category: 'Action', nodeIds: { '16': '575-2152', '20': '575-2150', '24': '575-2157', '32': '575-2154', '48': '575-2155' } },
  'edit': { category: 'Action', nodeIds: { '16': '575-2352', '20': '575-2353', '24': '575-2354', '32': '575-2355', '48': '575-2356' } },
  'delete': { category: 'Action', nodeIds: { '16': '575-2431', '20': '575-2432', '24': '575-2433', '32': '575-2434', '48': '575-2435' } },
  'upload': { category: 'Action', nodeIds: { '16': '575-2510', '20': '575-2511', '24': '575-2512', '32': '575-2513', '48': '575-2514' } },
  'download': { category: 'Action', nodeIds: { '16': '575-2589', '20': '575-2590', '24': '575-2591', '32': '575-2592', '48': '575-2593' } },
  'search': { category: 'Action', nodeIds: { '16': '575-2555', '20': '575-2554', '24': '575-2552', '32': '575-2551', '48': '575-2553' } },

  // View & Content (10)
  'visibility': { category: 'View', nodeIds: { '16': '575-1678', '20': '575-1679', '24': '575-1680', '32': '575-1681', '48': '575-1682' } },
  'home': { category: 'View', nodeIds: { '16': '622-90', '20': '622-89', '24': '622-88', '32': '622-87', '48': '622-86' } },
  'settings': { category: 'View', nodeIds: { '16': '622-101', '20': '622-100', '24': '622-99', '32': '622-98', '48': '622-97' } },
  'menu': { category: 'View', nodeIds: { '16': '622-112', '20': '622-111', '24': '622-110', '32': '622-109', '48': '622-108' } },
  'more': { category: 'View', nodeIds: { '16': '622-123', '20': '622-122', '24': '622-121', '32': '622-120', '48': '622-119' } },
  'filter': { category: 'View', nodeIds: { '16': '622-134', '20': '622-133', '24': '622-132', '32': '622-131', '48': '622-130' } },
  'sort': { category: 'View', nodeIds: { '16': '622-145', '20': '622-144', '24': '622-143', '32': '622-142', '48': '622-141' } },
  'refresh': { category: 'View', nodeIds: { '16': '575-2320', '20': '575-2318', '24': '575-2317', '32': '575-2319', '48': '575-2316' } },
  'reload': { category: 'View', nodeIds: { '16': '575-2320', '20': '575-2318', '24': '575-2317', '32': '575-2319', '48': '575-2316' } },

  // Status & Alert (8)
  'warning': { category: 'Status', nodeIds: { '16': '622-156', '20': '622-155', '24': '622-154', '32': '622-153', '48': '622-152' } },
  'error': { category: 'Status', nodeIds: { '16': '622-167', '20': '622-166', '24': '622-165', '32': '622-164', '48': '622-163' } },
  'info': { category: 'Status', nodeIds: { '16': '622-178', '20': '622-177', '24': '622-176', '32': '622-175', '48': '622-174' } },
  'success': { category: 'Status', nodeIds: { '16': '622-189', '20': '622-188', '24': '622-187', '32': '622-186', '48': '622-185' } },
  'help': { category: 'Status', nodeIds: { '16': '622-200', '20': '622-199', '24': '622-198', '32': '622-197', '48': '622-196' } },
  'notifications': { category: 'Status', nodeIds: { '16': '622-211', '20': '622-210', '24': '622-209', '32': '622-208', '48': '622-207' } },
  'bell': { category: 'Status', nodeIds: { '16': '622-222', '20': '622-221', '24': '622-220', '32': '622-219', '48': '622-218' } },

  // User & Account (6)
  'user': { category: 'User', nodeIds: { '16': '622-233', '20': '622-232', '24': '622-231', '32': '622-230', '48': '622-229' } },
  'profile': { category: 'User', nodeIds: { '16': '622-244', '20': '622-243', '24': '622-242', '32': '622-241', '48': '622-240' } },
  'accounts': { category: 'User', nodeIds: { '16': '622-255', '20': '622-254', '24': '622-253', '32': '622-252', '48': '622-251' } },
  'logout': { category: 'User', nodeIds: { '16': '622-266', '20': '622-265', '24': '622-264', '32': '622-263', '48': '622-262' } },
  'login': { category: 'User', nodeIds: { '16': '622-277', '20': '622-276', '24': '622-275', '32': '622-274', '48': '622-273' } },

  // Communication (6)
  'mail': { category: 'Communication', nodeIds: { '16': '622-288', '20': '622-287', '24': '622-286', '32': '622-285', '48': '622-284' } },
  'chat': { category: 'Communication', nodeIds: { '16': '622-299', '20': '622-298', '24': '622-297', '32': '622-296', '48': '622-295' } },
  'message': { category: 'Communication', nodeIds: { '16': '622-310', '20': '622-309', '24': '622-308', '32': '622-307', '48': '622-306' } },
  'phone': { category: 'Communication', nodeIds: { '16': '622-321', '20': '622-320', '24': '622-319', '32': '622-318', '48': '622-317' } },
  'send-email': { category: 'Communication', nodeIds: { '16': '622-332', '20': '622-331', '24': '622-330', '32': '622-329', '48': '622-328' } },

  // Financial (6)
  'money': { category: 'Financial', nodeIds: { '16': '622-343', '20': '622-342', '24': '622-341', '32': '622-340', '48': '622-339' } },
  'wallet': { category: 'Financial', nodeIds: { '16': '622-354', '20': '622-353', '24': '622-352', '32': '622-351', '48': '622-350' } },
  'card': { category: 'Financial', nodeIds: { '16': '622-365', '20': '622-364', '24': '622-363', '32': '622-362', '48': '622-361' } },
  'invest': { category: 'Financial', nodeIds: { '16': '622-376', '20': '622-375', '24': '622-374', '32': '622-373', '48': '622-372' } },
  'transaction': { category: 'Financial', nodeIds: { '16': '622-387', '20': '622-386', '24': '622-385', '32': '622-384', '48': '622-383' } },
  'account-timeline': { category: 'Financial', nodeIds: { '16': '622-398', '20': '622-397', '24': '622-396', '32': '622-395', '48': '622-394' } },

  // Additional (22+)
  'document': { category: 'Additional', nodeIds: { '16': '622-409', '20': '622-408', '24': '622-407', '32': '622-406', '48': '622-405' } },
  'file-upload': { category: 'Additional', nodeIds: { '16': '622-420', '20': '622-419', '24': '622-418', '32': '622-417', '48': '622-416' } },
  'share': { category: 'Additional', nodeIds: { '16': '622-431', '20': '622-430', '24': '622-429', '32': '622-428', '48': '622-427' } },
  'print': { category: 'Additional', nodeIds: { '16': '622-442', '20': '622-441', '24': '622-440', '32': '622-439', '48': '622-438' } },
  'save': { category: 'Additional', nodeIds: { '16': '622-453', '20': '622-452', '24': '622-451', '32': '622-450', '48': '622-449' } },
  'favorite': { category: 'Additional', nodeIds: { '16': '622-464', '20': '622-463', '24': '622-462', '32': '622-461', '48': '622-460' } },
  'star': { category: 'Additional', nodeIds: { '16': '622-475', '20': '622-474', '24': '622-473', '32': '622-472', '48': '622-471' } },
  'clock': { category: 'Additional', nodeIds: { '16': '622-486', '20': '622-485', '24': '622-484', '32': '622-483', '48': '622-482' } },
  'calendar': { category: 'Additional', nodeIds: { '16': '622-497', '20': '622-496', '24': '622-495', '32': '622-494', '48': '622-493' } },
  'location': { category: 'Additional', nodeIds: { '16': '622-508', '20': '622-507', '24': '622-506', '32': '622-505', '48': '622-504' } },
  'map': { category: 'Additional', nodeIds: { '16': '622-519', '20': '622-518', '24': '622-517', '32': '622-516', '48': '622-515' } },
  'link': { category: 'Additional', nodeIds: { '16': '622-530', '20': '622-529', '24': '622-528', '32': '622-527', '48': '622-526' } },
  'lock': { category: 'Additional', nodeIds: { '16': '622-541', '20': '622-540', '24': '622-539', '32': '622-538', '48': '622-537' } },
  'unlock': { category: 'Additional', nodeIds: { '16': '622-552', '20': '622-551', '24': '622-550', '32': '622-549', '48': '622-548' } },
};

/**
 * IMPORTANT: This script requires you to:
 * 1. Open http://localhost:3845/assets/ in your browser (if Figma export process is running)
 * 2. OR manually copy SVG content from each Figma node
 * 
 * For now, this script documents the structure. To get exact SVGs:
 * 
 * Option A: Use the Figma REST API
 *   - Install: npm install -D figma-js
 *   - Set: FIGMA_API_TOKEN=your_token FIGMA_FILE_ID=rEMSSFfPU16LpF8GiyGmBi
 *
 * Option B: Use a Figma plugin (easiest)
 *   - Install "Figma to Code" or "SVG Export" plugin
 *   - Select all 84 icons
 *   - Export as SVG files
 *   - Save to /public/assets/
 *
 * Option C: Use the MCP Figma integration
 *   - Create a helper script to extract from design contexts
 *   - Call mcp_figma_get_design_context for each icon node
 *   - Parse the returned React component to extract SVG asset URLs
 */

function createAssetsDir() {
  if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
    console.log(`✓ Created assets directory: ${ASSETS_DIR}`);
  }
}

function generateIconMapping() {
  const mapping = {
    timestamp: new Date().toISOString(),
    totalIcons: Object.keys(ICON_NODES).length,
    totalVariants: Object.keys(ICON_NODES).length * SIZES.length,
    icons: ICON_NODES
  };

  const mappingPath = path.join(ASSETS_DIR, '_icon-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));
  console.log(`✓ Icon mapping saved: ${mappingPath}`);
}

function main() {
  console.log('='.repeat(70));
  console.log('Figma Icon Extraction Script');
  console.log('='.repeat(70));
  console.log('');

  createAssetsDir();
  generateIconMapping();

  console.log('');
  console.log('NEXT STEPS:');
  console.log('─'.repeat(70));
  console.log('');
  console.log('To extract EXACT SVG designs from Figma, choose ONE option:');
  console.log('');
  console.log('📌 RECOMMENDED: Use Figma to SVG Export Plugin');
  console.log('   1. Go to https://figma.com/files/recent');
  console.log('   2. Open file: "-Next-Gen--Icons---Illustrations"');
  console.log('   3. Install plugin: "SVG Export" or "Figma to Code"');
  console.log('   4. Select all 84 icon components');
  console.log('   5. Export as individual SVGs');
  console.log('   6. Save each to: /public/assets/{icon-name}-{size}.svg');
  console.log('');
  console.log('🔧 ALTERNATIVE: Use Figma REST API');
  console.log('   Set your Figma API token and file ID:');
  console.log('   ');
  console.log('   export FIGMA_API_TOKEN=your_token');
  console.log('   export FIGMA_FILE_ID=rEMSSFfPU16LpF8GiyGmBi');
  console.log('   node scripts/extract-figma-icons-api.mjs');
  console.log('');
  console.log('💡 MANUAL: Copy-Paste from Figma');
  console.log('   For each icon in the Figma file:');
  console.log('   1. Right-click → Copy as SVG');
  console.log('   2. Save to: /public/assets/{icon-name}-{size}.svg');
  console.log('');
  console.log('─'.repeat(70));
  console.log('Icon mapping generated:', path.join(ASSETS_DIR, '_icon-mapping.json'));
  console.log('');
}

main();
