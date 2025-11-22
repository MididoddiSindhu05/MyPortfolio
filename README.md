# Mididoddi Sindhu - Portfolio Website

A modern, ultra-polished, fully responsive personal portfolio website showcasing AI/ML and web development expertise. Built with pure HTML5, CSS3, and vanilla JavaScript for optimal performance and accessibility.

## 🚀 Quick Start

### Option 1: Direct Browser
Simply open `index.html` in your web browser. No server required!

### Option 2: Local Server (Recommended for Testing)
If you want to test with a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styling (glassmorphism, animations, responsive)
├── js/
│   └── main.js            # Vanilla JavaScript (theme, nav, animations, form)
├── assets/
│   ├── images/            # Profile and project images
│   │   ├── profile-placeholder.jpg
│   │   ├── project-revival-ai.jpg
│   │   └── project-career-guidance.jpg
│   └── icons/             # Reserved for additional SVG icons
├── resume.pdf             # Downloadable CV
└── README.md              # This file
```

## 🎨 Style Guide

### Color Palette

**Light Theme:**
- Primary: `hsl(250, 70%, 60%)` - Purple/Blue
- Secondary: `hsl(200, 65%, 55%)` - Sky Blue
- Accent: `hsl(330, 70%, 60%)` - Pink
- Background: `hsl(0, 0%, 98%)` - Off White
- Text: `hsl(0, 0%, 10%)` - Near Black

**Dark Theme:**
- Primary: `hsl(250, 75%, 65%)` - Lighter Purple/Blue
- Background: `hsl(0, 0%, 8%)` - Dark Gray
- Text: `hsl(0, 0%, 95%)` - Off White

### Typography
- **Display Font:** Poppins (600, 700, 800)
- **Body Font:** Inter (300, 400, 500, 600, 700)
- **Base Size:** 16px (1rem)

### Spacing System
- XS: 0.5rem (8px)
- SM: 0.75rem (12px)
- MD: 1rem (16px)
- LG: 1.5rem (24px)
- XL: 2rem (32px)
- 2XL: 3rem (48px)
- 3XL: 4rem (64px)
- 4XL: 6rem (96px)

### Border Radius
- SM: 0.5rem
- MD: 0.75rem
- LG: 1rem
- XL: 1.5rem
- Full: 9999px (circular)

## 🎯 Key Features

### ✨ Design
- **Glassmorphism UI:** Frosted glass cards with backdrop blur
- **Animated Gradients:** Smooth color transitions in hero section
- **Dark/Light Theme:** Toggle with localStorage persistence
- **Micro-interactions:** Hover effects, button ripples, scroll animations

### 🎭 Animations
- **Hero Background:** Floating gradient blobs with CSS animations
- **Scroll Reveal:** IntersectionObserver for progressive element visibility
- **Typed Effect:** Rotating job roles in hero section
- **Smooth Scrolling:** Native CSS scroll behavior
- **Progress Bars:** Animated skill percentages on scroll

### 📱 Responsive Design
- **Mobile-First:** Optimized for 320px to 4K displays
- **Breakpoints:**
  - Mobile: < 768px (hamburger menu)
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### ♿ Accessibility
- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- High contrast ratios (WCAG compliant)
- Alt text for images

### ⚡ Performance
- Lazy-loading images (`loading="lazy"`)
- CSS-first animations (GPU accelerated)
- Minimal JavaScript footprint
- No external dependencies
- Optimized for fast load times

## 🔧 How to Update Content

### Personal Information

**In `index.html`:**

1. **Hero Section (Lines 51-78):**
   - Update name, title, tagline, and CTA buttons

2. **About Section (Lines 81-103):**
   - Replace bio text and profile image path

3. **Education Section (Lines 106-131):**
   - Update university, degree, CGPA, and graduation year

4. **Experience Section (Lines 134-186):**
   - Add/edit internships with dates and achievements

5. **Projects Section (Lines 189-269):**
   - Update project titles, descriptions, tech stacks, and images
   - **IMPORTANT:** Update GitHub/LinkedIn URLs in project cards (lines with `href="#"`)

6. **Skills Section (Lines 272-410):**
   - Modify skill categories and percentages

7. **Certifications Section (Lines 413-457):**
   - Add/remove certifications

8. **Achievements Section (Lines 460-505):**
   - Update achievements and badges

9. **Contact Section (Lines 508-587):**
   - Update email, phone, and social links
   - **IMPORTANT:** Update GitHub and LinkedIn URLs (lines with `href="https://github.com/yourusername"` and `href="https://linkedin.com/in/yourusername"`)

### Social Media Links

Search for these comments in `index.html` and update the URLs:

```html
<!-- Update these URLs with actual GitHub links -->
<!-- Update these URLs with actual social media links -->
```

**Locations:**
- Projects section: GitHub and live demo links
- Contact section: GitHub and LinkedIn icons

### Images

Replace placeholder images in `assets/images/`:

1. **profile-placeholder.jpg** - Professional headshot (recommended: 500x500px, square)
2. **project-revival-ai.jpg** - Project screenshot (recommended: 800x600px)
3. **project-career-guidance.jpg** - Project screenshot (recommended: 800x600px)

**Optimization Tips:**
- Use WebP format for better compression
- Compress images before upload (TinyPNG, ImageOptim)
- Maximum file size: 200KB per image

### Resume PDF

Replace `resume.pdf` with your actual CV. The download button automatically links to this file.

### Theme Colors

To change the color scheme, edit CSS Custom Properties in `css/styles.css` (Lines 6-35):

```css
:root {
    --primary-hue: 250;      /* Change to 0-360 for different color */
    --secondary-hue: 200;    /* Complementary color */
    /* ... */
}
```

### Typography

To change fonts, update the Google Fonts link in `index.html` (Lines 10-12) and CSS variables:

```css
:root {
    --font-primary: 'Your Body Font', sans-serif;
    --font-display: 'Your Display Font', sans-serif;
}
```

## 🔌 Form Integration

The contact form currently validates input but doesn't send emails. To enable email functionality:

### Option 1: Formspree (Recommended for Static Sites)
1. Sign up at [Formspree.io](https://formspree.io/)
2. Get your form endpoint
3. Update `js/main.js` in the form submission handler (around line 186):

```javascript
if (isValid) {
    // Send to Formspree
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: JSON.stringify({
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        }),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            formSuccess.classList.add('show');
            contactForm.reset();
        }
    });
}
```

### Option 2: EmailJS
1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Add EmailJS SDK to `index.html` before closing `</body>`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```
3. Follow EmailJS documentation to implement

### Option 3: Backend Server
If you have a backend, POST the form data to your API endpoint.

## 🎨 Icon Set

All icons are inline SVG for performance. To add more icons:

1. Visit [Feather Icons](https://feathericons.com/)
2. Copy the SVG code
3. Paste into your HTML with consistent sizing (24x24px)

## 📦 Image Optimization (Optional)

If you want to optimize images, you can use imagemin:

```bash
# Install imagemin-cli
npm install -g imagemin-cli imagemin-webp imagemin-mozjpeg

# Optimize images
imagemin assets/images/*.jpg --out-dir=assets/images --plugin=mozjpeg
imagemin assets/images/*.jpg --out-dir=assets/images --plugin=webp
```

## 🌐 Deployment

This is a static website that can be deployed anywhere:

### Netlify (Recommended)
1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy (automatic builds on push)

### Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Deploy

### GitHub Pages
1. Push code to GitHub
2. Go to Settings > Pages
3. Select branch and root directory
4. Save

### Traditional Hosting
Upload all files via FTP to your web server's public directory.

## 🐛 Troubleshooting

### Images not loading
- Check file paths are correct
- Ensure images are in `assets/images/` directory
- Verify file extensions match (case-sensitive on some servers)

### Dark mode not persisting
- Check browser localStorage is enabled
- Clear browser cache and try again

### Animations not smooth
- Reduce `will-change` usage in CSS
- Check if hardware acceleration is enabled in browser
- Test on different devices

### Mobile menu not working
- Check JavaScript is loaded (console errors)
- Verify viewport meta tag is present
- Test on actual mobile device, not just resized browser

## 📝 Browser Support

- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Mobile Safari: iOS 12+
- Chrome Android: Last 2 versions

## 📄 License

This portfolio template is provided as-is for personal use. Feel free to customize it for your own portfolio.

## 🙏 Credits

- **Fonts:** Google Fonts (Inter, Poppins)
- **Icons:** Inline SVG (Feather Icons style)
- **Design:** Custom glassmorphism implementation
- **Built by:** Mididoddi Sindhu

---

## 💡 Quick Checklist Before Going Live

- [ ] Replace all placeholder images with actual photos
- [ ] Update resume.pdf with real CV
- [ ] Add actual GitHub and LinkedIn URLs
- [ ] Update project GitHub/demo links
- [ ] Test contact form (integrate with email service)
- [ ] Optimize all images
- [ ] Test on multiple devices and browsers
- [ ] Verify all links work
- [ ] Check accessibility with screen reader
- [ ] Test dark/light mode toggle
- [ ] Run Lighthouse audit for performance
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain (optional)

---

**Built with ❤️ using HTML, CSS, and JavaScript**
