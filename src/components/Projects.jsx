const projectsData = [
  {
    icon: '💼',
    title: 'Business Central Solution',
    desc: 'Complete ERP implementation with custom modules for inventory and financial management',
    tags: ['Dynamics 365', 'AL Programming', '.NET'],
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    desc: 'Interactive Power BI dashboard with real-time data visualization and insights',
    tags: ['Power BI', 'Power Apps', 'Data Analysis'],
  },
  {
    icon: '🤖',
    title: 'Test Automation Suite',
    desc: 'Comprehensive testing framework with Selenium for automated regression testing',
    tags: ['Selenium', '.NET', 'Testing'],
  },
]

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">{project.icon}</div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
