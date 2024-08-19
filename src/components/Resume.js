import React, { useState } from 'react';
import resumePDF from '../assets/Richard_Espy_Resume.pdf';
import './Resume.css'; // Import a CSS file for additional styling

const Resume = () => {
  const [isExperienceCollapsed, setExperienceCollapsed] = useState(true);
  const [isEducationCollapsed, setEducationCollapsed] = useState(true);

  const toggleExperience = () => setExperienceCollapsed(!isExperienceCollapsed);
  const toggleEducation = () => setEducationCollapsed(!isEducationCollapsed);

  return (
    <div className="resume-container">
      <h1 className="resume-title">Richard Espy - Resume</h1>

      <section>
        <h2 className="resume-section-title">Summary</h2>
        <p className="resume-section-content">
          Experienced Software QA professional specializing in software analysis and testing for Internet technologies. Strong advocate for quality, having developed change control processes, streamlined operations, improved product stability, and built QA teams from the ground up. Skilled in career planning and team growth.
        </p>
      </section>

      <section>
        <h2 className="resume-section-title">Professional Experience</h2>
        
        <h3 className="resume-job-title">Quality Assurance Engineer - Independent Contractor</h3>
        <p className="resume-job-details">TruLite Health – Phoenix, Arizona - Remote (April 2023 – September 2023)</p>
        <ul className="resume-job-responsibilities">
          <li>Tested Microsoft Azure-based health equity platform integrated with Epic EHR systems.</li>
          <li>Conducted testing of responsive UI updates to guarantee a user-friendly device experience.</li>
          <li>Validated security protocols, ensuring data privacy and protection.</li>
          <li>Verified data accuracy and integrity using complex SQL queries.</li>
          <li>Validated the Continuing Medical Education credit system for practitioners.</li>
        </ul>

        <h3 className="resume-job-title">Senior Software Test Engineer</h3>
        <p className="resume-job-details">Promenade Group – Santa Monica, California - Remote (February 2021 – March 2023)</p>
        <ul className="resume-job-responsibilities">
          <li>Tested Magento-based CRM e-commerce platforms for florists, restaurants, and liquor stores.</li>
          <li>Verified functionality of new features and validated integration with existing features.</li>
          <li>Collaborated with customer service and onboarding teams to resolve real-world issues.</li>
          <li>Tested backend PHP architecture upgrade and validated ADA compliance implementation.</li>
          <li>Tested internal APIs and multiple 3rd party integrations including Afterpay, customer.io, Delivery Solutions, and Salesforce Marketing Cloud.</li>
          <li>Developed test plans and procedures and led multiple brainstorming sessions for new features.</li>
        </ul>
      </section>

      <section>
        <h2 onClick={toggleExperience} className="resume-collapse-header">
          <span className={`resume-collapse-icon ${isExperienceCollapsed ? '' : 'rotate'}`}>▶</span> 
          {isExperienceCollapsed ? 'Show More Experience' : 'Hide Experience'}
        </h2>
        {!isExperienceCollapsed && (
          <div className="resume-collapsible-content">
            <h3 className="resume-job-title">QA Engineer</h3>
            <p className="resume-job-details">EZ Texting – Santa Monica, California (October 2018 – January 2021)</p>
            <ul className="resume-job-responsibilities">
              <li>Tested web-based, transactional, telephony software.</li>
              <li>Worked in an integrated development team responsible for all backend and end-user UI features.</li>
              <li>Sole tester of an initiative for improving paid customer conversion that launched on schedule and bug-free.</li>
              <li>Wrote SQL queries and executed manual and automated test plans.</li>
              <li>Found and verified over 800 issues.</li>
              <li>Set up test environments and seed data for product demos of new features.</li>
              <li>Onboarded and trained new QA team members.</li>
            </ul>

            <h3 className="resume-job-title">Quality Assurance Engineer – Independent Contractor</h3>
            <p className="resume-job-details">Steelhouse / HomeMe / Beachbody (March 2016 – September 2018)</p>
            <ul className="resume-job-responsibilities">
              <li>Tested web-based creative software and iOS/Android native mobile apps.</li>
              <li>Led testing of Oracle database migration for content management and e-commerce systems.</li>
              <li>Developed and executed test plans and test cases.</li>
              <li>Managed external tester efforts and documented over 500 issues.</li>
            </ul>

            <h3 className="resume-job-title">Quality Assurance Lead</h3>
            <p className="resume-job-details">The Portal Group / Toyota – Torrance, California (June 2015 – March 2016)</p>
            <ul className="resume-job-responsibilities">
              <li>Led testing of buyatoyota.com and associated automotive marketing websites.</li>
              <li>Supported migration from internal servers to Amazon Web Services.</li>
              <li>Coordinated allocation of testing resources across projects.</li>
            </ul>

            <h3 className="resume-job-title">Manager, Quality Assurance</h3>
            <p className="resume-job-details">TrueCar.com / Zag.com – Santa Monica, California (September 2006 – October 2014)</p>
            <ul className="resume-job-responsibilities">
              <li>Led a QA team for high-traffic e-commerce websites and mobile apps.</li>
              <li>Mentored junior team members defining areas of expertise and career development.</li>
              <li>Hired, tasked, and evaluated the offshore QA team, establishing clear communication and escalation plans that ensured they were productive throughout their engagement.</li>
              <li>Acted as the first line of support for issues raised by customer service, partners, and end-users.</li>
              <li>Transitioned team from waterfall to agile development.</li>
            </ul>

            <h3 className="resume-job-title">Manager of Quality Assurance</h3>
            <p className="resume-job-details">Internet Brands / CarsDirect.com – El Segundo, California (November 1999 – September 2006)</p>
            <ul className="resume-job-responsibilities">
              <li>Ensured on-time, on-budget delivery of website updates.</li>
              <li>Recruited and mentored QA team.</li>
              <li>Oversaw configuration management and deployment.</li>
            </ul>

            <h3 className="resume-job-title">Additional Experience</h3>
            <p className="resume-job-details">Symantec/Peter Norton Group – Senior Quality Assurance Analyst (Beta Testing) / Program Specialist</p>
            <p className="resume-job-details">New World Computing – Network Administrator / Graphic Designer</p>
            <p className="resume-job-details">SOS Computers – Computer Sales</p>
          </div>
        )}
      </section>

      <section>
        <h2 onClick={toggleEducation} className="resume-collapse-header">
          <span className={`resume-collapse-icon ${isEducationCollapsed ? '' : 'rotate'}`}>▶</span> 
          {isEducationCollapsed ? 'Show Education and Skills' : 'Hide Education and Skills'}
        </h2>
        {!isEducationCollapsed && (
          <div className="resume-collapsible-content">
            <h3 className="resume-job-title">Education / Skills</h3>
            <ul className="resume-job-responsibilities">
              <li>Education: Computer Science and Business Administration studies, Santa Monica College</li>
              <li>Certifications: Certified Agile ScrumMaster, Certified Agile Scrum Product Owner, Black Box Software Testing (BBST) Software Testing Foundations</li>
              <li>Courses: Selenium WebDriver with Java, Appium Mobile Automation testing, Playwright</li>
              <li>Platforms: Android, iOS, Desktop OS, mobile web</li>
              <li>Technologies: AWS, CI/CD, CSS, Gherkin, GitHub, HTML, JavaScript, MongoDB, Node, SQL, Zephyr</li>
              <li>Applications: Adobe Commerce/Magento, Apple TestFlight, Android Studio, Chrome DevTools, Confluence, DB Visualizer, Docker, Eclipse, Google Analytics, Jenkins, JIRA, Oracle CRM Postman, Salesforce CRM, Selenium, SoapUI, Xcode, WebDriver</li>
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
