import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index
  const imageFolder = '/assets/about/';
  const imageCount = 5; // Set the total number of profile images you have, adjust this as needed
  const imageFormat = '.jpg';

  const profileImages = Array.from({ length: imageCount }, (_, i) => `${imageFolder}profile${i + 1}${imageFormat}`);

  // Change image automatically every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCount); // Move to the next image, loop back if at the last one
    }, 5000);

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [imageCount]);

  // Change image on click
  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCount); // Move to the next image on click
  };

  return (
    <>
      <div className="bio">
        <img 
          src={profileImages[currentImageIndex]} 
          alt="Richard Espy" 
          onClick={handleImageClick} 
          className="bio-image"
          style={{ cursor: 'pointer' }} // Make it clear that the image is clickable
        />
        <h1>About Me</h1>
        <p>
          Hi! I&apos;m <b>Richard Espy</b>, a <Link to='/resume'>Software QA Engineer</Link> based in Los Angeles, California.
          With a long career in testing, I&apos;ve honed my expertise in software analysis, quality assurance, and team management,
          specializing in Internet technologies. My professional journey is driven by a relentless pursuit of excellence and a passion for making the digital world a better place.
        </p>
        <p>
          But there&apos;s more to me than just lines of code and test cases. I&apos;m a proud father of four, a beginning runner hoping to complete my first marathon, a lover of <Link to='/travel'>travel</Link>,
          and an avid foodie who loves to <Link to='/cooking'>cook</Link>. Cooking isn&apos;t just a hobby; it&apos;s a creative outlet and a way to share joy with my family
          and friends. Whether I&apos;m perfecting a classic French dish, experimenting with Indian spices, or whipping up a quick and delicious weeknight dinner,
          I find immense satisfaction in the art of culinary creation.
        </p>
        <p>
          This site is where I teach myself new skills, talk about my culinary adventures, and share <Link to='/ideas'>my ideas</Link>.
        </p>
        <p>
          Thanks for stopping by! Feel free to <Link to='contact'>connect</Link>, and share your thoughts.
          I’m glad you’re here.
        </p>
      </div>
      <div>
        {/* <WhatILearned /> */}
      </div>
    </>
  );
};

export default About;
