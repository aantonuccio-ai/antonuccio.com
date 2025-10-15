# Gallery Organization Guide

This folder contains the photo and video gallery for the Antonuccio Family website.

## Folder Structure

### By Year
```
gallery/
  2024/          - Photos and videos from 2024
  2023/          - Photos and videos from 2023
  2022/          - Photos and videos from 2022
  (add more years as needed)
```

### By Theme
```
gallery/themes/
  vacations/     - Family vacation photos and videos
  celebrations/  - Birthdays, anniversaries, weddings, etc.
  holidays/      - Holiday celebrations (Christmas, Thanksgiving, etc.)
  portraits/     - Family portraits and formal photos
  (add more themes as needed)
```

## Adding New Media

### To add photos or videos by year:
1. Place files in the appropriate year folder (e.g., `gallery/2024/`)
2. Edit `gallery.html` to add new media items in the year section
3. Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif` for photos; `.mp4`, `.webm` for videos

### To add photos or videos by theme:
1. Place files in the appropriate theme folder (e.g., `gallery/themes/vacations/`)
2. Edit `gallery.html` to add new media items in the theme section
3. You can create new theme folders as needed

## Example HTML for adding media:

### For photos:
```html
<div class="media-item photo-item" data-year="2024">
    <img src="gallery/2024/your-photo.jpg" alt="Description" loading="lazy">
    <div class="media-caption">Your Caption Here</div>
</div>
```

### For videos:
```html
<div class="media-item video-item" data-year="2024">
    <video src="gallery/2024/your-video.mp4" controls></video>
    <div class="media-caption">Your Caption Here</div>
</div>
```

## Tips
- Use descriptive filenames (e.g., `summer-vacation-2024.jpg` instead of `IMG_1234.jpg`)
- Optimize images before uploading (recommended max width: 1920px)
- Keep video file sizes reasonable for web (compress if needed)
- Always include meaningful captions for your media
