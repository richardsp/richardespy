import React, { useState } from 'react';
import '../App.css'; // Import a CSS file for additional styling
const resumePDF = '/assets/Richard_Espy_Resume.pdf';

const Resume = () => {
  const [isExperienceCollapsed, setExperienceCollapsed] = useState(true);
  const [isEducationCollapsed, setEducationCollapsed] = useState(true);

  const toggleExperience = () => setExperienceCollapsed(!isExperienceCollapsed);
  const toggleEducation = () => setEducationCollapsed(!isEducationCollapsed);

  return (
    <div className="resume-container">
      <section id="resume" className="section">
      <h1 className="resume-title">Resume</h1>
      </section>

      <section>
        <h2 className="resume-section-title">Summary</h2>
        <p className="resume-section-content">
          Experienced Software QA Engineer passionate about continuous learning and deep product expertise. 
          I seek a dynamic environment where I can directly impact product quality while expanding my knowledge 
          in both technical and business aspects. A strong advocate for collaboration and team-driven success, 
          particularly in environments that value individual challenges and team collaboration.
        </p>
      </section>

      <section>
        <h2 className="resume-section-title">Professional Experience</h2>
        
        <h3 className="resume-job-title">Quality Assurance Engineer (Independent Contractor)</h3>
        <p className="resume-job-details">TruLite Health – Phoenix, AZ (Remote) | April 2023 – September 2023</p>
        <ul className="resume-job-responsibilities">
          <li>Tested Microsoft Azure-based health equity platform integrated with Epic EHR systems.</li>
          <li>Ensured compliance with HIPAA requirements, preventing potential PII exposure.</li>
          <li>Conducted testing of responsive UI updates for a seamless cross-device experience.</li>
          <li>Verified data integrity using complex SQL queries, ensuring accuracy in health-related data.</li>
          <li>Tested Continuing Medical Education credit system for practitioner needs.</li>
        </ul>

        <h3 className="resume-job-title">Senior Software Test Engineer</h3>
        <p className="resume-job-details">Promenade Group – Santa Monica, CA (Remote) | February 2021 – March 2023</p>
        <ul className="resume-job-responsibilities">
          <li>Led the QA effort in achieving ADA compliance, ensuring an inclusive user experience.</li>
          <li>Pivoted to compliance testing mid-project, delivering a fully compliant product on time.</li>
          <li>Collaborated with customer service to drive feature improvements, reducing support costs.</li>
          <li>Developed test plans for APIs and third-party integrations, including Afterpay and Salesforce.</li>
        </ul>
      </section>

      <section>
        <h4 onClick={toggleExperience} className="resume-collapse-header">
          <span className={`resume-collapse-icon ${isExperienceCollapsed ? '' : 'rotate'}`}>▶</span> 
          {isExperienceCollapsed ? 'Show More Experience' : 'Hide Experience'}
        </h4>
        {!isExperienceCollapsed && (
          <div className="resume-collapsible-content">
            <h3 className="resume-job-title">QA Engineer</h3>
            <p className="resume-job-details">EZ Texting – Santa Monica, CA | October 2018 – January 2021</p>
            <ul className="resume-job-responsibilities">
              <li>Spearheaded the QA process for a comprehensive website redesign.</li>
              <li>Served as the sole QA responsible for front-end testing during a major redesign.</li>
              <li>Authored SQL queries and executed manual and automated test plans.</li>
              <li>Set up test environments and seed data for product demos and new feature testing.</li>
            </ul>

            <h3 className="resume-job-title">Manager, Quality Assurance</h3>
            <p className="resume-job-details">TrueCar.com / Zag.com – Santa Monica, CA | September 2006 – October 2014</p>
            <ul className="resume-job-responsibilities">
              <li>Mentored and coached QA team members, guiding several through promotions.</li>
              <li>Managed an offshore QA team, ensuring productivity and clear communication.</li>
              <li>Transitioned the QA team from waterfall to agile methodologies.</li>
            </ul>

            {/* Additional experience can be similarly added */}
          </div>
        )}
      </section>

      <section>
        <h4 onClick={toggleEducation} className="resume-collapse-header">
          <span className={`resume-collapse-icon ${isEducationCollapsed ? '' : 'rotate'}`}>▶</span> 
          {isEducationCollapsed ? 'Show Education and Skills' : 'Hide Education and Skills'}
        </h4>
        {!isEducationCollapsed && (
          <div className="resume-collapsible-content">
            <h3 className="resume-job-title">Education / Skills</h3>
            <ul className="resume-job-responsibilities">
              <li>Education: Computer Science and Business Administration studies, Santa Monica College</li>
              <li>Certifications: Certified Agile ScrumMaster, Certified Agile Scrum Product Owner</li>
              <li>Tools: Postman, Jira, Confluence, Jenkins, Docker, Selenium WebDriver, Appium</li>
              <li>Platforms: iOS, Android, Microsoft Azure, Epic EHR</li>
            </ul>
          </div>
        )}
      </section>

      <section>
        <h2 className="resume-section-title">Contact Information</h2>
        <p className="resume-contact-info">Richard Espy, Senior Software QA Engineer</p>
        <p className="resume-contact-info">Los Angeles, CA</p>
        <p className="resume-contact-info">LinkedIn: <a href="https://www.linkedin.com/in/richardespy/" target="_blank" rel="noopener noreferrer">linkedin.com/in/richardespy/</a></p>
      </section>

      <section className="resume-download">
        <a href={resumePDF} download="Richard_Espy_Resume.pdf" className="resume-download-link">
          Download Resume (PDF)
        </a>
      </section>
    </div>
  );
};

export default Resume;
 