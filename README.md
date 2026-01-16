# KOZAK - Romantic Marriage Proposal Planning in Paris

A beautiful, multilingual single-page website for KOZAK, a Paris-based marriage proposal planning service featuring:

- 🌍 **Multi-language support**: English, French, Ukrainian, Russian
- 📱 **Responsive design**: Works on mobile, tablet, and desktop
- 🗺️ **Interactive map**: Leaflet-powered map showing proposal locations
- ✨ **Smooth animations**: Scroll-triggered section animations
- 📦 **15+ proposal packages**: From minimalist to VIP Premium
- 📧 **Contact form**: Easy inquiry submission

## Quick Start

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/[your-username]/KOZAK.git
   cd KOZAK
   ```

2. Start the Python server:
   ```bash
   python serve.py
   ```

3. Open your browser to [http://localhost:8000](http://localhost:8000)

### Configuration

Copy `.env.example` to `.env` and update with your actual values:

```bash
cp .env.example .env
```

Update placeholder values in `index.html`:
- `[your_email]` → Your contact email
- `[your_whatsapp]` → Your WhatsApp number (without +)
- `[your_facebook]` → Your Facebook page name
- `[your-domain].com` → Your actual domain
- `YOUR_FORM_ID` → Your Formspree form ID (get one free at [formspree.io](https://formspree.io))

## Features

### Booking Form
The contact section includes a fully-featured booking form with:
- **Name & Email**: Required fields with validation
- **Date Picker**: Select proposal date (today to 1 year ahead)
- **Package Selection**: Dropdown populated from available packages
- **Message**: Optional special requests field
- **Formspree Integration**: Submissions sent to your email (configure YOUR_FORM_ID)
- **Console Fallback**: In demo mode, submissions are logged to console

### Multilingual Support
The site supports 4 languages with automatic switching:
- 🇬🇧 **English** (default)
- 🇫🇷 **Français** (French)
- 🇺🇦 **Українська** (Ukrainian)
- 🇷🇺 **Русский** (Russian)

**Features:**
- Browser language auto-detection on first visit
- Language preference saved to localStorage
- All form labels, placeholders, and messages translated
- Dynamic document `lang` attribute updates

## Project Structure

```
KOZAK/
├── index.html          # Main SPA (React via CDN)
├── serve.py            # Python HTTP server
├── .env.example        # Environment configuration template
├── assets/
│   └── images/
│       ├── packages/   # Package photos
│       ├── gallery/    # Gallery images
│       └── locations/  # Location photos
├── kozak-website/      # Alternative Vite project (in development)
└── README.md
```

## Technologies Used

- **React 18** (via CDN)
- **Tailwind CSS 2.2.19** (via CDN)
- **Leaflet** - Interactive maps with OpenStreetMap
- **Babel** - JSX transpilation
- **Google Fonts** - Playfair Display & Roboto

## Features

### Sections
- **Hero** - Full-screen background with call-to-action
- **Packages** - 15 customizable proposal packages
- **About** - Company transparency, trust, and multilingual support
- **Gallery** - Photo showcase
- **Reviews** - Customer testimonials
- **Locations** - Interactive map with Paris locations
- **FAQ** - Common questions answered
- **Contact** - Form and social media links

### Accessibility
- Semantic HTML structure
- ARIA labels for icons and buttons
- Keyboard navigation support
- Screen reader friendly

## Locations

The website features 3 romantic proposal locations in Paris with interactive map markers:

### Location Details

| Location | Description | Coordinates | Image |
|----------|-------------|-------------|-------|
| **Quai Debilly** | Riverside romance opposite the Eiffel Tower | `48.8584, 2.2928` | `assets/images/locations/quai-debilly.jpg` |
| **Bir Hakeim Bridge** | Iconic arched bridge with panoramic Eiffel views | `48.8545, 2.2894` | `assets/images/locations/bir-hakeim.jpg` |
| **Private Locations** | Exclusive rooftops or Seine cruises | `48.8588, 2.2945` | `assets/images/locations/private-location.jpg` |

### Photo Sources
- All location images sourced from [Unsplash](https://unsplash.com) (royalty-free)
- Images optimized to <100KB for performance
- Lazy-loading enabled for all location photos

### Customizing Locations

To update location descriptions in multiple languages, edit the `locationsList` array in `index.html`:

```javascript
// English (en)
locationsList: [
    { 
        title: "Location Name", 
        desc: "Description text", 
        img: "assets/images/locations/photo.jpg", 
        lat: 48.8584, 
        lng: 2.2928 
    }
]
```

Translations are available in:
- English (`en`)
- French (`fr`)
- Ukrainian (`uk`)

The Leaflet map automatically updates markers and popups based on the selected language.

## Deployment

### GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Source: Deploy from branch → `main` / `(root)`
4. Your site will be available at `https://[username].github.io/KOZAK`

### Netlify/Vercel

Simply connect your repository and deploy automatically.

## License

MIT License - See LICENSE file for details.

## Contact

- Instagram: [@proposal.in.paris.kozak](https://www.instagram.com/proposal.in.paris.kozak?igsh=MWswajdwbmhmdDl2bw==)
- Website: [kozak-proposals.com](https://kozak-proposals.com)
