# 🌍 WanderLuxe Travel Co. — Luxury Travel Redefined

> *A responsive, interactive multipage website built with HTML5, CSS3, and JavaScript. Deployed and ready for the world.*

---

## 🚀 Live Demo

🔗 **[View Live Site →](https://wanderluxe-travel.netlify.app)**  
*(Note: Replace this with your actual deployed URL after deployment)*

---

## 🎯 Project Purpose

**WanderLuxe Travel Co.** is a fictional luxury travel agency website designed to showcase curated, high-end travel experiences for discerning global travelers. Built as a final assignment to demonstrate mastery of frontend development — from planning and structure to deployment.

Perfect for:
- Portfolio showcase
- Frontend development practice
- Learning responsive design, interactivity, and deployment

---

## 📄 Pages Included

1. **Home** — Hero banner, featured destinations, testimonials carousel
2. **Destinations** — Filterable grid of luxury locations (Europe, Asia, Americas, Oceania)
3. **About Us** — Company story, team bios with “Read More” toggles, core values
4. **Itineraries** — Expandable trip details with image galleries + “Request Trip” modals
5. **Contact** — Form with real-time validation + success feedback

---

## ✨ Key Features

✅ **Fully Responsive** — Mobile-first design, tested on all device sizes  
✅ **Interactive Elements** —  
   - Testimonial carousel (Home)  
   - Destination filters (Destinations)  
   - Accordion-style itineraries (Itineraries)  
   - Modal trip request form (Itineraries)  
   - Form validation with feedback (Contact)  
✅ **Accessible** — Semantic HTML, keyboard navigation, ARIA labels  
✅ **Reusable Components** — Consistent header, footer, buttons, cards  
✅ **Organized Codebase** — Modular CSS/JS, commented code, meaningful naming  
✅ **Deployed & Production-Ready** — Hosted via Netlify (or your platform of choice)

---

## 🛠️ Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Flexbox, Grid, custom properties, animations, media queries
- **JavaScript (Vanilla)** — DOM manipulation, event handling, form validation
- **Deployment** — Netlify (recommended), GitHub Pages, or Vercel

---

## 📁 Project Structure

```
wanderluxe-travel/
├── index.html
├── destinations.html
├── about.html
├── itineraries.html
├── contact.html
├── css/
│   ├── styles.css          /* Global variables & reset */
│   ├── layout.css          /* Header, footer, containers */
│   ├── components.css      /* Buttons, cards, modals, forms */
│   └── pages/              /* Page-specific overrides */
│       ├── home.css
│       ├── destinations.css
│       ├── about.css
│       ├── itineraries.css
│       └── contact.css
├── js/
│   ├── main.js             /* Mobile menu, scroll animations */
│   ├── destinations.js     /* Filter logic */
│   ├── itineraries.js      /* Accordions + modals */
│   └── contact.js          /* Form validation */
├── images/                 /* Add your own travel images here */
│   ├── hero.jpg
│   ├── destinations/
│   └── team/
└── README.md               /* You’re reading it! */
```

---

## 🖼️ Images Note

This project references images in the `/images` folder. You can:

- Use **placeholder images** from [picsum.photos](https://picsum.photos)
- Download **free high-res travel photos** from [Unsplash](https://unsplash.com)
- Name them as referenced in the HTML (e.g., `paris.jpg`, `ceo.jpg`)

Example placeholder replacement:
```html
<!-- Instead of -->
<img src="./images/destinations/paris.jpg" alt="Paris, France">

<!-- Use -->
<img src="https://picsum.photos/600/400?random=1" alt="Paris, France">
```

---

## 🚀 How to Deploy

### Option 1: Netlify (Recommended)

1. Push this code to a **GitHub repository**
2. Go to [Netlify](https://app.netlify.com/) → Sign in with GitHub
3. Click “Add new site” → “Import an existing project”
4. Select your repo → Click “Deploy site”
5. Done! Netlify gives you a live URL like: `your-site-name.netlify.app`

### Option 2: GitHub Pages

1. Go to your GitHub repo → Settings → Pages
2. Under “Build and deployment”, select Source: “Deploy from a branch”
3. Select Branch: `main` (or `master`) → Folder: `/ (root)`
4. Click Save → Wait 1-2 minutes → Visit `https://yourusername.github.io/your-repo-name`

---

## 💡 How to Customize

- **Change colors?** Edit `:root` variables in `css/styles.css`
- **Add more destinations?** Update the array in `js/destinations.js`
- **Add more team members?** Duplicate `.team-member` blocks in `about.html`
- **Change fonts?** Add Google Fonts link in `<head>` and update `font-family` in `styles.css`

---

## ✅ Final Assignment Checklist

| Requirement                          | Status |
|--------------------------------------|--------|
| Multipage website (5 pages)          | ✅     |
| Responsive design (mobile/desktop)   | ✅     |
| Interactive JS elements              | ✅     |
| Semantic HTML5                       | ✅     |
| Organized file structure             | ✅     |
| Commented & clean code               | ✅     |
| Successfully deployed online         | ✅     |
| README with purpose + live URL       | ✅     |

---

## 📸 Screenshots (Optional — Add After Deployment)

*(You can add screenshots here after deploying)*

> ![Home Page](./images/screenshots/home-desktop.jpg)  
> *Desktop view of homepage*

> ![Mobile Menu](./images/screenshots/mobile-menu.jpg)  
> *Mobile navigation in action*

---

## 🙌 Credits

Built with ❤️ as a final project for frontend mastery.  
Images: [Unsplash](https://unsplash.com) or [Picsum Photos](https://picsum.photos)  
Deployment: [Netlify](https://www.netlify.com)

---

## 📜 License

This project is for educational purposes. Feel free to use, modify, and learn from it.

---

> ✨ **“The journey is the destination.” — WanderLuxe Travel Co.**

---

✅ **Replace the live URL at the top once deployed.**  
✅ **Add your own images or placeholders.**  
✅ **Push to GitHub and deploy!**

---

Let me know if you’d like this README in a downloadable `.md` file format or need help deploying! 🚀