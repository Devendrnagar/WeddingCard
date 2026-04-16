# 🎉 Wedding Invitation Website

A beautiful, animated wedding invitation website built with **React**, **Vite**, and **Tailwind CSS**.

## Features

✨ **Opening Screen** - Elegant invitation prompt with Hindi text  
🎵 **Background Music** - Soft music with toggle control  
💒 **Animated Entrance** - Bride and groom appear with smooth animations  
💎 **Royal Design** - Gold and purple luxury aesthetic  
📱 **Responsive** - Works perfectly on mobile, tablet, and desktop  
🎨 **Beautiful Animations** - Smooth transitions and entrance effects  

## Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Edit Couple Names
Open `src/components/InvitationCard.jsx` and update:
- Line 57: Change "Priya" (Bride name)
- Line 67: Change "Arjun" (Groom name)

### Edit Event Details
In `src/components/InvitationCard.jsx`:
- **Date**: Line 80
- **Time**: Line 89
- **Venue**: Line 98-102

### Customize Colors
Edit `tailwind.config.cjs` to modify:
- Gold color: `#D4AF37`
- Purple shades: Change gradient colors
- Text colors and backgrounds

### Add Background Music
Replace the placeholder audio in `src/components/OpeningScreen.jsx` with your own audio file:
```jsx
<source src="your-music.mp3" type="audio/mpeg" />
```

## File Structure

```
src/
├── components/
│   ├── OpeningScreen.jsx      # Initial invitation screen
│   └── InvitationCard.jsx     # Main invitation details
├── App.jsx                     # Main app component
├── main.jsx                    # Entry point
└── index.css                   # Global styles
```

## Technologies Used

- **React** - UI Framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Open source - Use freely!

---

💕 **Happy Wedding!** 💕
