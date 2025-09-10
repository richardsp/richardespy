// About.js

// import React, { useState, useEffect } from "react";
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

  // Code for image block
  //   <img
  //   src={profileImages[currentImageIndex]}
  //   alt="Richard Espy"
  //   onClick={handleImageClick}
  //   className="bio-img"
  //   style={{ cursor: "pointer" }} // Make it clear that the image is clickable
  // />

  return (
    <>
      <div className="bio">
        <h1>About Me</h1>
        <p>
          Hi, I’m Richard — QA engineer, father of four, Clipper fan,
          marathoner-in-training, and the kind of person who notices when the
          menu at a restaurant is clipped upside down and politely asks them to
          fix it.
        </p>
        <p>
          I’ve spent more than two decades breaking software in the good way —
          catching bugs before they catch users. Big automotive platforms, SaaS
          startups, my own side projects — I love the puzzle of making sure tech
          does what people think it should do. My job is basically to advocate
          for the user, whether that user is buying a car or just trying to get
          through checkout without wanting to throw their laptop across the
          room.
        </p>
        <p>
          Outside of QA, I solve a different kind of problem: what’s for dinner.
          Cooking is my favorite creative outlet, equal parts science experiment
          and comfort ritual. Sometimes that means an all-day braise with
          homemade stock and perfect mise en place, other times it’s “what can I
          make with three eggs, half a cabbage, and a jar of gochujang?” Either
          way, dinner’s going to be interesting.{" "}
        </p>
        <p>
          I also love to travel — anywhere, really — but especially for events.
          I try to time trips with local holidays, festivals, or something
          unforgettable happening nearby. One of my favorite trips was Guatemala
          during Holy Week, walking streets lined with colorful alfombras and
          watching the processions. I once accidentally timed a trip to Ko Samui
          with Loy Krathong and saw the sky filled with floating lanterns. Most
          recently, I spent four years planning to be in Dallas for the 2024
          solar eclipse — and yes, I booked my AirBnB near Goldee’s so I could
          also hit Texas Monthly’s #1 BBQ spot.
        </p>
        <p>
          I tinker with my own ideas too. Right now I’m building GratePlan, a
          kitchen inventory + meal-planning tool, and designing Eightia, a
          collaborative memory-sharing platform that crowdsources your
          autobiography. Both scratch the same itch: make life work better,
          smarter, and with less last-minute chaos.
        </p>
        <p>
          This site started as a way to learn some new skills. But because I
          can’t leave well enough alone, I turned it into a place to share some
          of my stuff — cooking projects, travel notes, and anything else that I
          think my mother would like to see. Let me know what you think!
        </p>
      </div>
      <div>{/* <WhatILearned /> */}</div>
    </>
  );
};

export default About;
