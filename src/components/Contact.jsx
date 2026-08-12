import React from 'react';
import './Contact.css';

const MailIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 20 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 0h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Zm0 2 8 6 8-6H2Z" />
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.5 2.5A1.75 1.75 0 1 0 3.5 6a1.75 1.75 0 0 0 0-3.5ZM1.8 7.8h3.4V18H1.8V7.8ZM7.6 7.8h3.26v1.4h.05c.45-.85 1.56-1.75 3.22-1.75 3.44 0 4.07 2.26 4.07 5.2V18h-3.4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55V18H7.6V7.8Z" />
  </svg>
);

const DribbbleIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M2.5 12.5c4-1.2 8.7-1.4 15-.3M3.6 5.8c3 2.6 8.4 4.5 13.4 3.7M8.2 2.3c2.6 3.2 4 8.4 3.4 15.2"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1.5a8.5 8.5 0 0 0-2.69 16.57c.42.08.58-.19.58-.41v-1.44c-2.37.51-2.87-1.14-2.87-1.14-.39-.98-.95-1.25-.95-1.25-.77-.53.06-.52.06-.52.86.06 1.31.88 1.31.88.76 1.3 1.99.93 2.48.71.08-.55.3-.93.54-1.14-1.89-.22-3.88-.95-3.88-4.22 0-.93.33-1.7.88-2.29-.09-.22-.38-1.1.08-2.3 0 0 .72-.23 2.36.87a8.13 8.13 0 0 1 4.3 0c1.64-1.1 2.36-.87 2.36-.87.46 1.2.17 2.08.08 2.3.55.6.88 1.36.88 2.29 0 3.28-2 4-3.9 4.21.31.27.58.79.58 1.6v2.36c0 .22.16.5.59.41A8.5 8.5 0 0 0 10 1.5Z"
    />
  </svg>
);

const PROCESS_STEPS = [
  { number: '01', label: 'Define' },
  { number: '02', label: 'Research' },
  { number: '03', label: 'Wireframes' },
  { number: '04', label: 'Design' },
  { number: '05', label: 'Prototype' },
  { number: '06', label: 'Test' },
];

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <span className="contact-label">Let&apos;s Work Together</span>
        <p className="contact-text">
          Open To Product Design Roles And Freelance Work.
        </p>

        <div className="contact-process">
          <div className="contact-process-line" aria-hidden="true" />
          <div className="contact-process-steps">
            {PROCESS_STEPS.map((step) => (
              <div className="contact-process-step" key={step.number}>
                <div className="contact-process-circle">{step.number}</div>
                <span className="contact-process-label">{step.label}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="contact-heading">Ready To Build Something Epic?</h2>

        <a
          className="contact-email-btn"
          href="mailto:nzubemolokwu5@gmail.com"
        >
          <MailIcon className="contact-email-icon" />
          <span>nzubemolokwu5@gmail.com</span>
        </a>

        <div className="contact-socials">
          <a
            className="contact-social-link contact-social-linkedin"
            href="https://www.linkedin.com/in/valentina-molokwu-730236278/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="contact-social-icon" />
            <span>Linkedin</span>
          </a>
          <a
            className="contact-social-link contact-social-dribbble"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DribbbleIcon className="contact-social-icon" />
            <span>Dribble</span>
          </a>
          <a
            className="contact-social-link contact-social-github"
            href="https://github.com/nzube2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="contact-social-icon" />
            <span>Github</span>
          </a>
        </div>
      </div>

      <div className="contact-footer-bar">
        <p className="contact-footer-text">
          Designed And Developed By Valentina. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
