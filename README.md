# Personal Portfolio Webpage

## Author

Ricky Lee

## Class

[CS5610 Web Development - Northeastern University](https://johnguerra.co/classes/webDevelopment_spring_2025/)

## Screenshot

![Homepage](./images/home_wireframe.png)

## Project Objective

Create a personal portfolio webpage that showcases skills, projects, and personality while meeting modern web development standards. The site demonstrates proficiency in HTML5, CSS3, JavaScript ES6 modules, responsive design, and web development best practices.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ ES6 modules for JavaScript organization
- ✅ Semantic HTML5 structure
- ✅ CSS Grid and Flexbox layouts
- ✅ Accessibility features (alt text, semantic tags)
- ✅ Multiple pages with navigation
- ✅ AI-generated content page
- ✅ Prettier code formatting
- ✅ ESLint compliance
- ✅ W3C HTML validation
- ✅ MIT License

## Project Structure

```
CS5610/
├── index.html           # Homepage
├── about.html           # About page
├── BookME.html          # Book me for volleyball showcase
├── ai-page.html         # AI-generated content page
├── css/
│   └── styles.css       # Main stylesheet with Grid/Flexbox
├── js/
│   ├── main.js          # Entry point (ES6 module)
│   └── creative.js      # Creative component module
├── images/              # Image assets with alt text
├── docs/
│   └── DESIGN_DOCUMENT.md  # Design document
├── package.json         # Project dependencies
├── .eslintrc.json       # ESLint configuration
├── .prettierrc.json     # Prettier configuration
├── LICENSE              # MIT License
└── README.md            # This file
```

## Instructions to Build

### Prerequisites

- Node.js and npm installed
- Code editor (VS Code recommended)
- Modern web browser

### Installation

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Format Code with Prettier**

   ```bash
   npm run format
   ```

3. **Check Code with ESLint**

   ```bash
   npm run lint
   ```

4. **Run Local Development Server**
   ```bash
   npm start
   ```

### File Organization

- **HTML Files:** Root directory with semantic structure
- **CSS:** `css/` folder with organized stylesheets
- **JavaScript:** `js/` folder with ES6 modules
- **Images:** `images/` folder with descriptive alt text
- **Documentation:** `docs/` folder with design documents

## Deployment

### Deploy to GitHub Pages

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/personal-webpage.git
   git push -u origin main
   ```
3. Enable GitHub Pages in repository settings
4. Select `main` branch as the source

### W3C HTML Validation

- Visit https://validator.w3.org
- Upload or link to your HTML files
- Ensure no errors are reported

### ESLint Validation

```bash
npm run lint
```

### Prettier Code Formatting

```bash
npm run format
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, CSS Variables
- **JavaScript ES6** - Modules, modern syntax
- **Prettier** - Code formatter
- **ESLint** - Code linter

### Tools and Models Used

\*\*Claude (Anthropic)

#### Tasks Completed with AI Assistance:

**AI-Generated Content Page (ai-page.html)**

- Task: Generate creative content about AI and web development
- Prompt: "Write thoughtful content about the intersection of AI and web development for a creative portfolio page"
- Output: The article content in the AI-Generated Creative Page section
- Modification: Integrated into custom HTML structure with manual styling adjustments

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Course instructor and classmates for feedback and guidance
- Web development community for best practices and resources
- AI models used for content generation and code assistance

---

```bash
nvm install
nvm use
```

- **Line endings:** `.gitattributes` enforces LF to avoid accidental CRLF issues on macOS.

- **Avoid OS-specific shell commands in `package.json` scripts**: use cross-platform packages when needed:
  - Use `rimraf` instead of `rm -rf` for cross-platform removal.
  - Use `cross-env` to set environment variables in scripts.

- **Paths:** in code, use Node's `path` module instead of hard-coded separators.

- **Reproducible installs:** commit `package-lock.json` (or `yarn.lock`) so installs are deterministic across machines.

- **Recommended local setup (one-time per machine):**

```bash
# install nvm and use .nvmrc
nvm install
nvm use

# install deps
npm install
```
