const projectsData = [
   {
    img: './image/python.png',
    title: 'Data Science With Python',
    desc: 'Comprehensive Data Science with Python',
    tags: ['Python', 'Anaconda development tool', 'Kaggle'],
    link: '#',
  },
  {
    img: './image/powerbi.png',
    title: 'Analytics Dashboard',
    desc: 'Interactive Power BI dashboard with real-time data visualization and insights',
    tags: ['Power BI', 'Power Apps', 'Data Analysis'],
    link: '#',
  },
 {
    img: './image/business-central.png',
    title: 'Microsoft D365 Business Central',
    desc: ' ERP Data Management and Interactive dashboard with real-time data visualization and insights',
    tags: ['AL Programming', 'Power Apps', 'SQL Server', 'Azure'],
    link: '#',
  },
  {
    img: './image/selenium.png',
    title: 'Sauce Demo WebUI Testing',
    desc: 'Comprehensive WebUI testing for SauceDemo application to ensure functionality, reliability, and user experience',
    tags: ['Selenium', 'Java', 'TestNG', 'Maven'],
    link: '#',
  },
  {
    img: './image/react.png',
    title: 'React Developer',
    desc: 'Online Flower Booking Application for Celebration like Birthday, Ring Ceromeny, Anniversury',
    tags: ['Recat', 'Java Script', 'Type Script', 'GitHub'],
    link: '#',
  },
]

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>

            {/* ✅ Icon hata — real logo banner */}
            <div
              className="project-image"
              style={{ background: project.bgColor }}
            >
              <img
                src={project.img}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',        
                  objectPosition: 'top',    
                  display: 'block',
                }}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.style.background =
                    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}
              />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link-btn"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects