# Hero Section - Setup & Implementation Guide

## Overview

This is a professional, fully responsive hero section for your portfolio website built with React, HTML, CSS, and JavaScript. The component follows your Figma design specifications exactly and is optimized for all devices (desktop, tablet, mobile).

## Project Structure

```
C:\PORTFOLIO\
├── index.html                    # Main HTML entry point
├── src/
│   ├── main.jsx                  # React entry point
│   ├── App.jsx                   # Main App component
│   ├── App.css                   # Global app styles
│   ├── index.css                 # Global styles & font imports
│   └── components/
│       ├── Hero.jsx              # Hero section component
│       └── Hero.css              # Hero section styles
├── package.json                  # Project dependencies
└── vite.config.js               # Vite configuration (if using Vite)
```

## Features

✅ **Fully Responsive Design**
- Desktop (1280px+)
- Tablet (768px - 1024px)
- Mobile (390px - 767px)
- Small mobile (320px - 389px)

✅ **Clean, Professional Code**
- Semantic HTML
- BEM naming conventions in CSS
- Modular React component structure
- Accessibility best practices (ARIA labels, focus states)

✅ **Performance Optimized**
- CSS Variables for easy theming
- Minimal re-renders
- Optimized media queries
- Smooth animations with reduced motion support

✅ **Design System Compliant**
- All colors match Figma specifications
- All typography matches design tokens
- All spacing and sizing exact to design
- Interactive hover states

## Color Palette

```
Primary Background:    #1B1512
Text Primary:          #F3EFEB
Text Secondary:        #C2BEBA
Button Background:     #5D0606
Button Hover:          #7A0707
Border Color:          #F3EEE8
Border Alpha (20%):    rgba(243, 238, 232, 0.2)
```

## Typography

```
Logo Font:             Fraunces (Semibold 24px desktop, 19.2px mobile)
Navigation Font:       Be Vietnam Pro (Medium, 16px)
Display Text Font:     Poppins (Extra Bold 48px desktop, 32px mobile)
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Install Required Fonts

The project imports Google Fonts automatically in `index.css`:
- Poppins
- Be Vietnam Pro
- Fraunces

### 3. Run Development Server

**With Vite:**
```bash
npm run dev
```

**With Create React App:**
```bash
npm start
```

## Adding Your Videos

The hero section has 3 video containers ready for your looped video content. Here's how to add your videos:

### Step 1: Place Your Video Files

Store your video files in the `public/videos/` directory:
```
public/
└── videos/
    ├── video1.mp4
    ├── video2.mp4
    └── video3.mp4
```

### Step 2: Update the Hero Component

Edit `src/components/Hero.jsx` and replace the video placeholders with actual video elements:

```jsx
// For Video 1
<div className="video-wrapper video-1">
  <video 
    autoPlay 
    loop 
    muted 
    playsInline
    className="video-element"
  >
    <source src="/videos/video1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

// For Video 2
<div className="video-wrapper video-2">
  <video 
    autoPlay 
    loop 
    muted 
    playsInline
    className="video-element"
  >
    <source src="/videos/video2.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

// For Video 3
<div className="video-wrapper video-3">
  <video 
    autoPlay 
    loop 
    muted 
    playsInline
    className="video-element"
  >
    <source src="/videos/video3.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
```

### Step 3: Add Video Element Styles

Add this to `src/components/Hero.css`:

```css
.video-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
```

## Video Specifications

Based on your Figma design:

### Video 1 (Desktop)
- Width: 183.6px
- Height: 125.28px
- Border Radius: 105.5px
- Border: 10.66px solid rgba(243, 238, 232, 0.2)

### Video 2 (Desktop)
- Width: 172.5px
- Height: 120.75px
- Border Radius: 85.5px
- Border: 10.66px solid rgba(243, 238, 232, 0.2)

### Video 3 (Desktop)
- Width: 150.66px
- Height: 48.63px
- Border Radius: 105.5px
- Border: 10.66px solid rgba(243, 238, 232, 0.2)

**Mobile Sizes:**
- Video 1: 122.09px × 83.81px
- Video 2: 114.71px × 80.3px
- Video 3: 100.19px × 32.32px

## Using GIFs Instead of Videos

If you prefer to use GIF files instead of videos, simply replace the `<video>` tags with `<img>` tags:

```jsx
<div className="video-wrapper video-1">
  <img 
    src="/videos/video1.gif" 
    alt="Animated component demo" 
    className="video-element"
  />
</div>
```

## Customization Guide

### Change Colors

Update the CSS variables in `src/components/Hero.css`:

```css
:root {
  --color-bg: #1b1512;              /* Background */
  --color-text-primary: #f3efeb;    /* Primary text */
  --color-text-secondary: #c2beba;  /* Secondary text */
  --color-button-bg: #5d0606;       /* Button background */
  --color-border: #f3eee8;          /* Border color */
}
```

### Change Typography

Update font imports in `src/index.css` by modifying the Google Fonts import URL.

### Adjust Spacing

All spacing values are in the CSS files. Use the responsive sections (`@media` queries) to customize breakpoints.

### Change Button Text

Edit the text content in `src/components/Hero.jsx`:

```jsx
<button className="btn-primary">Your Custom Text</button>
<button className="btn-secondary">Your Custom Text</button>
```

### Change Display Text

The main headline is in the `.display-text` class:

```jsx
<h1 className="display-text">
  Your custom headline here
</h1>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

```
Desktop:      1280px and up
Tablet:       768px - 1024px
Mobile:       390px - 767px
Small Mobile: 320px - 389px
```

## Accessibility Features

✅ Semantic HTML (`<header>`, `<section>`, `<nav>`)
✅ ARIA labels on interactive elements
✅ Focus management for keyboard navigation
✅ High contrast colors (WCAG AA compliant)
✅ Reduced motion support (`prefers-reduced-motion`)
✅ Screen reader friendly

## Performance Tips

1. **Optimize Video Files**
   - Use MP4 format for better compatibility
   - Compress videos to reduce file size
   - Use appropriate resolution (no larger than needed)

2. **Lazy Loading**
   Consider implementing lazy loading for videos:
   ```jsx
   <video loading="lazy" ... />
   ```

3. **Preload Strategy**
   Use `preload="metadata"` for faster page load:
   ```jsx
   <video preload="metadata" ... />
   ```

## Mobile Menu Behavior

The mobile menu automatically toggles when the screen is 768px or smaller. It:
- Slides down smoothly
- Covers the content area
- Includes all navigation links
- Has the same styling as desktop links

## Build & Deployment

### With Vite:
```bash
npm run build
# Output will be in `dist/` folder
```

### Deploy to Vercel/Netlify:
```bash
# Vercel
vercel

# Netlify
netlify deploy --prod --dir=dist
```

## Troubleshooting

**Videos not showing?**
- Check file paths in `src`
- Ensure video files are in `public/videos/`
- Check browser console for CORS errors

**Styles not applying?**
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild the project
- Check that CSS files are imported in main.jsx

**Mobile menu not working?**
- Ensure JavaScript is enabled
- Check browser DevTools for console errors
- Verify responsive breakpoints in CSS

**Fonts not loading?**
- Check internet connection
- Verify Google Fonts URL in index.css
- Use fallback system fonts

## Need Help?

Refer to the component files:
- `Hero.jsx` - Component structure and logic
- `Hero.css` - All styling and responsive design
- `App.jsx` - How to implement the component

All code is fully commented and follows React best practices.

---

**Created with ❤️ for your portfolio**
