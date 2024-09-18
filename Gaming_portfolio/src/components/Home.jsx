import React from "react";
import "./Home.css";
// import ReactCurvedText from "react-curved-text";
import mortal from "./Mortal-Kombat-Logo.png";
import { GiCrossedSwords } from "react-icons/gi";


function Home() {
  return (
    <center>
      <div className="maincontainer dflex">
        <div className="konami">
          <p><span className="spanc">P</span>rajwal <span className="spanc">J</span>ainkeri</p>
        </div>
        <div className="mortalogo">
          <img src={mortal} height={300} alt="" srcset="" />
        </div>
        <div className="players dflex ">
          <div>
           
            {/* <p>PLAY Select</p> */}
            <div className="buttons">
              <div className="ic res"> <button >RESUME</button>
              <GiCrossedSwords className="sword" /></div>
             <div className="ic"><button>COVER LETTER</button><GiCrossedSwords className="sword" /></div>
              
            </div>
          </div>
       
        </div>
        <div className="credits css-typing">
          <p>
            I'm Frontend Developer   </p> <p>Full Stack Developer @2001</p>
           <p>LICENCED BY Prajwal.co</p>
        
        </div>
      </div>
    </center>
  );
}

export default Home;
