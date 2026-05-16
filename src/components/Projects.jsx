// const projectsData = [
//   {
//     icon: '💼',
//     title: 'Business Central Solution',
//     desc: 'Complete ERP implementation with custom modules for inventory and financial management',
//     tags: ['Dynamics 365', 'AL Programming', '.NET'],
//   },
//   {
//     icon: '📊',
//     title: 'Analytics Dashboard',
//     desc: 'Interactive Power BI dashboard with real-time data visualization and insights',
//     tags: ['Power BI', 'Power Apps', 'Data Analysis'],
//   },
//   {
//     icon: '🤖',
//     title: 'Test Automation Suite',
//     desc: 'Comprehensive testing framework with Selenium for automated regression testing',
//     tags: ['Selenium', '.NET', 'Testing'],
//   },
// ]

// const Projects = () => {
//   return (
//     <section id="projects">
//       <h2 className="section-title">Featured Projects</h2>
//       <div className="projects-grid">
//         {projectsData.map((project, index) => (
//           <div className="project-card" key={index}>
//             <div className="project-image">{project.icon}</div>
//             <div className="project-content">
//               <h3>{project.title}</h3>
//               <p>{project.desc}</p>
//               <div className="project-tags">
//                 {project.tags.map((tag, i) => (
//                   <span className="tag" key={i}>{tag}</span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Projects



const projectsData = [
  {
    img: 'https://cdn.worldvectorlogo.com/logos/microsoft-dynamics-365.svg',
    bgColor: 'linear-gradient(135deg, #0078d4 0%, #005a9e 100%)',
    title: 'Business Central Solution',
    desc: 'Complete ERP implementation with custom modules for inventory and financial management',
    tags: ['Dynamics 365', 'AL Programming', '.NET'],
    link: '#',
  },
  {
    img: 'https://cdn.worldvectorlogo.com/logos/power-bi.svg',
    bgColor: 'linear-gradient(135deg, #f2c811 0%, #e6a800 100%)',
    title: 'Analytics Dashboard',
    desc: 'Interactive Power BI dashboard with real-time data visualization and insights',
    tags: ['Power BI', 'Power Apps', 'Data Analysis'],
    link: '#',
  },
  {
    img: 'https://cdn.worldvectorlogo.com/logos/selenium-1.svg',
    bgColor: 'linear-gradient(135deg, #43b02a 0%, #2d7a1c 100%)',
    title: 'Test Automation Suite',
    desc: 'Comprehensive testing framework with Selenium for automated regression testing',
    tags: ['Selenium', '.NET', 'Testing'],
    link: '#',
  },
  {
    img: 'https://cdn.worldvectorlogo.com/logos/selenium-1.svg',
    bgColor: 'linear-gradient(135deg, #e34c26 0%, #c0392b 100%)',
    title: 'Sauce Demo WebUI Testing',
    desc: 'Comprehensive WebUI testing for SauceDemo application to ensure functionality, reliability, and user experience',
    tags: ['Selenium', 'Java', 'TestNG', 'Maven'],
    link: '#',
  },
  {
    img: 'https://cdn.worldvectorlogo.com/logos/java-4.svg',
    bgColor: 'linear-gradient(135deg, #007acc 0%, #005f99 100%)',
    title: 'CURA Health Care Testing',
    desc: 'Automated test cases using Katalon Studio with cross-browser testing on Chrome, Firefox, and Safari',
    tags: ['Katalon', 'Java', 'Jenkins', 'GitHub'],
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
                  width: '80px',
                  height: '80px',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  dropShadow: '0 4px 15px rgba(0,0,0,0.3)',
                }}
                onError={(e) => { e.target.style.display = 'none' }}
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