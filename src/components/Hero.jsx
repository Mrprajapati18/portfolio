
const GITHUB_URL = 'https://github.com/Mrprajapati18'  
const LINKEDIN_URL = 'https://www.linkedin.com/feed/'
const RESUME_PATH = '/resume/Durgesh_Resume.pdf'   


const Hero = () => {
  return (
    <section className="main-container" id="home">
      <div className="left-card">
        <div className="profile-img">
          <img
            src="./image/Durgesh.png"
            alt="Durgesh Prajapati"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>

        <h2 className="name">Durgesh Prajapati</h2>
        <p className="role">FULL STACK .NET DEVELOPER</p>
        

        <div className="social-icons">
         
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
          </a>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="right-content">
        <h1>Hello</h1>
        <h2 className="subtitle">Here&apos;s who I am &amp; what I do</h2>

        <div className="buttons">
          
          <a
            href={RESUME_PATH}
            download="Durgesh_Prajapati_Resume.pdf"
            className="btn pink"
          >
            RESUME ⬇
          </a>
          <a href="#projects" className="btn border-btn">PROJECTS</a>
        </div>

        <p className="about">
          I am Full Stack Web Developer having more than 1 year of experience using .NET,
          Angular, SQL &amp; Modern Web Technologies. I always focus on upskilling and delivering
          high-quality work with full dedication toward the growth of the company.
        </p>

        
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="github-btn">
          STAR ME ON GITHUB ★
        </a>
      </div>
    </section>
  )
}

export default Hero
