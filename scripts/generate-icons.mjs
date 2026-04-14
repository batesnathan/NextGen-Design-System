#!/usr/bin/env node
/**
 * Generate icon SVG files from icon definitions
 * Creates SVG files in public/assets for all icon sizes
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '../public/assets');

// Ensure directory exists
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Icon definitions with SVG paths
const icons = {
  'arrow-forward': {
    path: 'M7 10h10M13 6l4 4-4 4',
    viewBox: '0 0 24 24',
  },
  'arrow-back': {
    path: 'M17 10H7M11 6L7 10l4 4',
    viewBox: '0 0 24 24',
  },
  'arrow-down': {
    path: 'M12 5v10M8 11l4 4 4-4',
    viewBox: '0 0 24 24',
  },
  'arrow-up': {
    path: 'M12 19V9M8 13l4-4 4 4',
    viewBox: '0 0 24 24',
  },
  'chevron-right': {
    path: 'M10 6l4 6-4 6',
    viewBox: '0 0 24 24',
  },
  'chevron-left': {
    path: 'M14 6l-4 6 4 6',
    viewBox: '0 0 24 24',
  },
  'chevron-down': {
    path: 'M6 9l6 4 6-4',
    viewBox: '0 0 24 24',
  },
  'chevron-up': {
    path: 'M6 15l6-4 6 4',
    viewBox: '0 0 24 24',
  },
  'add': {
    path: 'M12 5v14M5 12h14',
    viewBox: '0 0 24 24',
  },
  'remove': {
    path: 'M5 12h14',
    viewBox: '0 0 24 24',
  },
  'close': {
    path: 'M6 18l12-12M18 18L6 6',
    viewBox: '0 0 24 24',
  },
  'check': {
    path: 'M5 12l5 5 9-11',
    viewBox: '0 0 24 24',
  },
  'edit': {
    path: 'M3 17.25V21h3.75L17.81 9.94m-5.75-5.75L19.5 7.75m-10.5 0L3 17.25',
    viewBox: '0 0 24 24',
  },
  'delete': {
    path: 'M9 3v2H5v2h14V5h-4V3h-2v2h-2V3H9zM7 9h1v8H7V9zm3 0h1v8h-1V9zm3 0h1v8h-1V9z',
    viewBox: '0 0 24 24',
  },
  'upload': {
    path: 'M9 12l3-3 3 3M12 9v8m7-3H5',
    viewBox: '0 0 24 24',
  },
  'download': {
    path: 'M12 15l3-3 3 3M12 3v12m7 3H5',
    viewBox: '0 0 24 24',
  },
  'search': {
    path: 'M10 17a7 7 0 100-14 7 7 0 000 14zM21 21l-4.35-4.35',
    viewBox: '0 0 24 24',
  },
  'visibility': {
    path: 'M12 5C6 5 1.5 10 1.5 10s4.5 5 10.5 5 10.5-5 10.5-5-4.5-5-10.5-5zM12 15a5 5 0 100-10 5 5 0 000 10z',
    viewBox: '0 0 24 24',
  },
  'home': {
    path: 'M5 17v-5h2v5H5zM10 3L4 8v9h2v-7h12v7h2V8l-6-5zm0 0l6-5 6 5v9h-2v-7H12v7h-2V8z',
    viewBox: '0 0 24 24',
  },
  'settings': {
    path: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.33-.02-.64-.07-.94l1.72-1.34c.15-.12.19-.34.1-.51l-1.63-2.83c-.1-.17-.31-.24-.49-.17l-2.03.8c-.42-.32-.9-.6-1.42-.82L14.4 2.9c-.04-.21-.24-.36-.48-.36h-3.26c-.24 0-.43.15-.48.36l-.3 2.16c-.52.23-1 .51-1.42.82l-2.03-.8c-.18-.07-.39 0-.49.17l-1.63 2.83c-.1.17-.06.39.1.51l1.72 1.34c-.05.3-.07.61-.07.94s.02.64.07.94l-1.72 1.34c-.16.12-.2.34-.1.51l1.63 2.83c.1.17.31.24.49.17l2.03-.8c.42.32.9.6 1.42.82l.3 2.16c.05.21.24.36.48.36h3.26c.24 0 .44-.15.48-.36l.3-2.16c.52-.23 1-.51 1.42-.82l2.03.8c.18.07.39 0 .49-.17l1.63-2.83c.1-.17.06-.39-.1-.51l-1.72-1.34zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z',
    viewBox: '0 0 24 24',
  },
  'menu': {
    path: 'M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z',
    viewBox: '0 0 24 24',
  },
  'more': {
    path: 'M12 8c1.1 0 2-1.9 2-1.9s.9 1.9 2 1.9 2 .9 2 2-1.9 2-1.9 2 1.9.9 1.9 2-1.9.9-2 .9-2 1.1-2 1.1-.9-1.1-2-1.1s-1 1.1-2 1.1-.9-1.1-.9-2 1.1-2 1.1-2-1.1-.9-1.1-2 .9-2 2-2z',
    viewBox: '0 0 24 24',
  },
  'filter': {
    path: 'M3 6h18v2H3V6zm3 5h12v2H6v-2zm4 5h4v2h-4v-2z',
    viewBox: '0 0 24 24',
  },
  'sort': {
    path: 'M7 10l5 5 5-5',
    viewBox: '0 0 24 24',
  },
  'refresh': {
    path: 'M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z',
    viewBox: '0 0 24 24',
  },
  'reload': {
    path: 'M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z',
    viewBox: '0 0 24 24',
  },
  'warning': {
    path: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
    viewBox: '0 0 24 24',
  },
  'error': {
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
    viewBox: '0 0 24 24',
  },
  'info': {
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
    viewBox: '0 0 24 24',
  },
  'success': {
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    viewBox: '0 0 24 24',
  },
  'help': {
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75c-.9.9-1.42 2.26-1.39 3.54H11c-.03-1.6.53-3.12 1.75-4.35.73-.73 1.25-1.5 1.25-2.65 0-2.04-1.66-3.75-3.75-3.75S5.5 4.96 5.5 7h2c0-1.04.84-1.87 1.87-1.87 1.04 0 1.87.83 1.87 1.87 0 .55-.23 1.03-.75 1.55z',
    viewBox: '0 0 24 24',
  },
  'notifications': {
    path: 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z',
    viewBox: '0 0 24 24',
  },
  'bell': {
    path: 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.65-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.65 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2z',
    viewBox: '0 0 24 24',
  },
  'user': {
    path: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
    viewBox: '0 0 24 24',
  },
  'profile': {
    path: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
    viewBox: '0 0 24 24',
  },
  'accounts': {
    path: 'M16 13c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0-2c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2C5.34 14 2 15.34 2 17v3h12v-3c0-1.66-3.34-3-8-3z',
    viewBox: '0 0 24 24',
  },
  'logout': {
    path: 'M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z',
    viewBox: '0 0 24 24',
  },
  'login': {
    path: 'M10 17v-5h3V8H8v9h2zm10-5l-5-5v3H9v4h6v3l5-5z',
    viewBox: '0 0 24 24',
  },
  'mail': {
    path: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
    viewBox: '0 0 24 24',
  },
  'chat': {
    path: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z',
    viewBox: '0 0 24 24',
  },
  'message': {
    path: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z',
    viewBox: '0 0 24 24',
  },
  'phone': {
    path: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
    viewBox: '0 0 24 24',
  },
  'send-email': {
    path: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
    viewBox: '0 0 24 24',
  },
  'money': {
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h4v-2h-4v2zm6-7h-8v-2h8v2zm-6 4h4v-2h-4v2z',
    viewBox: '0 0 24 24',
  },
  'wallet': {
    path: 'M18 6h-2c0-2.66-2.24-4.75-5-4.75S6 3.34 6 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z',
    viewBox: '0 0 24 24',
  },
  'card': {
    path: 'M20 8H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H4v-6h16v6zm0-8H4v-2h16v2z',
    viewBox: '0 0 24 24',
  },
  'invest': {
    path: 'M3 13h2v8H3v-8zm4-8h2v16H7V5zm6-2h2v18h-2V3zm8 4h2v14h-2V7z',
    viewBox: '0 0 24 24',
  },
  'transaction': {
    path: 'M10 16.5l6-6m6 .5H8m6-8h8v8h-2V5h-6V3h2M4 21h12l4-4V9H4v12z',
    viewBox: '0 0 24 24',
  },
  'account-timeline': {
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
    viewBox: '0 0 24 24',
  },
  'document': {
    path: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6z',
    viewBox: '0 0 24 24',
  },
  'file-upload': {
    path: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z',
    viewBox: '0 0 24 24',
  },
  'share': {
    path: 'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.06c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z',
    viewBox: '0 0 24 24',
  },
  'print': {
    path: 'M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z',
    viewBox: '0 0 24 24',
  },
  'save': {
    path: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z',
    viewBox: '0 0 24 24',
  },
  'favorite': {
    path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
    viewBox: '0 0 24 24',
  },
  'star': {
    path: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21 12 17.27z',
    viewBox: '0 0 24 24',
  },
  'clock': {
    path: 'M11.99 5C6.47 5 2 9.48 2 15s4.47 10 9.99 10C17.52 10 22 15.48 22 15s-4.48 10-10.01 10zM15.5 15H14V9h-3v6h4.5z',
    viewBox: '0 0 24 24',
  },
  'calendar': {
    path: 'M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z',
    viewBox: '0 0 24 24',
  },
  'location': {
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11 10.07 7.5 12 7.5s3.5 1.57 3.5 3.5z',
    viewBox: '0 0 24 24',
  },
  'map': {
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
    viewBox: '0 0 24 24',
  },
  'link': {
    path: 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
    viewBox: '0 0 24 24',
  },
  'lock': {
    path: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h-4V12h4v-0.01z',
    viewBox: '0 0 24 24',
  },
  'unlock': {
    path: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h-4V12h4v-0.01z',
    viewBox: '0 0 24 24',
  },
};

// Generate SVG files for each icon in multiple sizes
const sizes = [16, 20, 24, 32, 48];

Object.entries(icons).forEach(([iconName, { path: iconPath, viewBox }]) => {
  sizes.forEach((size) => {
    const filename = `${iconName}-${size}.svg`;
    const filePath = path.join(assetsDir, filename);
    
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${size}" height="${size}" fill="currentColor">
  <path d="${iconPath}" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    
    try {
      fs.writeFileSync(filePath, svg);
      console.log(`✓ Created ${filename}`);
    } catch (err) {
      console.error(`✗ Failed to create ${filename}:`, err);
    }
  });
});

console.log(`\n✓ Generated SVG files for ${Object.keys(icons).length} icons in ${sizes.length} sizes`);
