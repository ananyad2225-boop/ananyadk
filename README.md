# Ananya D K — Personal Developer Portfolio Website

A modern, responsive, high-performance portfolio website built for **Ananya D K**, Computer Science & Engineering undergraduate specializing in **Artificial Intelligence & Machine Learning** at AJ Institute of Engineering and Technology, Mangalore.

---

## 🌟 Key Features

- **AI/Tech-Inspired UI**: Modern glassmorphism, animated glow effects, clean typography (`Space Grotesk`, `Plus Jakarta Sans`, and `JetBrains Mono`).
- **Dark / Light Mode**: Seamless theme toggling with preference persistence via `localStorage`.
- **Project Showcase & Interactive Modals**: Categorized project filters (`All`, `AI & ML`, `IoT & Robotics`, `Web Dev`) and detailed deep-dive popups for each project.
- **Direct Resume Integration**: Instant "Download Resume" buttons linked directly to `resume.pdf`.
- **One-Click Clipboard**: Instant copy buttons for Email (`ananyad2225@gmail.com`) and Phone (`+91 6363200252`) with toast notifications.
- **Interactive Contact Form**: Client-side validation with automated `mailto:` handler dispatch.
- **100% Mobile Responsive**: Fluid layouts from mobile phones to ultra-wide displays.
- **Zero Heavy Dependencies**: Pure semantic HTML5, modern CSS3, and vanilla JavaScript (no npm build steps needed).

---

## 📁 Directory Structure

```
c:\Users\HP\Downloads\swast-AI/
├── index.html                           # Main portfolio homepage
├── styles.css                           # Design system, themes & animations
├── script.js                            # Interactive logic, modals, filters & theme
├── resume.pdf                           # Official downloadable resume PDF
├── 6ac0cdfa035df_ananyadk_resume.pdf    # Original resume source
└── README.md                            # Documentation & deployment guide
```

---

## 🚀 How to Run & Preview

### Option 1: Direct Browser Launch
Simply double click `index.html` or open it with your browser:
```powershell
Start-Process "c:\Users\HP\Downloads\swast-AI\index.html"
```

### Option 2: Local HTTP Server (Python)
If you prefer running a local development server:
```powershell
cd "c:\Users\HP\Downloads\swast-AI"
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 🌐 Free One-Click Deployment

### Deploying to GitHub Pages
1. Create a new repository on [GitHub](https://github.com) named `portfolio` or `<your-username>.github.io`.
2. Push this folder to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Ananya DK portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. Go to **Settings > Pages > Branch: main / root** and click **Save**.
4. Your website will be live at `https://<your-username>.github.io/<your-repo-name>/`!

---

## 📝 Customization

- **Profile & Bio**: Edit text in `index.html` under the `#hero` and `#about` sections.
- **Projects**: Update `projectsData` in `script.js` to add more projects or change descriptions.
- **Resume**: Replace `resume.pdf` with any updated version anytime without touching code.
