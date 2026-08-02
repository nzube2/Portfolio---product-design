# Hero Section - Video Integration Guide

## Quick Start

Once you have your video files ready, follow these simple steps to integrate them into your hero section.

## Step-by-Step Video Integration

### 1. Prepare Your Video Files

Before adding videos, ensure they are:
- **Format:** MP4 (best browser compatibility), WebM, or OGG
- **Codec:** H.264 for MP4
- **Audio:** Muted (videos will auto-play silently)
- **Size:** Keep file sizes under 5MB for optimal loading
  - Video 1 & 2: ~2-3MB
  - Video 3: ~1-2MB

**Recommended Compression:**
```bash
# Using FFmpeg (if installed)
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset fast output.mp4
```

### 2. Add Video Files to Project

Create a `videos` folder in your public directory:

```
C:\PORTFOLIO\
├── public/
│   └── videos/
│       ├── video1.mp4
│       ├── video2.mp4
│       └── video3.mp4
```

### 3. Update the Hero Component

Open `src/components/Hero.jsx` and find the video wrapper sections. Replace the placeholder divs with video elements.

**Current Placeholder:**
```jsx
<div className="video-wrapper video-1">
  <div className="video-placeholder">
    <span className="video-label">Video 1</span>
  </div>
</div>
```

**Replace With:**
```jsx
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
```

**Do this for all three videos:**

```jsx
// Video 2
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

// Video 3
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

### 4. Add Video Styling

Add this CSS to `src/components/Hero.css` (add it after the `.component-label` style):

```css
/* ============================================================================
   VIDEO ELEMENTS
   ============================================================================ */

.video-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: inherit;
}
```

### 5. Remove Placeholder Styles (Optional)

If you want to clean up, you can remove these styles from `Hero.css`:

```css
/* Delete these if adding real videos */
.video-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(93, 6, 6, 0.1),
    rgba(243, 238, 232, 0.05)
  );
}

.video-label {
  font-size: 14px;
  color: var(--color-text-secondary);
  font-weight: var(--weight-medium);
}
```

## Video Attributes Explained

```jsx
<video 
  autoPlay          // Plays automatically when page loads
  loop              // Restarts from beginning when finished
  muted             // No audio (required for autoPlay in most browsers)
  playsInline       // Important for mobile Safari - plays inline instead of fullscreen
  className="video-element"
>
  <source src="/videos/video1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## Using GIF Files Instead

If you prefer animated GIFs, replace the video code with:

```jsx
<div className="video-wrapper video-1">
  <img 
    src="/videos/animation1.gif" 
    alt="Component animation demo 1" 
    className="video-element"
  />
</div>
```

## Fallback Strategy (Multiple Formats)

For better browser support, provide multiple video formats:

```jsx
<video 
  autoPlay 
  loop 
  muted 
  playsInline
  className="video-element"
>
  <source src="/videos/video1.webm" type="video/webm" />
  <source src="/videos/video1.mp4" type="video/mp4" />
  <source src="/videos/video1.ogv" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

## Performance Optimization

### 1. Lazy Load Videos (Optional)

For better initial page performance:

```jsx
<video 
  loading="lazy"
  autoPlay 
  loop 
  muted 
  playsInline
  className="video-element"
>
  <source src="/videos/video1.mp4" type="video/mp4" />
</video>
```

### 2. Preload Strategy

```jsx
<video 
  preload="metadata"  // 'none', 'metadata', or 'auto'
  autoPlay 
  loop 
  muted 
  playsInline
  className="video-element"
>
  <source src="/videos/video1.mp4" type="video/mp4" />
</video>
```

Options:
- `none` - Don't preload (smallest initial load)
- `metadata` - Load video dimensions and duration only (recommended)
- `auto` - Preload entire video (largest initial load)

### 3. Add a Poster Image (Placeholder)

Shows a still image before video loads:

```jsx
<video 
  poster="/images/video1-poster.jpg"
  autoPlay 
  loop 
  muted 
  playsInline
  className="video-element"
>
  <source src="/videos/video1.mp4" type="video/mp4" />
</video>
```

## Video Dimensions Reference

Your design specifies these sizes. The CSS already handles these automatically:

### Desktop
- Video 1: 183.6px × 125.28px (rounded 105.5px radius)
- Video 2: 172.5px × 120.75px (rounded 85.5px radius)
- Video 3: 150.66px × 48.63px (rounded 105.5px radius)

### Mobile
- Video 1: 122.09px × 83.81px
- Video 2: 114.71px × 80.3px
- Video 3: 100.19px × 32.32px

The `object-fit: cover` CSS property ensures videos scale properly without distortion.

## Testing Videos

### Check Video Plays Correctly
1. Run `npm run dev`
2. Open browser to `http://localhost:3000`
3. Verify videos autoplay and loop
4. Test on mobile device

### Common Issues & Fixes

**Video doesn't autoplay?**
```jsx
// Ensure muted attribute is present
<video autoPlay loop muted playsInline>
```

**Video doesn't show on mobile?**
```jsx
// Add playsInline for iOS
<video autoPlay loop muted playsInline>
```

**Video file not found (404)?**
- Check file path is correct
- Ensure file is in `public/videos/` folder
- Restart dev server after adding files

**Video doesn't fill container?**
```css
.video-element {
  width: 100%;
  height: 100%;
  object-fit: cover;  /* This ensures it fills the container */
}
```

## Mobile Testing

Test on real devices:
- **iOS:** Use Safari or Chrome. Ensure `playsInline` attribute is set
- **Android:** Test in Chrome. Videos should work normally
- **Desktop:** Test in Chrome, Firefox, Safari

## Browser Compatibility

Video format support:

| Browser | MP4 | WebM | Ogg |
|---------|-----|------|-----|
| Chrome  | ✅  | ✅   | ✅  |
| Firefox | ✅  | ✅   | ✅  |
| Safari  | ✅  | ❌   | ❌  |
| Edge    | ✅  | ✅   | ✅  |
| iOS     | ✅  | ❌   | ❌  |

**Recommendation:** Use MP4 as primary format for best compatibility.

## Accessibility

Add `aria-label` for screen readers:

```jsx
<video 
  autoPlay 
  loop 
  muted 
  playsInline
  className="video-element"
  aria-label="Animated demonstration of component functionality"
>
  <source src="/videos/video1.mp4" type="video/mp4" />
</video>
```

## Next Steps

1. ✅ Prepare your video files (optimize size, format to MP4)
2. ✅ Create `public/videos/` folder
3. ✅ Add video files to the folder
4. ✅ Update `src/components/Hero.jsx` with video elements
5. ✅ Add `.video-element` CSS styling
6. ✅ Test on desktop and mobile
7. ✅ Optimize performance if needed

## Resources

- [MDN: HTML Video Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [Video Codec Comparison](https://www.adobe.com/creativecloud/video/discover/video-codec.html)
- [FFmpeg Guide](https://ffmpeg.org/)

---

**Happy video integration! 🎬**
