// About.js

// import React from "react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";
// import WhatILearned from './WhatILearned';

const About = () => {
  const navigate = useNavigate();

  // Helper function to navigate to travel page with specific location
  const navigateToTravelLocation = (locationName) => {
    navigate("/travel", { state: { selectedLocation: locationName } });
    // Scroll to top of page after navigation
    window.scrollTo(0, 0);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index
  const imageFolder = "/assets/about/";
  const imageCount = 4; // Set the total number of profile images you have, adjust this as needed
  const imageFormat = ".jpg";

  const profileImages = Array.from(
    { length: imageCount },
    (_, i) => `${imageFolder}profile${i + 1}${imageFormat}`
  );

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
        <h1>About Me</h1>
        <img
          src={profileImages[currentImageIndex]}
          alt="Richard Espy"
          onClick={handleImageClick}
          className="bio-img"
          style={{ cursor: "pointer" }} // Make it clear that the image is clickable
        />
        <p>
          Hi, I'm Richard: a <Link to="/resume">QA engineer</Link>, father of
          four,{" "}
          <a
            href="https://www.nba.com/clippers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LA Clippers
          </a>{" "}
          fan, marathoner-in-training, and the kind of person who notices when
          the menu at a restaurant is clipped upside down… and then tries to fix
          it. (It was glued down. Sad trombone.)
        </p>
        <p>
          I’ve spent more than two decades breaking software in the good way -
          catching bugs before they catch users. Big automotive platforms, SaaS
          startups, my own side projects: I love the puzzle of making sure tech
          does what people think it should do. My job is basically to advocate
          for the user, whether that user is buying a car or just trying to get
          through checkout without wanting to throw their laptop across the
          room.
        </p>
        <p>
          Outside of QA, I solve a different kind of problem: what's for dinner.{" "}
          <Link to="/cooking">Cooking</Link> is my favorite creative outlet,
          equal parts science experiment and comfort ritual. Sometimes that
          means an all-day braise with homemade stock and perfect mise en place,
          other times it's "what can I make with three eggs, half a cabbage, and
          a jar of gochujang?" Either way, dinner's going to be interesting.{" "}
        </p>
        <p>
          I also love to travel, but especially for events. I try to time trips
          with local holidays, festivals, or something unforgettable happening
          nearby. One of my favorite trips was{" "}
          <button
            onClick={() => navigateToTravelLocation("Guatemala City")}
            className="travel-link"
          >
            Guatemala
          </button>{" "}
          during Holy Week, walking streets lined with colorful alfombras and
          watching the processions. I once accidentally timed a trip to{" "}
          <button
            onClick={() => navigateToTravelLocation("Ko Samui")}
            className="travel-link"
          >
            Ko Samui
          </button>{" "}
          with{" "}
          <a
            href="https://en.wikipedia.org/wiki/Loy_Krathong"
            target="_blank"
            rel="noopener noreferrer"
          >
            Loy Krathong
          </a>{" "}
          and saw the sky filled with floating lanterns. More recently, I went
          to{" "}
          <button
            onClick={() => navigateToTravelLocation("Dallas")}
            className="travel-link"
          >
            Dallas
          </button>{" "}
          for the 2024 solar eclipse and I made sure to book my AirBnB to be
          near{" "}
          <a
            href="https://goldeesbbq.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Goldee's
          </a>{" "}
          so I could hit Texas Monthly's #1 BBQ spot.
        </p>
        <p>
          I tinker with my own ideas too. Right now I’m building GratePlan, a
          kitchen inventory + meal-planning tool, and designing Eightia, a
          collaborative memory-sharing platform that crowdsources your
          autobiography. Both scratch the same itch: make life work better,
          smarter, and with less last-minute chaos.
        </p>
        <p>
          This site started as a way to add some new stuff to my skill set. But
          because I can’t leave well enough alone, I turned it into a place to
          share some stuff I like: cooking projects, travel notes, and anything
          else I think my mother would like to see.{" "}
          <a href="mailto:richard@richardespy.com">Let me know</a> what you
          think!
        </p>
      </div>
      <div>{/* <WhatILearned /> */}</div>
    </>
  );
};

export default About;
