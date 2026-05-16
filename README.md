# Durgesh Prajapati — Portfolio 

## Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── Logo.png         
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/
    │   ├── Logo.png      
    │   └── Durgesh.png   
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Setup & Run

### 1. Dependencies Install 
```bash
npm install
```

### 2. Your Images 
- `src/assets/Logo.png` — navbar logo
- `src/assets/Durgesh.png` — profile photo

### 3. Development Server Start 
```bash
npm run dev
```
Open for Browser: `http://localhost:5173`

### 4. Production Build
```bash
npm run build
```

## Customization

- **Personal info** update : `src/components/Hero.jsx`
- **Skills** update : `src/components/Skills.jsx` me `skillsData` array
- **Projects** update: `src/components/Projects.jsx` me `projectsData` array
- **Contact links** update: `src/components/Contact.jsx` aur `src/components/Navbar.jsx`
- **Styles** update: `src/index.css`
