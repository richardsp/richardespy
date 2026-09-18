import React, { useState } from "react";
import "../App.css"; // Import a CSS file for additional styling
const resumePDF = "/assets/Richard_Espy_Resume.pdf";

const Resume = () => {
  const [isExperienceCollapsed, setExperienceCollapsed] = useState(true);
  const [isEducationCollapsed, setEducationCollapsed] = useState(true);

  const toggleExperience = () => setExperienceCollapsed(!isExperienceCollapsed);
  const toggleEducation = () => setEducationCollapsed(!isEducationCollapsed);

  return (
    <div className="resume-container">
      <section id="resume" className="section">
        <h2 className="resume-title">Resume</h2>
      </section>
      <h2 className="resume-section-title">Summary</h2>
      <section>
        <ul className="resume-job-responsibilities">
          <li>
            Senior Software QA Engineer and quality engineering leader with
            deep experience across web, mobile, API/backend, SaaS, and
            enterprise systems.
          </li>
          <li>
            Combines hands-on testing expertise with extensive experience
            building QA teams, managing outsourced testers, defining release
            processes, and owning production quality.
          </li>
          <li>
            Currently building GratePlan, applying AI-assisted development and
            QA to user requirements, product strategy, automated-test
            validation, and feedback-driven product development.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="resume-section-title">Professional Experience</h2>

        <h3 className="resume-job-title">Founder / Product &amp; Quality Lead</h3>
        <p className="resume-job-details">
          GratePlan – Los Angeles, CA | 2024–Present
        </p>
        <ul className="resume-job-responsibilities">
          <li>
            Building a full-stack pantry, meal-planning, and cooking platform
            from concept through alpha, owning requirements, roadmap, quality
            strategy, dogfooding, tester recruitment, and feedback-driven
            iteration.
          </li>
          <li>
            Direct AI-assisted development across a production stack including
            React/TypeScript, Node/Express, PostgreSQL/PostGIS, REST APIs,
            Railway, Netlify, and Cloudflare R2; review architecture,
            implementation, automated tests, and documentation for correctness
            and alignment with user requirements.
          </li>
          <li>
            Establish testing across frontend, API/backend, database, and end-to-end workflows using exploratory and automated testing,
            including Playwright; manage production observability and
            integrations including Sentry, Resend, Stripe,
            authentication/OAuth, and external data services.
          </li>
          <li>
            Built production data infrastructure incorporating 454K+ USDA food
            products plus structured ingredient, equipment, and curated recipe
            catalogs; preparing the product and initial tester cohort for
            alpha.
          </li>
        </ul>

        <h3 className="resume-job-title">Quality Assurance Engineer (Contract)</h3>
        <p className="resume-job-details">
          TruLite Health – Remote (Phoenix, AZ) | 2023
        </p>
        <ul className="resume-job-responsibilities">
          <li>
            Tested Microsoft Azure–based health-equity platform integrated
            with Epic EHR.
          </li>
          <li>
            Utilized Postman for API testing to verify HIPAA and PII
            compliance; conducted privacy and security assessments that
            mitigated potential data exposure.
          </li>
          <li>
            Verified data integrity with complex SQL queries; tested
            responsive UI across devices.
          </li>
          <li>
            Tested Continuing Medical Education credit workflows for
            practitioners.
          </li>
        </ul>

        <h3 className="resume-job-title">Senior Software Test Engineer</h3>
        <p className="resume-job-details">
          Promenade Group – Remote (Santa Monica, CA) | 2021–2023
        </p>
        <ul className="resume-job-responsibilities">
          <li>
            Built and executed test strategies for business verticals
            (florists, food, liquor) while maintaining regression coverage
            across the core SaaS platform.
          </li>
          <li>
            Sole QA owner for SWIGG liquor delivery; validated third-party
            Delivery Solutions API integrations, provided vendor feedback that
            improved their service, and ensured smooth buyer workflows.
          </li>
          <li>
            Conducted functional and integration testing across web, mobile,
            and APIs, ensuring seamless data flow.
          </li>
          <li>
            Collaborated with engineering leadership to integrate QA feedback
            earlier in planning and release cycles.
          </li>
          <li>
            Mentored developers/product on testing practices, reducing escaped
            defects and speeding releases.
          </li>
        </ul>
      </section>

      <section>
        <h4 onClick={toggleExperience} className="resume-collapse-header">
          <span
            className={`resume-collapse-icon ${
              isExperienceCollapsed ? "" : "rotate"
            }`}
          >
            ▶
          </span>
          {isExperienceCollapsed
            ? "Show additional experience"
            : "Hide additional experience"}
        </h4>
        {!isExperienceCollapsed && (
          <div className="resume-collapsible-content">
            <h3 className="resume-job-title">Quality Assurance Engineer</h3>
            <p className="resume-job-details">
              EZ Texting – Santa Monica, CA | 2018–2021
            </p>
            <ul className="resume-job-responsibilities">
              <li>
                Sole QA for a ground-up website redesign, ensuring
                functional/UX quality across all pages for on-time launch.
              </li>
              <li>
                Tested and validated a new onboarding flow that increased paid
                conversion by ~35%.
              </li>
              <li>
                Diagnosed and validated fix for an MMS delivery issue,
                preventing loss of a $250K client.
              </li>
              <li>
                Coordinated QA for COVID-19 response packages supporting
                small-business continuity.
              </li>
              <li>
                Supported onboarding/trial experiments (registration flows,
                trial bounds, modal optimizations); validated outcomes (e.g.,
                30-day trial lowered ARPU with no conversion lift).
              </li>
              <li>
                Partnered with business &amp; engineering to QA discount
                migrations and plan consultations; reduced billing risk.
              </li>
              <li>
                Built/maintained QA environments; seeded demo data; mentored
                and onboarded new QA engineers.
              </li>
            </ul>

            <h3 className="resume-job-title">Quality Assurance Engineer (Contract)</h3>
            <p className="resume-job-details">
              Various Clients – Culver City, CA | 2016–2018
            </p>
            <ul className="resume-job-responsibilities">
              <li>
                Led testing for web-based creative tools and iOS/Android apps.
              </li>
              <li>
                Tested Oracle database migration for e-commerce/CMS systems.
              </li>
              <li>
                Authored detailed test plans/cases; identified and documented
                500+ issues.
              </li>
              <li>
                Coordinated external/remote testers to maximize coverage.
              </li>
            </ul>

            <h3 className="resume-job-title">Quality Assurance Lead</h3>
            <p className="resume-job-details">
              The Portal Group / Toyota – Torrance, CA | 2015–2016
            </p>
            <ul className="resume-job-responsibilities">
              <li>
                QA lead for buyatoyota.com migration to AWS; validated
                deployment stability.
              </li>
              <li>
                Tested Spanish-language site and ensured full feature parity
                with English.
              </li>
              <li>
                Allocated QA resources across dealership web properties;
                balanced priorities and deadlines.
              </li>
            </ul>

            <h3 className="resume-job-title">Manager, Quality Assurance</h3>
            <p className="resume-job-details">
              TrueCar / Zag – Santa Monica, CA | 2006–2014
            </p>
            <ul className="resume-job-responsibilities">
              <li>
                Owned production release quality sign-off across TrueCar and
                white-label partner sites, serving as final QA authority for
                customer-facing releases.
              </li>
              <li>
                Served as onsite QA liaison to Tech Mahindra's offshore team,
                reproducing issues, clarifying requirements, directing
                testing, and resolving questions between Santa Monica and
                India.
              </li>
              <li>
                Evaluated offshore testers, helped retain strong performers
                and remove poor fits, and managed through high turnover and
                timezone constraints before transitioning the outsourced model
                to local QA.
              </li>
              <li>
                Built and scaled an 8-person onshore QA organization; hired
                and developed staff, including coaching two junior testers to
                Senior promotions.
              </li>
              <li>
                Led the shift from waterfall to Agile and established release
                cadence, defect triage, regression, and release-readiness
                standards across the organization.
              </li>
              <li>
                Scaled white-label testing, integrated QA practices across
                acquisitions, and partnered with Support and dealer customers
                to convert field issues into regression coverage.
              </li>
            </ul>

            <h3 className="resume-job-title">Manager, Quality Assurance</h3>
            <p className="resume-job-details">
              Internet Brands / CarsDirect – El Segundo, CA | 1999–2006
            </p>
            <ul className="resume-job-responsibilities">
              <li>
                Scaled QA for high-traffic, 24/7 consumer sites; cross-trained
                staff to expand capacity without added headcount.
              </li>
              <li>
                Established/enforced project lifecycle and release quality
                gates; led defect triage, improving release reliability and
                site stability.
              </li>
              <li>
                Owned configuration management &amp; production deployments
                pre-CI/CD; final go/no-go authority.
              </li>
              <li>
                Rolled out Akamai CDN, completing development after contractor
                exit; trained engineering on usage.
              </li>
              <li>
                Represented the company at trade shows; built traveling demo
                servers; gathered customer feedback.
              </li>
            </ul>

            <h3 className="resume-job-title">Earlier Career</h3>
            <ul className="resume-job-responsibilities">
              <li>
                Quality Assurance Engineer — Symantec (1994–1998): Tested
                Norton Utilities and other consumer products; logged 3,000+
                defects; awarded A++ for Japanese localization work.
              </li>
              <li>
                Producer — New World Computing (1992–1994): Producer credits
                on four PC game titles; introduced first externally developed
                title.
              </li>
            </ul>
          </div>
        )}
      </section>

      <section>
        <h4 onClick={toggleEducation} className="resume-collapse-header">
          <span
            className={`resume-collapse-icon ${
              isEducationCollapsed ? "" : "rotate"
            }`}
          >
            ▶
          </span>
          {isEducationCollapsed
            ? "Show education and skills"
            : "Hide education and skills"}
        </h4>
        {!isEducationCollapsed && (
          <div className="resume-collapsible-content">
            <h3 className="resume-job-title">Education &amp; Certifications</h3>
            <ul className="resume-job-responsibilities">
              <li>
                Santa Monica College — Computer Science &amp; Business
                Administration studies
              </li>
              <li>
                Certifications: Certified Agile ScrumMaster; Certified Agile
                Product Owner; BBST Foundations; Google Cybersecurity
                Certificate
              </li>
            </ul>

            <h3 className="resume-job-title">Skills</h3>
            <ul className="resume-job-responsibilities">
              <li>
                QA &amp; Test Strategy: functional, regression, exploratory,
                accessibility (ADA/WCAG), compliance (HIPAA/PII), risk-based
                testing, quality gates, release readiness, defect leakage
                prevention, root cause analysis, AI-assisted QA/development
                workflows, test coverage strategy, requirements analysis
              </li>
              <li>
                Automation &amp; Tools: Playwright, Selenium WebDriver,
                Appium, Postman, GitHub Actions/CI/CD, Jenkins, Docker, Git
              </li>
              <li>
                Data, Web &amp; Cloud: SQL, PostgreSQL/PostGIS, REST APIs,
                React, TypeScript, Node.js/Express, Railway, Netlify,
                Cloudflare R2, Sentry, Azure, AWS
              </li>
              <li>
                Collaboration: Agile/Scrum, release sign-off, outsourced QA
                leadership, defect triage, cross-functional facilitation,
                mentoring
              </li>
              <li>
                Domains: SaaS, e-commerce, healthcare, telecom/messaging,
                mobile, consumer software
              </li>
            </ul>
          </div>
        )}
      </section>

      <section>
        <h2 className="resume-section-title">Contact Information</h2>
        <p className="resume-contact-info">
          Richard Espy, Quality Engineering Leader
        </p>
        <p className="resume-contact-info">Los Angeles, CA</p>
        <p className="resume-contact-info">
          <a href="tel:+13108950825">310-895-0825</a>
        </p>
        <p className="resume-contact-info">
          <a href="mailto:richard.espy@gmail.com">richard.espy@gmail.com</a>
        </p>
        <p className="resume-contact-info">
          <a href="https://richardespy.com">richardespy.com</a>
        </p>
        <p className="resume-contact-info">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/richardespy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/richardespy/
          </a>
        </p>
      </section>

      <section className="resume-download">
        <a
          href={resumePDF}
          download="Richard_Espy_Resume.pdf"
          className="resume-download-link"
        >
          Download Resume (PDF)
        </a>
      </section>
    </div>
  );
};

export default Resume;
