

const skillsData = [

  {
    img: 'https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg',
    title: '.NET Developer',
    desc: 'Building robust backend applications with C#, ASP.NET Core, and .NET Framework',
  },
  {
    img: 'https://cdn.worldvectorlogo.com/logos/power-bi.svg',
    title: 'Power BI',
    desc: 'Data visualization and business intelligence reporting for actionable insights',
  },
  {
    img: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
    title: 'Frontend Development',
    desc: 'Crafting responsive and modern user interfaces with HTML, CSS, JavaScript, and React',
  },
  {
  img: 'https://logosandtypes.com/wp-content/uploads/2021/01/microsoft-dynamics-365.svg',
  title: 'Microsoft Dynamics Business Central',
  desc: 'Expert in ERP solutions and business process automation using Dynamics 365 Business Central',
},
  {
    img: 'https://cdn.worldvectorlogo.com/logos/selenium-1.svg',
    title: 'Selenium',
    desc: 'Web automation testing with Selenium WebDriver and test framework development',
  },
  {
    img: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
    title: 'Angular',
    desc: 'Building scalable web applications using Angular framework',
  },
  {
    img: 'https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg',
    title: 'SQL Server',
    desc: 'Database design, query optimization and data management using MS SQL Server',
  },
]

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Technical Expertise</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">
              <img
                src={skill.img}
                alt={skill.title}
                style={{
                  width: '45px',
                  height: '45px',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                }}
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
