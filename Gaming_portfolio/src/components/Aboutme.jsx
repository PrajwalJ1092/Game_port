import React, { useEffect } from "react";
import "./aboutme.css";
import pajjju from "./prajwal.jpg";

function Aboutme() {
  useEffect(() => {
    const text = `I’m Prajwal Jainkeri, a Full Stack Developer passionate about creating impactful, user-friendly applications.
                  With experience at AI Variant and Sparks Foundation,`;

    let iSpeed = 20; // time delay of print out
    let iTextPos = 0; // initialize text position

    function typewriter() {
      const destination = document.getElementById("typedtext");

      if (iTextPos < text.length) {
        destination.innerHTML = text.substring(0, iTextPos) + "_";
        iTextPos++;
        setTimeout(typewriter, iSpeed);
      } else {
        destination.innerHTML = text; // Remove the cursor after completion
      }
    }

    typewriter();
  }, []);

  return (
    <div className="mainoo">
    <div className="main_container dflex  ">
      <div className="imgbox">
        <h1>
          <img src={pajjju} height={400} alt="Prajwal Jainkeri" />
        </h1>
      </div>
      <div className="ctnbox">
        <p id="typedtext"></p>
      </div>
    </div>
    </div>
 
  );
}

export default Aboutme;
