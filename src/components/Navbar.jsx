import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMenuOpen(false)
  }

  return (
    <nav>
      <div className="logo">
        <img
          src="./image/Logo.png"
          alt="Durgesh Prajapati Logo"
          className="logo-img"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>

      <p>Full Stack Developer</p>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links${menuOpen ? ' active' : ''}`} id="navLinks">
        <li><a href="#home" onClick={(e) => handleScroll(e, '#home')}>Home</a></li>
        <li><a href="#education" onClick={(e) => handleScroll(e, '#education')}>WorkExperience/Education</a></li>
        <li><a href="#skills" onClick={(e) => handleScroll(e, '#skills')}>Skills</a></li>
        <li><a href="#projects" onClick={(e) => handleScroll(e, '#projects')}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
