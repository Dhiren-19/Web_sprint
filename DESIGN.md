# 🕸️ Spider-Verse Academy — Design System & Antigravity Architecture Document

## 1. Design Overview & Philosophy

**Spider-Verse Academy** is an immersive, gamified educational platform built around the multiverse aesthetic of *Spider-Man: Into the Spider-Verse* and *Across the Spider-Verse* (Miles Morales aesthetic).

The design implements a pervasive **"Antigravity" zero-gravity system**, bridging **comic book print heritage** (halftone screens, CMYK chromatic aberration, dynamic action angles) with **weightless cyberpunk UI physics** (floating widgets, comic hard-edge shadows, 3D parallax layers, and airborne hero illustrations).

---

## 2. Color Palette & Design Tokens

### 2.1 Core Accents
| Token | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| `--neon-red` | `#FF1744` | Primary brand accent, alert states, XP bars, fiery gradient endpoints |
| `--neon-cyan` | `#00E5FF` | Secondary energy accent, interactive focus outlines, active highlights |
| `--neon-yellow` | `#FFEA00` | Streak counter, achievement medals, gold status, glowing flares |
| `--neon-magenta`| `#D500F9` | Multiverse portal rings, badge rarities, category pills |
| `--neon-purple` | `#7C4DFF` | Tertiary depth gradients |

### 2.2 Neutrals & Antigravity Surfaces (Dark Mode - Default)
| Token | Hex / RGBA | Role & Usage |
| :--- | :--- | :--- |
| `--bg-deep` / `--bg-primary` | `#080810` | Deep cosmic background canvas |
| `--bg-secondary` | `#10101A` | Elevated floating card surfaces |
| `--bg-card` | `rgba(22, 22, 34, 0.88)` | Translucent frosted glass containers |
| `--bg-sidebar` | `#0B0B14` | Fixed left navigation sidebar |
| `--bg-header` | `rgba(8, 8, 16, 0.85)` | Sticky top header with background blur |
| `--border-color` | `rgba(255, 255, 255, 0.08)` | Subtle container boundaries |
| `--shadow-antigravity` | Hard-edge cyan/red offset + deep 36px blur | Base zero-G floating elevation shadow |
| `--shadow-antigravity-hover` | Hard-edge cyan/red offset + 64px blur + cyan glow | High-altitude lifted state on hover |

---

## 3. Typography Hierarchy

```
+-----------------------------------------------------------------------+
|  ANTON / BANGERS / BEBAS NEUE (Street & Comic Headers)                |
|  - Impactful, high-energy, all-caps display fonts                     |
|  - Titles, stat numbers, streak counter, multiverse portal labels     |
+-----------------------------------------------------------------------+
|  SPACE GROTESK (Tech & Code Labels)                                   |
|  - Clean geometric sans for inputs, forms, navigation labels          |
+-----------------------------------------------------------------------+
|  INTER (Body & Data Arrays)                                           |
|  - Highly legible neutral sans for dense charts, activity logs, meta  |
+-----------------------------------------------------------------------+
```

---

## 4. Visual Effects & Antigravity Mechanics

### 4.1 Weightless Floating Physics (`.float-widget`, `.drift-1` to `.drift-4`)
- **Staggered Drift Keyframes:** Each widget continuously drifts on a non-linear path with fractional rotations ($\pm 0.4^\circ$) and vertical oscillation ($\pm 7\text{px}$ to $\pm 9\text{px}$) on different period cycles ($6.5\text{s}$, $7.8\text{s}$, $8.4\text{s}$, $7.2\text{s}$).
- **Elevation Shadows:** Retains a comic-book hard-edged offset drop shadow:
  ```css
  box-shadow: 
    0 16px 36px rgba(0, 0, 0, 0.6),
    6px 8px 0px rgba(0, 229, 255, 0.18),
    -4px -2px 0px rgba(255, 23, 68, 0.14);
  ```

### 4.2 The "Glitch Up" Interaction Reaction
- On mouse hover, the active card pauses drift and lifts rapidly upwards (`translateY(-16px)` to `-18px` with spring curve `cubic-bezier(0.34, 1.56, 0.64, 1)`).
- Triggers a momentary **TikTok-style chromatic aberration burst** (`@keyframes glitch-lift-burst`) that shifts cyan and red borders outward to create a temporary zero-gravity instability sensation.

### 4.3 Interactive 3D Card Gyroscope (`data-tilt`)
- Dynamic mouse-tracking calculates cursor distance from the card's center:
  ```javascript
  const rotateX = ((y - centerY) / centerY) * -9; // Max 9 deg tilt
  const rotateY = ((x - centerX) / centerX) * 9;
  el.style.transform = `perspective(1000px) translateY(-18px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.025, 1.025, 1.025)`;
  ```

### 4.4 Multi-Layer Parallax Backdrop
- 4 distinct background layers offset proportionally with cursor movement:
  - **Layer 1: Stars & Cosmic Dust** (Speed factor: $-12\text{px}$)
  - **Layer 2: Brooklyn Cityscape Silhouette** (Speed factor: $-20\text{px}$)
  - **Layer 3: Comic Grid Halftone Dots** (Speed factor: $+10\text{px}$)
  - **Layer 4: Glowing Multiverse Shards** (Speed factor: $+28\text{px}$)

---

## 5. Dynamic Airborne Miles Morales Imagery

- **Hero Banner:** Features an SVG illustration of Miles Morales in an inverted mid-air dive through a multiverse vortex with bio-electric venom spark animations, speed lines, and glowing mask lenses.
- **Streak Zone:** Dynamic leaping fire counter with staggered rising flame particles.
- **Floating Dimension Badges:** Zero-G dimension indicators with real-time status pulses.

---

## 6. Architectural Breakdown

### 6.1 Split-Screen Authentication (`login.html`)
```
+------------------------------------+------------------------------------+
|  LEFT COLUMN (Visual Showcase 50%) |  RIGHT COLUMN (Functional Hub 50%) |
|                                    |                                    |
|  - Twinkling Starfield             |  - Halftone Backdrop Grid          |
|  - Tri-Ring Multiverse Portal      |  - Ambient Glow Orbs               |
|  - Radiating Web Strand Vector     |  - Glassmorphic Login Card         |
|  - Rising Floating Light Particles |    • Dynamic View Switcher         |
|  - Hooded Hero Graphic Overlap     |    • Cyan/Red Glowing Input Focus  |
|  - VerseEDU Brand Emblem           |    • Glitch Chromatic Sign-In CTA  |
|                                    |    • OAuth Social Connectors       |
+------------------------------------+------------------------------------+
```

### 6.2 Main Application Dashboard (`index.html`)
```
+---------------+-------------------------------------------------------+
| SIDEBAR       | HEADER                                                |
| (250px Fixed) | [Mobile Menu]  [   Central Search (⌘K)   ]  [Theme][Avatar]
+---------------+-------------------------------------------------------+
| • Dashboard   | MAIN FLOATING CONTENT AREA (Zero-G Perspective)      |
| • Courses     |                                                       |
| • Activity    | 1. Hero Banner: Airborne Miles diving in zero-G       |
| • Analytics   | 2. Course Hub: Floating cards with 3D tilt            |
| • Projects    | 3. Streak Tracker: Dual animated fire shader          |
| • Streak      | 4. Activity Heatmap: 26/52-week Quantum Grid          |
| • Community   | 5. Velocity Metrics: Canvas line & bar charts         |
|               | 6. Project Showcase: Zero-G prototype cards           |
| [Settings]    | 7. Dedicated Sub-pages for all 7 sidebar views        |
| [Sign Out]    |                                                       |
+---------------+-------------------------------------------------------+
```

---

## 7. Responsive Breakpoints

| Breakpoint | Layout Adaptations |
| :--- | :--- |
| **$> 1200\text{px}$** | Full multi-column dashboard grid, 4-column analytics metrics. |
| **$1024\text{px} - 1199\text{px}$** | Single-column cards for streak and charts, 2-column analytics cards. |
| **$768\text{px} - 1023\text{px}$** | Sidebar collapses off-canvas with mobile toggle button; header adapts search bar. |
| **$< 768\text{px}$** | Login switches to stacked vertical layout ($40\text{vh}$ top visual / $60\text{vh}$ form). Hero airborne graphic adapts for mobile viewports. |

---

## 8. Directory & File Manifest

```
Web_sprint/
├── index.html            # Main SPA dashboard with Antigravity layers & airborne SVG
├── index.css             # Antigravity physics, drift keyframes, hard-edge shadows, glitch bursts
├── app.js                # 3D card tilt engine, mousemove parallax tracker, Canvas charts
├── login.html            # Split-screen cinematic login & signup page
├── login.css             # Portal animations, glassmorphism, input shaders, responsive stack
├── login.js              # View toggle, password visibility, particle engine, auth redirect
├── hero_silhouette.jpg   # Multiverse hero artwork
└── DESIGN.md             # This comprehensive architecture & design document
```
