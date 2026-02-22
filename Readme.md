# gaurav.nv — Portfolio

Personal portfolio site built with vanilla HTML, CSS, and JavaScript. Uses Tailwind CSS v4 compiled locally.

## Stack

- **HTML / Vanilla JS** — no frameworks, no build step for logic
- **Tailwind CSS v4** — compiled via CLI
- **Lucide Icons** — via CDN
- **Devicons** — via CDN
- **Web3Forms** — contact form backend

## Project Structure

```
├── index.html          # Main HTML shell
├── package.json        # Tailwind build scripts
├── css/
│   ├── input.css       # Source CSS (edit this)
│   └── index.css       # Compiled output (don't edit, gitignore this)
├── js/
│   └── index.js        # All data + render logic
└── resources/
    ├── resume.pdf
    └── *.png / *.gif   # Screenshots used in project drawers
```

## Getting Started

```bash
npm install
npm run build     # compile CSS once
npm run watch     # watch mode for development
```

Open `index.html` in your browser directly — no dev server needed.

## Updating Content

All content lives in `js/index.js` at the top in the `detailsData` object. No HTML changes needed for most updates.

### Adding / editing a project

```js
detailsData.project.your_key = {
  title: "Project Title",
  subtitle: "Project",
  featured: false,   // shows in Featured section (max 3 across all types)
  isNew: true,       // shows New badge, sorts to top in previews
  description: "<p>...</p>",
  stack: ["Python", "FastAPI"],
  link: "https://github.com/...",
  linkText: "Repository",
  linkIcon: "github",
  visual: "",        // optional ASCII architecture diagram
  screenshots: ["./resources/screenshot.png"],
};
```

### Adding / editing experience

```js
detailsData.experience.your_key = {
  title: "Role Title",
  company: "Company Name",
  period: "Jan 2024 - Present",
  isCurrent: true,   // shows Current badge with pulsing dot
  featured: false,
  subtitle: "Company Name • Jan 2024 - Present",
  description: `<ul class="list-disc pl-4 space-y-2"><li>...</li></ul>`,
  stack: ["Go", "PostgreSQL"],
  link: "",
  linkText: "",
  visual: "",
};
```

### Adding a publication

```js
detailsData.publication.your_key = {
  title: "Paper Title",
  subtitle: "Venue Year",
  venue: "ICML 2025",
  featured: false,
  isNew: true,
  description: "<p>...</p>",
  stack: ["Python", "NLP"],
  link: "https://...",
  linkText: "Read Paper",
  linkIcon: "file-text",
  visual: "",
};
```

### Featured section rules

- Set `featured: true` on any item across any type
- Maximum **3** featured items are shown (first 3 found win)
- Featured items are removed from their own section's preview to avoid duplication
- They still appear in the full-screen modals

### Badge reference

| Field | Badge | Behaviour |
|---|---|---|
| `featured: true` | gradient red→violet **Featured** | Moves item to Featured section |
| `isNew: true` | emerald **New** | Sorts to top in previews and full lists |
| `isCurrent: true` | violet pulsing **Current** | Experience only |

## Customisation

- **Theme colours** — edit the CSS custom properties in `css/input.css` (`:root` block)
- **Stats** — edit `statsData` array at the top of `js/index.js`
- **Skill categories** — edit `skillsConfig` in `js/index.js`
- **Contact form** — replace the `access_key` in the form handler with your own [Web3Forms](https://web3forms.com) key