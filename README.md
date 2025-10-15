# Antonuccio Family Website

A modern, elegant splash page featuring rotating family videos with a beautiful blue and purple gradient theme.

## Features

- Full-screen rotating video display
- Smooth fade transitions between videos
- Manual navigation controls (previous/next buttons)
- Video indicator dots for direct navigation
- Auto-rotation every 15 seconds
- Keyboard navigation support (arrow keys)
- Fully responsive design
- Modern glassmorphism UI elements
- Animated text with glowing effects

## Setup Instructions

### 1. Add Your Videos

1. Place your family video files in the `videos/` directory
2. Name them as: `video1.mp4`, `video2.mp4`, `video3.mp4`, etc.
3. Update the video list in `script.js` (line 94-99) to match your number of videos:

```javascript
const videoSources = [
    'videos/video1.mp4',
    'videos/video2.mp4',
    'videos/video3.mp4',
    'videos/video4.mp4'
    // Add or remove as needed
];
```

### 2. Customize (Optional)

#### Change the Family Name
Edit `index.html` line 20 to change "The Antonuccio Family"

#### Change the Subtitle
Edit `index.html` line 21 to change "Creating memories together"

#### Adjust Colors
In `styles.css`, you can modify:
- Main gradient colors (line 9)
- Text glow colors (throughout the file)
- Button colors (line 138)

#### Change Auto-Rotation Speed
In `script.js` line 12, modify `autoRotateDelay` (in milliseconds):
```javascript
this.autoRotateDelay = 15000; // 15 seconds
```

### 3. Test Locally

Open `index.html` in a web browser. For best results, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### 4. Deploy to antonuccio.com

#### Option A: Standard Web Hosting
1. Upload all files to your web host via FTP/SFTP
2. Ensure `index.html` is in the root directory
3. Make sure the `videos/` folder and its contents are uploaded

#### Option B: Using GitHub Pages
1. Create a GitHub repository
2. Push all files to the repository
3. Enable GitHub Pages in repository settings
4. Point your domain to GitHub Pages

#### Option C: Using Netlify/Vercel
1. Drag and drop the `antonuccio-family-website` folder to Netlify/Vercel
2. Connect your domain in their dashboard
3. Deploy

### 5. Domain Configuration

Point your `antonuccio.com` domain to your hosting provider:
- Update A records or CNAME records in your domain registrar
- Wait for DNS propagation (up to 48 hours)

## File Structure

```
antonuccio-family-website/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Video rotation functionality
├── videos/             # Video files directory
│   ├── video1.mp4
│   ├── video2.mp4
│   └── ...
└── README.md          # This file
```

## Video Recommendations

For best performance:
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (Full HD) or higher
- **File size**: Under 50MB per video (compress if needed)
- **Aspect ratio**: 16:9 recommended
- **Duration**: 10-30 seconds works best

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Keyboard Controls

- **Left Arrow**: Previous video
- **Right Arrow**: Next video

## Troubleshooting

**Videos not playing?**
- Ensure video files are in MP4 format
- Check that video paths in `script.js` match your actual files
- Try using a local server instead of opening the file directly

**Videos playing too fast/slow?**
- Adjust `autoRotateDelay` in `script.js`

**Colors look different?**
- Ensure your display supports the full color range
- Adjust gradient values in `styles.css`

## License

Personal family website - all rights reserved.
