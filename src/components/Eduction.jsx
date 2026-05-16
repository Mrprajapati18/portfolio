import './Eduction.css'

const experiences = [
  {
    period: 'APR 2025 – PRESENT',
    title: 'Technical Consultant – Microsoft Dynamics 365 Business Central',
    company: 'Punjab Bulls Technology Pvt. Ltd.',
    location: 'Delhi | Remote',
    points: [
      'Experience in ERP Domain (Dynamics 365 Business Central).',
      'Experience in Report development in RDLC Report Builder & Microsoft Visual Studio.',
      'Good experience in Developing Reports in Dynamics 365 Business Central (C/AL).',
      'Real-Time Data Insight, Industry-Specific Solutions, Customization & Flow the Data as per requirements.',
      'Create Table, Page, Table Extension and Page Extension & Report Expertise on Report creation and customization.',
      'Design Role Center, Design multiple type of Reports.',
    ],
  },
  {
    period: 'INTERNSHIP',
    title: 'Manual & Automation Testing Intern',
    company: 'KodNest Technologies Pvt. Ltd.',
    location: 'Bengaluru',
    points: [
      'Completed Selenium Automation Testing training at Kodnest Technologies Pvt. Ltd., Bengaluru.',
      'Developed practical skills through hands-on projects using Selenium WebDriver (Eclipse IDE).',
      'Proficient in Functional testing analysis using Manual Testing, Data Driven Testing etc.',
    ],
  },
]

const educations = [
  {
    period: '07/2020 – 06/2024',
    title: 'B.Tech in Computer Science and Engineering',
    company: 'Millennium Institute of Technology and Science',
    location: 'Bhopal, Madhya Pradesh, India',
    points: ['CGPA: 7.90'],
  },
  {
    period: '2018 – 2021',
    title: 'Diploma – Information Technology',
    company: 'Shri Ram Swaroop Memorial University',
    location: 'Lucknow, Uttar Pradesh',
    points: [],
  },
]

const TimelineCard = ({ item, side }) => (
  <div className={`timeline-row ${side}`}>
    <div className="timeline-card">
      <div className="card-period">
        <span className="period-icon">💼</span>
        {item.period}
      </div>
      <h3 className="card-title">{item.title}</h3>
      <div className="card-company">{item.company}</div>
      <div className="card-location">{item.location}</div>
      {item.points.length > 0 && (
        <ul className="card-points">
          {item.points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
      )}
    </div>
    <div className="timeline-dot" />
  </div>
)

const Education = () => {
  return (
    <>
      <section id="education">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline-container">
          <div className="timeline-line" />
          {experiences.map((exp, i) => (
            <TimelineCard key={i} item={exp} side={i % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>
      </section>

      <section id="education-section">
        <h2 className="section-title">Education</h2>
        <div className="timeline-container">
          <div className="timeline-line" />
          {educations.map((edu, i) => (
            <TimelineCard key={i} item={edu} side={i % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Education