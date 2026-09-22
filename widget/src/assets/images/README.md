# Erudit Widget - Image Assets

## Required Assets

Place the following image files in `src/assets/images/`:

### Character Images
- **erudit.png** - Full character illustration for WelcomeScreen hero section (180x180px recommended)
- **erudit-avatar.png** - Avatar version for AvatarButton and ChatScreen (64x64px recommended)

### Category Icons
- **admission.svg** - Admission/enrollment icon
- **specialties.svg** - Specialties/programs icon
- **schedule.svg** - Schedule/timetable icon
- **documents.svg** - Documents icon
- **student-life.svg** - Student life icon
- **dormitory.svg** - Dormitory/housing icon

### Decorative Images
- **college-building.png** - College building image for WelcomeScreen footer

## Current State

Currently using transparent placeholder images. Once you add the actual image files to `src/assets/images/`, update the imports in `src/assets/images/placeholders.ts` to use real assets:

```typescript
// Replace placeholders with actual imports
import eruditPng from './erudit.png';
import eruditAvatarPng from './erudit-avatar.png';
// ... etc

export const eruditImage = eruditPng;
export const eruditAvatar = eruditAvatarPng;
// ... etc
```

## Notes

- All character images must depict the same Erudit character for consistency
- SVG format preferred for icons (scalable, small file size)
- PNG format with transparency recommended for character images
- Optimize images before adding to reduce bundle size
