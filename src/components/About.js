// About.js

import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
// import WhatILearned from './WhatILearned';

const About = () => {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index
  // const imageFolder = "/assets/about/";
  // const imageCount = 4; // Set the total number of profile images you have, adjust this as needed
  // const imageFormat = ".jpg";

  // const profileImages = Array.from(
  //   { length: imageCount },
  //   (_, i) => `${imageFolder}profile${i + 1}${imageFormat}`
  // );

  // // Change image automatically every 10 seconds
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCount); // Move to the next image, loop back if at the last one
  //   }, 5000);

  //   return () => clearInterval(intervalId); // Clean up interval on unmount
  // }, [imageCount]);

  // // Change image on click
  // const handleImageClick = () => {
  //   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCount); // Move to the next image on click
  // };

  return (
    <>
      <div className="bio">
        <img
          src={profileImages[currentImageIndex]}
          alt="Richard Espy"
          onClick={handleImageClick}
          className="bio-img"
          style={{ cursor: "pointer" }} // Make it clear that the image is clickable
        />
        <h1>About Me</h1>
        <p>
          Hi, I’m Richard Espy — I break software for a living (in the good
          way). I’m a <Link to="/resume">QA Engineer</Link> in Los Angeles, and
          I’ve spent a couple of decades making sure digital products actually
          work the way people think they should. I’ve tested everything from
          huge automotive marketplaces to tiny startup apps to my own side
          projects, catching bugs before they have the chance to ruin someone’s
          day.
        </p>
        <p>
          Outside the job, I’m a dad of four, a new runner working toward my
          first marathon, and a guy who can usually be found in the kitchen.
          Cooking’s my favorite kind of problem-solving - sometimes it’s a slow,
          all-day recipe, other times it’s “what can I make from what’s in the
          fridge right now?” Either way, it’s about making something worth
          sharing.
        </p>
        <p>
          I also tinker with my own ideas. I’m working on a tool called
          Grateplan - it’s a kitchen inventory and meal-planning tool so home
          cooks can skip the last-minute grocery runs. I'm also designing
          something I'm calling Eightia — a collaborative memory-sharing
          platform that’s still in the design and prototype phase. Both keep my
          testing chops sharp and let me play with new tech.
        </p>
        <p>
          I built this site to have a place to share what I’m working on -
          sometimes QA, sometimes cooking, sometimes a half-baked (or fully
          baked) idea that I can’t get out of my head. It’s all a work in
          progress, which honestly is how I like it.
        </p>
        <p>
          Thanks for stopping by! Feel free to connect and share your thoughts.
        </p>
      </div>
      <div>{/* <WhatILearned /> */}</div>
    </>
  );
};

export default About;
