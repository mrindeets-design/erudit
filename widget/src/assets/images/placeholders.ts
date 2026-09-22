// IMPORTANT: Replace erudit-avatar.png with the actual image from the third provided file
// The current file is a transparent placeholder (400x400px)
// Save the real avatar image (character with blue graduation cap, gold glasses, and book) as:
// src/assets/images/erudit-avatar.png

// Import the avatar image
import eruditAvatarImg from './erudit-avatar.png';

// Temporary SVG placeholders for category icons until real icons are provided
const graduationCapIcon = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M24 14L8 20L24 26L40 20L24 14Z" fill="#003D7A" stroke="#003D7A" stroke-width="2" stroke-linejoin="round"/>
  <path d="M12 24V30C12 32 16 34 24 34C32 34 36 32 36 30V24" stroke="#003D7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`)}`;

const starIcon = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M24 10L27 20H37L29 26L32 36L24 30L16 36L19 26L11 20H21L24 10Z" fill="#003D7A" stroke="#003D7A" stroke-width="2" stroke-linejoin="round"/>
</svg>
`)}`;

const calendarIcon = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <rect x="10" y="12" width="28" height="26" rx="2" fill="none" stroke="#003D7A" stroke-width="2"/>
  <path d="M10 18H38" stroke="#003D7A" stroke-width="2"/>
  <path d="M17 10V14M31 10V14" stroke="#003D7A" stroke-width="2" stroke-linecap="round"/>
  <circle cx="18" cy="24" r="1.5" fill="#003D7A"/>
  <circle cx="24" cy="24" r="1.5" fill="#003D7A"/>
  <circle cx="30" cy="24" r="1.5" fill="#003D7A"/>
  <circle cx="18" cy="30" r="1.5" fill="#003D7A"/>
  <circle cx="24" cy="30" r="1.5" fill="#003D7A"/>
  <circle cx="30" cy="30" r="1.5" fill="#003D7A"/>
</svg>
`)}`;

const documentIcon = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M14 10H28L36 18V38C36 39.1 35.1 40 34 40H14C12.9 40 12 39.1 12 38V12C12 10.9 12.9 10 14 10Z" fill="none" stroke="#003D7A" stroke-width="2"/>
  <path d="M28 10V18H36" stroke="#003D7A" stroke-width="2" stroke-linejoin="round"/>
  <path d="M18 26H30M18 30H30" stroke="#003D7A" stroke-width="2" stroke-linecap="round"/>
</svg>
`)}`;

const peopleIcon = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <circle cx="20" cy="18" r="5" fill="none" stroke="#003D7A" stroke-width="2"/>
  <path d="M11 36C11 31 15 28 20 28C25 28 29 31 29 36" stroke="#003D7A" stroke-width="2" stroke-linecap="round"/>
  <circle cx="32" cy="16" r="4" fill="none" stroke="#003D7A" stroke-width="2"/>
  <path d="M32 24C35 24 38 26 38 30" stroke="#003D7A" stroke-width="2" stroke-linecap="round"/>
</svg>
`)}`;

const buildingIcon = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <rect x="12" y="14" width="24" height="24" rx="2" fill="none" stroke="#003D7A" stroke-width="2"/>
  <path d="M12 38H36" stroke="#003D7A" stroke-width="2" stroke-linecap="round"/>
  <rect x="20" y="30" width="8" height="8" fill="none" stroke="#003D7A" stroke-width="2"/>
  <rect x="18" y="20" width="4" height="4" fill="none" stroke="#003D7A" stroke-width="1.5"/>
  <rect x="26" y="20" width="4" height="4" fill="none" stroke="#003D7A" stroke-width="1.5"/>
</svg>
`)}`;

// Placeholder for college building photo (use a subtle blue gradient as fallback)
const collegeBuildingPlaceholder = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#E8EFF7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#D0DEF0;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="400" fill="url(#grad)"/>
  <text x="400" y="200" font-family="Arial" font-size="24" fill="#003D7A" text-anchor="middle" opacity="0.3">
    Изображение колледжа
  </text>
</svg>
`)}`;

// Main character avatar - this should use the actual erudit-avatar.png file
export const eruditAvatar = eruditAvatarImg;
export const eruditImage = eruditAvatarImg; // Use same avatar for welcome screen hero

// Category icons
export const admissionIcon = graduationCapIcon;
export const specialtiesIcon = starIcon;
export const scheduleIcon = calendarIcon;
export const documentsIcon = documentIcon;
export const studentLifeIcon = peopleIcon;
export const dormitoryIcon = buildingIcon;

// Footer image
export const collegeBuilding = collegeBuildingPlaceholder;
