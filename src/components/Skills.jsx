const skillsData = [
  {
    icon: '🤖',
    title: 'Data Science',
    desc: 'Developing intelligent solutions using artificial intelligence and machine learning technologies',
  },
  {
    icon: '💼',
    title: 'Microsoft Dynamics Business Central',
    desc: 'Expert in ERP solutions and business process automation using Dynamics 365',
  },
  {
    icon: '⚡',
    title: '.NET Developer',
    desc: 'Building robust backend applications with C#, ASP.NET Core, and .NET Framework',
  },
  {
    icon: '📱',
    title: 'Power Apps',
    desc: 'Creating custom business applications with low-code solutions and Power Platform',
  },
  {
    icon: '📊',
    title: 'Power BI',
    desc: 'Data visualization and business intelligence reporting for actionable insights',
  },
  {
    icon: '🎨',
    title: 'Frontend Development',
    desc: 'Crafting responsive and modern user interfaces with HTML, CSS, JavaScript, and React',
  },
  {
    icon: '🔧',
    title: 'Automation Testing',
    desc: 'Ensuring quality through comprehensive test automation strategies and frameworks',
  },
  {
    icon: '🌐',
    title: 'Selenium',
    desc: 'Web automation testing with Selenium WebDriver and test framework development',
  },
]

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Technical Expertise</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
