const Education = () => {
  return (
    <section id="education">
      <h2 className="section-title">Education</h2>
      <div className="skills-grid">

        <div className="skill-card">
          <div className="skill-icon">🎓</div>
          <h3>B.Tech - Computer Science & Engineering</h3>
          <p><strong>Millennium Institute of Technology and Science</strong></p>
          <p>Bhopal, Madhya Pradesh, India</p>
          <p>CGPA: 7.90</p>
          <p style={{ color: '#667eea', marginTop: '8px' }}>07/2020 – 06/2024</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">📘</div>
          <h3>Diploma - Information Technology</h3>
          <p><strong>Shri Ram Swaroop Memorial University</strong></p>
          <p>Lucknow, Uttar Pradesh</p>
          <p style={{ color: '#667eea', marginTop: '8px' }}>2018 – 2021</p>
        </div>

      </div>
    </section>
  )
}

export default Education