# Comprehensive Frontend Project Documentation

## 1. Project Structure
The project follows a standard static website structure with separated assets. The current codebase appears to be customized for "Best DJ in Vizag".

```text
/
├── index.html              # Main entry point (Home Page)
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet (Webflow base + custom styles)
│   ├── js/
│   │   └── main.js         # Main JavaScript logic
│   └── images/
│       ├── home/           # Homepage specific assets (videos, parallax)
│       ├── shared/         # Shared assets (logos, favicons)
│       └── services/       # Service section images
└── restructure.py          # Utility script
```

## 2. Design System

### Color Palette
Colors extracted from CSS variables and stylesheet definitions.

| Color | Hex Code | Usage |
| :--- | :--- | :--- |
| **Primary White** | `#FFFFFF` | Backgrounds, Text, Borders |
| **Primary Black** | `#000000` | Text, Components |
| **Dark Gray** | `#333333` | Body Text, Headings |
| **Accent Blue** | `#3898ec` | Buttons, Highlights |
| **Light Gray** | `#e2e2e2` | Borders, Background Accents |
| **Error Red** | `#ea384c` | Form Errors |

### Typography
*   **Primary Font**: `Arial, sans-serif` (Default per stylesheet).
*   **Icon Font**: `webflow-icons`.
*   **Headings**: Bold weights (700) with responsive sizing (H1: 38px, H2: 32px, H3: 24px).

---

## 3. Page Breakdown: Home ([index.html](file:///c:/Users/prani/Downloads/Magic%20Sir%20Project/BestDJ/index.html))

This section details every visible element, text content, and interaction on the main page.

### A. Navigation Bar (Top)
**Layout**: Fixed header with Logo (Left) and Navigation (Right).

| Element | Text Content | Redirection / Action |
| :--- | :--- | :--- |
| **Logo** | (Jayanthi Event World Image) | `/` (Home) |
| **Link 01** | `01 Home` | `#home` |
| **Link 02** | `02 Services` | `#services` |
| **Link 03** | `03 About` | `#about` |
| **Link 04** | `04 Contact` | `#contact` |
| **CTA Button** | `Call Now` | `tel:+919704571912` |
| **Menu Toggle** | (Hamburger Icon) | Opens Fullscreen Menu overlay |

### B. Navigation Menu Overlay
**Layout**: Fullscreen overlay appearing when "Menu" is clicked.

| Element | Text Content | Redirection / Action |
| :--- | :--- | :--- |
| **Language** | `EN` / `VI` | `/` / `/vn` |
| **Link** | `Home` | `#home` |
| **Link** | `Services` | `#services` |
| **Link** | `Why Us` | `#why-us` |
| **Link** | `Contact` | `#contact` |
| **Featured** | `HANOI CONVENTION` (Template Content) | `/work/hanoi-convention` |
| **Showreel** | `WATCH SHOWREEL` | Opens Video Lightbox `playlist.m3u8` |
| **Social** | Facebook, Instagram, Tiktok, Behance | External Links |

### C. Hero Section (`#home`)
**Layout**: Fullscreen hero with video background (`OG.mp4`).

| Element | Text Content | Redirection / Action |
| :--- | :--- | :--- |
| **Heading** | `Best DJ in Vizag – Professional DJ, Sound & Lighting Services` | n/a |
| **Featured** | `Book Now`<br>`OPEN FOR 2025 EVENTS` | `#contact` |
| **Link** | `Call Us` / `WhatsApp` | `#` (Target Blank) |
| **Link** | `[OUR SERVICES]` | `#services` |
| **Link** | `[WATCH VIDEO]` | Opens Video Lightbox |

### D. About Section (`#about`)
**Layout**: Split layout with text and parallax stats.

| Element | Text Content | Redirection / Action |
| :--- | :--- | :--- |
| **Eyebrow** | `About Our Work` | n/a |
| **Heading** | `We deliver reliable DJ and event services with professional equipment and experienced performers.` | n/a |
| **Text** | `Our focus is simple — clear sound, great music, smooth execution, and happy clients...` | n/a |
| **Button** | `View Our Services` | `#services` |
| **Stat 1** | `500+` Successful events | n/a |
| **Stat 2** | `1000+` Communication publications (Template Text) | n/a |
| **Stat 3** | `50+` Experienced, passionate staff | n/a |

### E. Featured Clients & Marquee
**Layout**: Horizontal scrolling texts.

| Element | Text Content | Redirection / Action |
| :--- | :--- | :--- |
| **Clients** | List of Ministries and Banks (Template Content like `Ministry of Public Security`, `VINGROUP`...) | n/a |
| **Marquee 1** | `Be different.` / `Lead Boldly.` | n/a |
| **Marquee 2** | `That’s the Best DJ way` | n/a |

### F. Scaling Text Section
**Layout**: Large scroll-triggered text scaling effect.

| Element | Text Content | Redirection / Action |
| :--- | :--- | :--- |
| **Heading** | `Ready to`<br>`Create`<br>`Your`<br>`Brand`<br>`Breakthrough?` | n/a |
| **Button** | `[ Contact Us ]` | `/contact` |

### G. Services Section (`#services`)
**Layout**: Grid of service cards with images and booking buttons.

| Element | Text Content | Redirection / Action |
| :--- | :--- | :--- |
| **Heading** | `What We Offer`<br>`Our Premium Services` | n/a |
| **Card 1** | `01 Weddings`<br>`Wedding DJ Services`<br>`Music, sound balance, and lighting...` | `#contact` |
| **Card 2** | `02 Parties`<br>`Birthday Party DJ`<br>`High-energy playlists suitable for kids...` | `#contact` |
| **Card 3** | `03 Corporate`<br>`Corporate Event DJ`<br>`Professional DJ setup for conferences...` | `#contact` |
| **Card 4** | `04 Audio`<br>`Pro Sound Systems`<br>`High-quality speakers, microphones...` | `#contact` |
| **Card 5** | `05 Visuals`<br>`Lighting & Stage Effects`<br>`LED lighting, ambience effects...` | `#contact` |
| **Card 6** | `06 SFX`<br>`Cold Fire & CO₂ Effects`<br>`Safe, controlled special effects...` | `#contact` |
| **Button** | `[ Get a Quote ]` | `#contact` |

### H. Why Us Section (`#why-us`)
**Layout**: Sticky scrolling cards detailing USPs.

| Element | Text Content | Redirection / Action |
| :--- | :--- | :--- |
| **Card 1** | `01`<br>`Professional Grade Equipment`<br>`Top-tier JBL & Bose sound systems...` | n/a |
| **Card 2** | `02`<br>`Reliable Execution`<br>`On-time setup and dismantling...` | n/a |
| **Card 3** | `03`<br>`Experienced DJs`<br>`Expert crowd reading & energy management...` | n/a |
| **Card 4** | `04`<br>`Transparent Pricing`<br>`Clear packages with no hidden costs...` | n/a |

### I. Process Section (`#process`)
**Layout**: Three-step process flow.

| Element | Text Content | Redirection / Action |
| :--- | :--- | :--- |
| **Step 1** | `01 Contact Us`<br>`Call or WhatsApp us...` | n/a |
| **Step 2** | `02 Get Quote`<br>`We'll suggest the best package...` | n/a |
| **Step 3** | `03 Book Date`<br>`Confirm your booking with a small advance.` | n/a |

### J. Footer & CTA (`#section_cta`, `#contact`)
**Layout**: Large CTA followed by footer information.

| Element | Text Content | Redirection / Action |
| :--- | :--- | :--- |
| **CTA Heading** | `Ready to Plan Your Event?` | n/a |
| **CTA Button** | `Call +91 97045 71912` | `tel:+919704571912` |
| **Footer Title** | `Best DJ in Vizag` | n/a |
| **Description** | `Professional DJ, Sound & Lighting Services...` | n/a |
| **Footer CTA** | `Book Your Event Now` | `tel:+919704571912` |
| **Links** | `Home`, `Services`, `About Us`, `Why Us` | Internal Anchors |
    - **Copyright**: `© 2026 Best DJ in Vizag. all rights reserved`

