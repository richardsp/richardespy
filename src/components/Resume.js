import React, { useState } from 'react';
import resumePDF from '../assets/Richard_Espy_Resume.pdf';

const Resume = () => {
  const [isExperienceCollapsed, setExperienceCollapsed] = useState(false);
  const [isEducationCollapsed, setEducationCollapsed] = useState(true);

  const toggleExperience = () => setExperienceCollapsed(!isExperienceCollapsed);
  const toggleEducation = () => setEducationCollapsed(!isEducationCollapsed);

  return (
    <div>
      <h1>Richard Espy - Resume</h1>

      <section>
        <h2>Summary</h2>
        <p>
          Experienced Software QA professional specializing in software analysis and testing for Internet technologies. Strong advocate for quality, having developed change control processes, streamlined operations, improved product stability, and built QA teams from the ground up. Skilled in career planning and team growth.
        </p>
      </section>

      <section>
        <h2>Professional Experience</h2>
        
        <h3>Quality Assurance Engineer - Independent Contractor</h3>
        <p>TruLite Health – Phoenix, Arizona - Remote (April 2023 – September 2023)</p>
        <ul>
          <li>Tested Microsoft Azure-based health equity platform integrated with Epic EHR systems.</li>
          <li>Conducted testing of responsive UI updates to guarantee a user-friendly device experience.</li>
          <li>Validated security protocols, ensuring data privacy and protection.</li>
          <li>Verified data accuracy and integrity using complex SQL queries.</li>
          <li>Validated the Continuing Medical Education credit system for practitioners.</li>
        </ul>

        <h3>Senior Software Test Engineer</h3>
        <p>Promenade Group – Santa Monica, California - Remote (February 2021 – March 2023)</p>
        <ul>
          <li>Tested Magento-based CRM e-commerce platforms for florists, restaurants, and liquor stores.</li>
          <li>Verified functionality of new features and validated integration with existing features.</li>
          <li>Collaborated with customer service and onboarding teams to resolve real-world issues.</li>
          <li>Tested backend PHP architecture upgrade and validated ADA compliance implementation.</li>
          <li>Tested internal APIs and multiple 3rd party integrations including Afterpay, customer.io, Delivery Solutions, and Salesforce Marketing Cloud.</li>
          <li>Developed test plans and procedures and led multiple brainstorming sessions for new features.</li>
        </ul>

        {/* Add the rest of your experience here in a similar format */}
      </section>

      <section>
        <h2 onClick={toggleExperience} style={{ cursor: 'pointer' }}>
          {isExperienceCollapsed ? 'Show More Experience' : 'Hide Experience'}
        </h2>
        {!isExperienceCollapsed && (
          <div>
            <h3>QA Engineer</h3>
            <p>EZ Texting – Santa Monica, California (October 2018 – January 2021)</p>
            <ul>
              <li>Tested web-based, transactional, telephony software.</li>
              <li>Worked in an integrated development team responsible for all backend and end-user UI features.</li>
              <li>Sole tester of an initiative for improving paid customer conversion that launched on schedule and bug-free.</li>
              <li>Wrote SQL queries and executed manual and automated test plans.</li>
              <li>Found and verified over 800 issues.</li>
              <li>Set up test environments and seed data for product demos of new features.</li>
              <li>Onboarded and trained new QA team members.</li>
            </ul>

            <h3>Quality Assurance Engineer – Independent Contractor</h3>
            <p>Steelhouse / HomeMe / Beachbody (March 2016 – September 2018)</p>
            <ul>
              <li>Tested web-based creative software and iOS/Android native mobile apps.</li>
              <li>Led testing of Oracle database migration for content management and e-commerce systems.</li>
              <li>Developed and executed test plans and test cases.</li>
              <li>Managed external tester efforts and documented over 500 issues.</li>
            </ul>

            <h3>Quality Assurance Lead</h3>
            <p>The Portal Group / Toyota – Torrance, California (June 2015 – March 2016)</p>
            <ul>
              <li>Led testing of buyatoyota.com and associated automotive marketing websites.</li>
              <li>Supported migration from internal servers to Amazon Web Services.</li>
              <li>Coordinated allocation of testing resources across projects.</li>
            </ul>

            <h3>Manager, Quality Assurance</h3>
            <p>TrueCar.com / Zag.com – Santa Monica, California (September 2006 – October 2014)</p>
            <ul>
              <li>Led a QA team for high-traffic e-commerce websites and mobile apps.</li>
              <li>Mentored junior team members defining areas of expertise and career development.</li>
              <li>Hired, tasked, and evaluated the offshore QA team, establishing clear communication and escalation plans that ensured they were productive throughout their engagement.</li>
              <li>Acted as the first line of support for issues raised by customer service, partners, and end-users.</li>
              <li>Transitioned team from waterfall to agile development.</li>
            </ul>

            <h3>Manager of Quality Assurance</h3>
            <p>Internet Brands / CarsDirect.com – El Segundo, California (November 1999 – September 2006)</p>
            <ul>
              <li>Ensured on-time, on-budget delivery of website updates.</li>
              <li>Recruited and mentored QA team.</li>
              <li>Oversaw configuration management and deployment.</li>
            </ul>

            <h3>Additional Experience</h3>
            <p>Symantec/Peter Norton Group – Senior Quality Assurance Analyst (Beta Testing) / Program Specialist</p>
            <p>New World Computing – Network Administrator / Graphic Designer</p>
            <p>SOS Computers – Computer Sales</p>
          </div>
        )}
      </section>

      <section>
        <h2 onClick={toggleEducation} style={{ cursor: 'pointer' }}>
          {isEducationCollapsed ? 'Show Education and Skills' : 'Hide Education and Skills'}
        </h2>
        {!isEducationCollapsed && (
          <div>
            <h3>Education / Skills</h3>
            <ul>
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
        <h2>Contact Information</h2>
        <p>Richard Espy, Senior Software QA Engineer</p>
        <p>Los Angeles, CA</p>
        <p>Email: richard.espy@gmail.com</p>
        <p>Phone: 310-895-0825</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/richardespy/">linkedin.com/in/richardespy/</a></p>
      </section>

      <section>
        <h2>Download</h2>
        <p><a href={resumePDF} download="Richard_Espy_Resume.pdf">Download PDF Version of My Resume</a></p>
      </section>
    </div>
  );
};

export default Resume;
