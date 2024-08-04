import React from 'react';
import profilePic from '../assets/profile.jpg'; // Add a profile picture in the assets folder

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="bio">
        <img src={profilePic} alt="Richard Espy" />
        <div>
          <p>Hi, I am Richard Espy. I live in Los Angeles and I am a Senior Software QA Engineer with a passion for cooking. I am also a LA Clippers fan, and I enjoy a wide range of activities from sports to theater.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
