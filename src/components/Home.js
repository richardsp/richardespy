import React from 'react';
import profilePic from '../assets/profile.jpg'; // Add a profile picture in the assets folder
// import './AboutMe.css'; // Assuming you have some CSS styles for this component

const About = () => {
  return (
    <div className="bio">
      <img src={profilePic} alt="Richard Espy" />
      <h1>About Me</h1>
      <p>
        Hi! I&apos;m Richard Espy, a Software QA Engineer based in Los Angeles, California. 
        With a career spanning over two decades, I&apos;ve honed my expertise in software analysis, quality assurance, and team management, 
        specializing in Internet technologies. My professional journey is driven by a relentless pursuit of excellence and a passion for making the digital world a better place.
      </p>
      <p>
        But there&apos;s more to me than just lines of code and test cases. I&apos;m a proud father of four, a dedicated runner on a mission to conquer a marathon, 
        and an avid foodie with dreams of opening my own restaurant. Cooking isn&apos;t just a hobby; it&apos;s a creative outlet and a way to share joy with my family 
        and friends. Whether I&apos;m perfecting a classic French dish, experimenting with Indian spices, or whipping up a quick and delicious weeknight dinner, 
        I find immense satisfaction in the art of culinary creation.
      </p>
      <p>
        This site is a space where I can share my professional achievements, culinary adventures, and personal musings. Here, you&apos;ll find my resume, recipes, and travel experiences. It&apos;s a reflection of who I am – a tech enthusiast, a creative cook, and a perpetual optimist.
      </p>
      <p>
        Thanks for stopping by!
      </p>
    </div>
  );
};

export default Home;
