# Durgesh Prajapati — Portfolio (React + Vite)

## Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── Logo.png          ← apna Logo.png yahan rakho
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/
    │   ├── Logo.png       ← apni logo image yahan rakho
    │   └── Durgesh.png    ← apni profile photo yahan rakho
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Setup & Run

### 1. Dependencies Install karo
```bash
npm install
```

### 2. Apni Images rakho
- `src/assets/Logo.png` — navbar logo
- `src/assets/Durgesh.png` — profile photo

### 3. Development Server Start karo
```bash
npm run dev
```
Browser me open ho jayega: `http://localhost:5173`

### 4. Production Build
```bash
npm run build
```

## Customization

- **Personal info** update karo: `src/components/Hero.jsx`
- **Skills** update karo: `src/components/Skills.jsx` me `skillsData` array
- **Projects** update karo: `src/components/Projects.jsx` me `projectsData` array
- **Contact links** update karo: `src/components/Contact.jsx` aur `src/components/Navbar.jsx`
- **Styles** update karo: `src/index.css`
