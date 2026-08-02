# Valentina - Product Designer Portfolio

> "I Design In Systems, Not Just Pixels – Product Designs That Feel Personal."

A professional, fully responsive hero section built with React, HTML, CSS, and JavaScript following your Figma design specifications exactly.

## ✨ Features

- **Fully Responsive** - Desktop, tablet, and mobile optimized
- **Modern React** - Clean component-based architecture
- **Accessible** - WCAG AA compliant with semantic HTML
- **Performance** - Optimized CSS, minimal re-renders, smooth animations
- **Video Ready** - Pre-configured spaces for looped video content
- **Design System** - Color tokens, typography scales, spacing system
- **Professional Code** - Well-documented, maintainable, scalable

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### 3. Add Your Videos
See [VIDEOS_GUIDE.md](./VIDEOS_GUIDE.md) for detailed instructions on integrating your video content.

## 📁 Project Structure

```
C:\PORTFOLIO\
├── index.html                    # HTML entry point
├── package.json                  # Dependencies & scripts
├── vite.config.js               # Vite config
├── .gitignore                   # Git ignore rules
├── README.md                    # This file
├── SETUP.md                     # Detailed setup guide
├── VIDEOS_GUIDE.md              # Video integration guide
├── src/
│   ├── main.jsx                 # React entry point
│   ├── index.css                # Global styles & fonts
│   ├── App.jsx                  # Main App component
│   ├── App.css                  # Global app styles
│   └── components/
│       ├── Hero.jsx             # Hero section component
│       └── Hero.css             # Hero section styles
└── public/
    └── videos/                  # (Create this folder for videos)
        ├── video1.mp4
        ├── video2.mp4
        └── video3.mp4
```

## 🎨 Design Specifications

### Colors
- **Background**: #1B1512
- **Text Primary**: #F3EFEB
- **Text Secondary**: #C2BEBA
- **Button**: #5D0606
- **Borders**: #F3EEE8 (with 20% alpha)

### Typography
- **Logo**: Fraunces (Semibold, 24px desktop / 19.2px mobile)
- **Navigation**: Be Vietnam Pro (Medium, 16px)
- **Headline**: Poppins (Extra Bold, 48px desktop / 32px mobile)

### Responsive Breakpoints
- **Desktop**: 1280px+
- **Tablet**: 768px - 1024px
- **Mobile**: 390px - 767px
- **Small Mobile**: 320px - 389px

## 🎬 Video Integration

Three video containers are ready for your looped video content:

1. **Video 1**: 183.6px × 125.28px (desktop), 122.09px × 83.81px (mobile)
2. **Video 2**: 172.5px × 120.75px (desktop), 114.71px × 80.3px (mobile)
3. **Video 3**: 150.66px × 48.63px (desktop), 100.19px × 32.32px (mobile)

[See detailed video integration guide →](./VIDEOS_GUIDE.md)

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

### Component Props & Customization

The Hero component is self-contained and requires no props:

```jsx
import Hero from './components/Hero';

function App() {
  return <Hero />;
}
```

To customize:
1. Edit text content in `src/components/Hero.jsx`
2. Update colors in `src/components/Hero.css` CSS variables
3. Modify breakpoints in media queries
4. Change fonts in `src/index.css`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- High contrast colors (WCAG AA)
- Keyboard navigation support
- Focus management
- Screen reader friendly
- Reduced motion support

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
```bash
npm run build
# Push dist folder to gh-pages branch
```

## 📚 Documentation

- **[SETUP.md](./SETUP.md)** - Detailed setup and customization guide
- **[VIDEOS_GUIDE.md](./VIDEOS_GUIDE.md)** - Video integration instructions
- **Code Comments** - Inline documentation in component files

## 🎯 Next Steps

1. **Install dependencies**: `npm install`
2. **Run dev server**: `npm run dev`
3. **Add your videos**: Follow [VIDEOS_GUIDE.md](./VIDEOS_GUIDE.md)
4. **Customize content**: Edit `Hero.jsx` with your text
5. **Deploy**: Run `npm run build` then deploy

## 💡 Tips

- All CSS uses CSS variables for easy theming
- Fully responsive - test on mobile devices
- Videos should be MP4 format and under 5MB each
- Use poster images for faster perceived load times
- Consider lazy loading for performance

## 🤝 Support

All components are fully documented with comments. Reference files:
- `src/components/Hero.jsx` - Component structure
- `src/components/Hero.css` - All styling and media queries
- `SETUP.md` - Comprehensive guide
- `VIDEOS_GUIDE.md` - Video troubleshooting

## 📄 License

Personal portfolio project for Valentina

---

**Built with React + Vite + Modern CSS**

Start by running: `npm install && npm run dev`
