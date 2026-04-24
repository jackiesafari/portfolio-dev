# Jacqueline's Portfolio

A personal portfolio site built around a custom searchable dropdown menu. This profile provides a snapshot of some of the personal project such as iOS app, dev tools and more. 

## Project Structure

```
Jackie-portfolio/
├── index.html      # Main page (dropdown menu + options)
├── styles.css      # Layout, theme, animations, responsive styles
├── script.js       # Dropdown logic, search, ripple effects
├── Joya-Resume.pdf # Resume PDF (when linked from dropdown)
└── README.md       # This file
```

## How to Run the Page

### Option 1: Open directly in a browser

1. Navigate to the project folder in Finder (or your file manager).
2. Double-click `index.html`.

Or from the terminal:

```bash
cd /path/to/Jackie-portfolio
open index.html
```

**Note:** Some browsers may block Font Awesome or other resources when opening via `file://`. If icons or styling look wrong, use Option 2.

### Option 2: Use a local web server (recommended)

**Python (if installed):**

```bash
cd /path/to/Jackie-portfolio
python3 -m http.server 8000
```

Then open **http://localhost:8000* in your browser.

**Node.js (npx):**

```bash
cd /path/to/Jackie-portfolio
npx serve
```

Then open the URL shown in the terminal (e.g. http://localhost:3000).

**VS Code:**

1. Install the "Live Server" extension.
2. Right-click `index.html` → "Open with Live Server".
3. The page will open in your default browser and auto-reload on changes.

## Tech Stack

- **HTML5** — Semantic markup
- **CSS** — Custom properties, glassmorphism, keyframe animations, responsive breakpoints
- **JavaScript** — Vanilla JS (dropdown toggle, live search, ripple effects, keyboard/touch support)
- **Font Awesome 6** — Icons (loaded from CDN)